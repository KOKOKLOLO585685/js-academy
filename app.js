const countrySelect = document.getElementById("countrySelect");
const newsContainer = document.getElementById("newsContainer");

const COUNTRY_QUERIES = {
    world: { query: "أخبار العالم", lang: "ar", gl: "EG", ceid: "EG:ar" },
    dz: { query: "الجزائر", lang: "ar", gl: "DZ", ceid: "DZ:ar" },
    eg: { query: "مصر", lang: "ar", gl: "EG", ceid: "EG:ar" },
    sa: { query: "السعودية", lang: "ar", gl: "SA", ceid: "SA:ar" },
    ae: { query: "الإمارات", lang: "ar", gl: "AE", ceid: "AE:ar" },
    ma: { query: "المغرب", lang: "ar", gl: "MA", ceid: "MA:ar" },
    us: { query: "United States", lang: "en", gl: "US", ceid: "US:en" },
    fr: { query: "France", lang: "fr", gl: "FR", ceid: "FR:fr" }
};

function fetchWithTimeout(url, ms = 8000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
}

async function loadNews(countryCode) {
    newsContainer.innerHTML = '<div class="status">جاري تحميل أحدث الأخبار...</div>';
    const config = COUNTRY_QUERIES[countryCode] || COUNTRY_QUERIES.world;

    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(config.query)}&hl=${config.lang}&gl=${config.gl}&ceid=${config.ceid}`;

    // المحاولة الأولى عبر rss2json ثم بديل عبر allorigins
    const endpoints = [
        { type: "json", url: `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}` },
        { type: "xml", url: `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}` }
    ];

    for (const ep of endpoints) {
        try {
            const res = await fetchWithTimeout(ep.url, 8000);
            if (!res.ok) continue;

            let items = [];

            if (ep.type === "json") {
                const data = await res.json();
                if (data.status === "ok" && Array.isArray(data.items) && data.items.length > 0) {
                    items = data.items.map(i => ({
                        title: i.title,
                        link: i.link,
                        pubDate: i.pubDate
                    }));
                }
            } else {
                const xmlText = await res.text();
                const doc = new DOMParser().parseFromString(xmlText, "text/xml");
                const nodes = Array.from(doc.querySelectorAll("item"));
                items = nodes.map(n => ({
                    title: n.querySelector("title")?.textContent || "بدون عنوان",
                    link: n.querySelector("link")?.textContent || "#",
                    pubDate: n.querySelector("pubDate")?.textContent || ""
                }));
            }

            if (items.length > 0) {
                renderArticles(items.slice(0, 15));
                return;
            }
        } catch (_) {
            // جرّب المصدر التالي
        }
    }

    newsContainer.innerHTML =
        '<div class="status">تعذّر جلب الأخبار حالياً (قد يكون بسبب حجب الطلبات أو بطء المصدر). جرّب تحديث الصفحة أو إيقاف مانع الإعلانات مؤقتاً.</div>';
}

function renderArticles(articles) {
    newsContainer.innerHTML = "";
    articles.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";

        const parsedDate = new Date(item.pubDate);
        const dateText = isNaN(parsedDate.getTime())
            ? "حديث"
            : parsedDate.toLocaleDateString("ar-EG", { year: "numeric", month: "short", day: "numeric" });

        const safeTitle = String(item.title).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const safeLink = item.link || "#";

        card.innerHTML = `
            <h3>${safeTitle}</h3>
            <div class="meta">تاريخ النشر: ${dateText}</div>
            <a href="${safeLink}" target="_blank" rel="noopener noreferrer">اقرأ التفاصيل من المصدر ←</a>
        `;
        newsContainer.appendChild(card);
    });
}

countrySelect.addEventListener("change", (e) => {
    loadNews(e.target.value);
});

// تحميل البلد المختار حالياً عند فتح الصفحة
loadNews(countrySelect.value || "world");
