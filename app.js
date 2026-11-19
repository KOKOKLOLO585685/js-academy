const countrySelect = document.getElementById("countrySelect");
const newsContainer = document.getElementById("newsContainer");

// خريطة البحث لكل بلد عبر مصادر RSS مجانية بدون الحاجة لمفتاح API
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

async function loadNews(countryCode) {
    newsContainer.innerHTML = '<div class="status">جاري تحميل أحدث الأخبار...</div>';
    const config = COUNTRY_QUERIES[countryCode] || COUNTRY_QUERIES.world;

    // رابط أخبار جوجل بصيغة RSS محوّل إلى JSON عبر خدمة rss2json المجانية
    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(config.query)}&hl=${config.lang}&gl=${config.gl}&ceid=${config.ceid}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status !== "ok" || !data.items || data.items.length === 0) {
            newsContainer.innerHTML = '<div class="status">لم يتم العثور على أخبار حالياً.</div>';
            return;
        }

        newsContainer.innerHTML = "";
        data.items.slice(0, 15).forEach(item => {
            const card = document.createElement("article");
            card.className = "card";

            const date = new Date(item.pubDate).toLocaleDateString("ar-EG", {
                year: "numeric", month: "short", day: "numeric"
            });

            card.innerHTML = `
                <h3>${item.title}</h3>
                <div class="meta">تاريخ النشر: ${date}</div>
                <a href="${item.link}" target="_blank" rel="noopener noreferrer">اقرأ التفاصيل من المصدر ←</a>
            `;
            newsContainer.appendChild(card);
        });
    } catch (error) {
        newsContainer.innerHTML = '<div class="status">حدث خطأ أثناء جلب الأخبار، تحقق من الاتصال بالإنترنت.</div>';
    }
}

// تحديث الأخبار عند تغيير البلد
countrySelect.addEventListener("change", (e) => {
    loadNews(e.target.value);
});

// تحميل الأخبار عند فتح الصفحة لأول مرة
loadNews("world");
