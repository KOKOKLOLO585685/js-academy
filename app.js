const countrySelect = document.getElementById("countrySelect");
const newsContainer = document.getElementById("newsContainer");

const COUNTRY_CONFIG = {
    world: { label: "العالم", q: "world news" },
    dz: { label: "الجزائر", q: "Algeria" },
    eg: { label: "مصر", q: "Egypt" },
    sa: { label: "السعودية", q: "Saudi Arabia" },
    ae: { label: "الإمارات", q: "UAE" },
    ma: { label: "المغرب", q: "Morocco" },
    us: { label: "الولايات المتحدة", q: "United States" },
    fr: { label: "فرنسا", q: "France" }
};

const FALLBACK_NEWS = {
    dz: [
        { title: "مستجدات الاقتصاد والتكنولوجيا في الجزائر", date: "اليوم", url: "https://news.google.com/search?q=الجزائر" },
        { title: "أبرز الأحداث الرياضية والثقافية في الجزائر", date: "اليوم", url: "https://news.google.com/search?q=الجزائر+رياضة" }
    ],
    world: [
        { title: "أهم العناوين والتطورات الدولية اليوم", date: "اليوم", url: "https://news.google.com/search?q=أخبار+العالم" },
        { title: "مستجدات العلوم والتقنية حول العالم", date: "اليوم", url: "https://news.google.com/search?q=تكنولوجيا+العالم" }
    ]
};

function fetchTimeout(url, ms = 6000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), ms);
    return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(id));
}

async function loadNews(countryCode) {
    const cfg = COUNTRY_CONFIG[countryCode] || COUNTRY_CONFIG.world;
    newsContainer.innerHTML = `<div class="status">جاري جلب أخبار: ${cfg.label}...</div>`;

    try {
        const apiUrl = `https://content.guardianapis.com/search?q=${encodeURIComponent(cfg.q)}&page-size=12&api-key=test`;
        const res = await fetchTimeout(apiUrl, 6000);
        if (!res.ok) throw new Error("Network response not ok");

        const data = await res.json();
        const results = data?.response?.results || [];

        if (results.length > 0) {
            const items = results.map(r => ({
                title: r.webTitle,
                date: r.webPublicationDate ? new Date(r.webPublicationDate).toLocaleDateString("ar-EG") : "حديث",
                url: r.webUrl
            }));
            renderArticles(items, cfg.label, false);
            return;
        }
        throw new Error("Empty results");
    } catch (_) {
        // عرض أخبار احتياطية فورية حتى لا تبقى الصفحة معلقة
        const backup = FALLBACK_NEWS[countryCode] || FALLBACK_NEWS.world;
        renderArticles(backup, cfg.label, true);
    }
}

function renderArticles(articles, label, isFallback) {
    newsContainer.innerHTML = "";

    if (isFallback) {
        const note = document.createElement("div");
        note.className = "card";
        note.innerHTML = `<div class="meta">تنبيه: تعذّر الوصول المباشر لمزود الأخبار الخارجي في متصفحك الآن، تم عرض روابط سريعة لـ (${label}):</div>`;
        newsContainer.appendChild(note);
    }

    articles.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";

        const safeTitle = String(item.title).replace(/</g, "&lt;").replace(/>/g, "&gt;");
        const safeUrl = item.url || "#";

        card.innerHTML = `
            <h3>${safeTitle}</h3>
            <div class="meta">القسم: ${label} — التاريخ: ${item.date}</div>
            <a href="${safeUrl}" target="_blank" rel="noopener noreferrer">فتح الخبر ←</a>
        `;
        newsContainer.appendChild(card);
    });
}

countrySelect.addEventListener("change", (e) => {
    loadNews(e.target.value);
});

loadNews(countrySelect.value || "world");
