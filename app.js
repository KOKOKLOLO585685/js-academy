const countrySelect = document.getElementById("countrySelect");
const newsContainer = document.getElementById("newsContainer");

const COUNTRY_DATA = {
    world: {
        name: "العالم (أخبار دولية)",
        query: "أخبار العالم",
        wikiQuery: "أخبار العالم",
        items: [
            { title: "أبرز التطورات والأحداث الدولية اليوم", source: "أخبار العالم", url: "https://news.google.com/search?q=%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1+%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85&hl=ar" },
            { title: "مستجدات الاقتصاد والأسواق العالمية", source: "الاقتصاد الدولي", url: "https://news.google.com/search?q=%D8%A7%D9%84%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF+%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85%D9%8A&hl=ar" },
            { title: "أحدث أخبار التكنولوجيا والذكاء الاصطناعي", source: "التقنية", url: "https://news.google.com/search?q=%D8%AA%D9%83%D9%86%D9%88%D9%84%D9%88%D8%AC%D9%8A%D8%A7&hl=ar" }
        ]
    },
    dz: {
        name: "الجزائر",
        query: "أخبار الجزائر",
        wikiQuery: "الجزائر",
        items: [
            { title: "آخر أخبار الجزائر والمستجدات الوطنية", source: "أخبار الجزائر", url: "https://news.google.com/search?q=%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1&hl=ar&gl=DZ&ceid=DZ:ar" },
            { title: "أخبار الرياضة والمنتخب الوطني الجزائري", source: "رياضة الجزائر", url: "https://news.google.com/search?q=%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9+%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1&hl=ar&gl=DZ&ceid=DZ:ar" },
            { title: "مستجدات الاقتصاد والخدمات في الجزائر", source: "اقتصاد الجزائر", url: "https://news.google.com/search?q=%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF+%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1&hl=ar&gl=DZ&ceid=DZ:ar" }
        ]
    },
    eg: {
        name: "مصر",
        query: "أخبار مصر",
        wikiQuery: "مصر",
        items: [
            { title: "آخر أخبار مصر اليوم", source: "أخبار مصر", url: "https://news.google.com/search?q=%D9%85%D8%B5%D8%B1&hl=ar&gl=EG&ceid=EG:ar" },
            { title: "أخبار الرياضة المصرية", source: "رياضة مصر", url: "https://news.google.com/search?q=%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9+%D9%85%D8%B5%D8%B1&hl=ar&gl=EG&ceid=EG:ar" }
        ]
    },
    sa: {
        name: "السعودية",
        query: "أخبار السعودية",
        wikiQuery: "السعودية",
        items: [
            { title: "آخر أخبار السعودية اليوم", source: "أخبار السعودية", url: "https://news.google.com/search?q=%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&hl=ar&gl=SA&ceid=SA:ar" },
            { title: "مستجدات الاقتصاد والمشاريع في السعودية", source: "اقتصاد السعودية", url: "https://news.google.com/search?q=%D8%A7%D9%82%D8%AA%D8%B5%D8%A7%D8%AF+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&hl=ar&gl=SA&ceid=SA:ar" }
        ]
    },
    ae: {
        name: "الإمارات",
        query: "أخبار الإمارات",
        wikiQuery: "الإمارات العربية المتحدة",
        items: [
            { title: "آخر أخبار الإمارات اليوم", source: "أخبار الإمارات", url: "https://news.google.com/search?q=%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA&hl=ar&gl=AE&ceid=AE:ar" }
        ]
    },
    ma: {
        name: "المغرب",
        query: "أخبار المغرب",
        wikiQuery: "المغرب",
        items: [
            { title: "آخر أخبار المغرب اليوم", source: "أخبار المغرب", url: "https://news.google.com/search?q=%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8&hl=ar&gl=MA&ceid=MA:ar" }
        ]
    },
    us: {
        name: "الولايات المتحدة",
        query: "United States news",
        wikiQuery: "الولايات المتحدة",
        items: [
            { title: "Latest United States News & Updates", source: "US News", url: "https://news.google.com/search?q=United+States&hl=en-US&gl=US&ceid=US:en" }
        ]
    },
    fr: {
        name: "فرنسا",
        query: "France actualités",
        wikiQuery: "فرنسا",
        items: [
            { title: "Dernières actualités en France", source: "France News", url: "https://news.google.com/search?q=France&hl=fr&gl=FR&ceid=FR:fr" }
        ]
    }
};

function escapeHtml(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function fetchWithTimeout(url, ms = 5000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), ms);
    return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(timer));
}

async function loadNews(countryKey) {
    const info = COUNTRY_DATA[countryKey] || COUNTRY_DATA.world;
    newsContainer.innerHTML = `<div class="status">جاري تحميل أخبار ${escapeHtml(info.name)}...</div>`;

    let articles = [...info.items];

    // محاولة جلب نتائج بحث حية من ويكيبيديا العربية كإضافة حية (تدعم CORS غالباً)
    try {
        const wikiUrl = `https://ar.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(info.wikiQuery)}&limit=5&namespace=0&format=json&origin=*`;
        const res = await fetchWithTimeout(wikiUrl, 4500);
        if (res.ok) {
            const data = await res.json();
            const titles = data[1] || [];
            const links = data[3] || [];
            for (let i = 0; i < titles.length; i++) {
                if (titles[i] && links[i]) {
                    articles.push({
                        title: `ملف ومعلومات: ${titles[i]}`,
                        source: "ويكيبيديا",
                        url: links[i]
                    });
                }
            }
        }
    } catch (_) {
        // تجاهل الخطأ والاكتفاء بالقائمة الأساسية
    }

    renderArticles(articles, info.name);
}

function renderArticles(articles, countryLabel) {
    newsContainer.innerHTML = "";

    const headerNote = document.createElement("div");
    headerNote.className = "card";
    headerNote.innerHTML = `
        <div class="meta">البلد المختار: <strong>${escapeHtml(countryLabel)}</strong> — تم تحميل ${articles.length} بطاقة إخبارية</div>
    `;
    newsContainer.appendChild(headerNote);

    articles.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <h3>${escapeHtml(item.title)}</h3>
            <div class="meta">المصدر: ${escapeHtml(item.source)}</div>
            <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">فتح المصدر ←</a>
        `;
        newsContainer.appendChild(card);
    });
}

countrySelect.addEventListener("change", (e) => {
    loadNews(e.target.value);
});

loadNews(countrySelect.value || "world");
