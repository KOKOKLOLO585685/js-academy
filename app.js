const countrySelect = document.getElementById("countrySelect");
const newsContainer = document.getElementById("newsContainer");

const BLOG_ARTICLES = {
    world: [
        {
            id: "w1",
            title: "أبرز التطورات والأحداث الدولية اليوم",
            source: "قسم الأخبار الدولية",
            date: "اليوم",
            summary: "متابعة شاملة لأهم المستجدات السياسية والاقتصادية والتقنية على الساحة العالمية.",
            content: "تواصل الساحة الدولية متابعة أبرز الملفات الاقتصادية والتكنولوجية والتنموية، مع تركيز متزايد على التحول الرقمي، سلاسل الإمداد، والتعاون بين الدول لمواجهة التحديات المشتركة.\n\nيمكنك التبديل بين الدول من القائمة العلوية للاطلاع على ملفات وأخبار كل بلد داخل المدونة مباشرة.",
            sourceUrl: "https://news.google.com/search?q=%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1+%D8%A7%D9%84%D8%B9%D8%A7%D9%84%D9%85&hl=ar"
        },
        {
            id: "w2",
            title: "مستجدات التكنولوجيا والذكاء الاصطناعي حول العالم",
            source: "قسم التقنية",
            date: "اليوم",
            summary: "نظرة على أحدث الأدوات البرمجية وتطبيقات الذكاء الاصطناعي وتأثيرها على صناعة المحتوى.",
            content: "تشهد أدوات الويب وتطوير التطبيقات تطوراً متسارعاً يتيح للمنشئين والمطورين بناء مواقع تفاعلية ونشر المحتوى بسرعة وسهولة أكبر.\n\nتهدف هذه المدونة إلى جمع العناوين والمواضيع في واجهة موحدة وسهلة التصفح.",
            sourceUrl: "https://news.google.com/search?q=%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1+%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A&hl=ar"
        }
    ],
    dz: [
        {
            id: "dz1",
            title: "مستجدات الاقتصاد والتكنولوجيا في الجزائر",
            source: "مدونة الجزائر",
            date: "اليوم",
            summary: "أبرز المستجدات المتعلقة بالتحول الرقمي، المشاريع الاقتصادية، والخدمات في الجزائر.",
            content: "تشهد الجزائر اهتماماً متزايداً بالرقمنة وتطوير الخدمات الإلكترونية ودعم المشاريع والابتكار، إلى جانب متابعة الملفات الاقتصادية والاجتماعية اليومية.\n\nهذا المقال معروض داخل مدونتك مباشرة ليتمكن الزائر من قراءته دون مغادرة الصفحة.",
            sourceUrl: "https://news.google.com/search?q=%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1&hl=ar&gl=DZ&ceid=DZ:ar"
        },
        {
            id: "dz2",
            title: "أبرز الأحداث الرياضية والثقافية في الجزائر",
            source: "مدونة الجزائر",
            date: "اليوم",
            summary: "متابعة لأهم المواضيع الرياضية والأنشطة الثقافية والشبابية في الجزائر.",
            content: "تحظى الرياضة والأنشطة الثقافية بمتابعة واسعة في الجزائر، سواء على مستوى المنافسات المحلية أو المشاركات الإقليمية والدولية.\n\nيمكنك تخصيص هذا القسم وإضافة مقالاتك الخاصة متى شئت.",
            sourceUrl: "https://news.google.com/search?q=%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9+%D8%A7%D9%84%D8%AC%D8%B2%D8%A7%D8%A6%D8%B1&hl=ar&gl=DZ&ceid=DZ:ar"
        }
    ],
    eg: [
        {
            id: "eg1",
            title: "آخر أخبار ومستجدات مصر اليوم",
            source: "مدونة مصر",
            date: "اليوم",
            summary: "ملخص لأهم الملفات والموضوعات المتداولة في مصر.",
            content: "تتنوع المواضيع اليومية في مصر بين الملفات الاقتصادية، المشروعات التنموية، الثقافة، والرياضة.\n\nيتم عرض تفاصيل الخبر هنا داخل موقعك مباشرة.",
            sourceUrl: "https://news.google.com/search?q=%D9%85%D8%B5%D8%B1&hl=ar&gl=EG&ceid=EG:ar"
        }
    ],
    sa: [
        {
            id: "sa1",
            title: "آخر أخبار ومستجدات السعودية اليوم",
            source: "مدونة السعودية",
            date: "اليوم",
            summary: "أبرز المستجدات والمشاريع والفعاليات في المملكة العربية السعودية.",
            content: "تواصل السعودية متابعة برامج التنمية والتحول الاقتصادي والتقني والفعاليات الكبرى.\n\nيمكن قراءة تفاصيل هذا الموضوع هنا داخل موقعك.",
            sourceUrl: "https://news.google.com/search?q=%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9&hl=ar&gl=SA&ceid=SA:ar"
        }
    ],
    ae: [
        {
            id: "ae1",
            title: "آخر أخبار ومستجدات الإمارات اليوم",
            source: "مدونة الإمارات",
            date: "اليوم",
            summary: "أبرز التطورات الاقتصادية والتقنية والخدمية في دولة الإمارات.",
            content: "تبرز دولة الإمارات في مجالات الابتكار، الاقتصاد، والخدمات الرقمية.\n\nيُعرض محتوى الخبر هنا داخل موقعك مباشرة.",
            sourceUrl: "https://news.google.com/search?q=%D8%A7%D9%84%D8%A5%D9%85%D8%A7%D8%B1%D8%A7%D8%AA&hl=ar&gl=AE&ceid=AE:ar"
        }
    ],
    ma: [
        {
            id: "ma1",
            title: "آخر أخبار ومستجدات المغرب اليوم",
            source: "مدونة المغرب",
            date: "اليوم",
            summary: "أهم المستجدات والموضوعات اليومية في المغرب.",
            content: "تشمل المستجدات في المغرب جوانب اقتصادية وثقافية ورياضية وتنموية متنوعة.\n\nتُعرض التفاصيل هنا داخل مدونتك.",
            sourceUrl: "https://news.google.com/search?q=%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8&hl=ar&gl=MA&ceid=MA:ar"
        }
    ],
    us: [
        {
            id: "us1",
            title: "Latest United States News & Updates",
            source: "US Section",
            date: "Today",
            summary: "Key developments across technology, economy, and public affairs in the United States.",
            content: "Technology, markets, and policy updates remain central topics across the United States.\n\nRead inside your blog without leaving the page.",
            sourceUrl: "https://news.google.com/search?q=United+States&hl=en-US&gl=US&ceid=US:en"
        }
    ],
    fr: [
        {
            id: "fr1",
            title: "Dernières actualités en France",
            source: "Section France",
            date: "Aujourd'hui",
            summary: "Aperçu des principaux sujets et actualités en France.",
            content: "Les actualités en France couvrent l'économie, la culture, la technologie et la société.\n\nArticle affiché directement sur votre blog.",
            sourceUrl: "https://news.google.com/search?q=France&hl=fr&gl=FR&ceid=FR:fr"
        }
    ]
};

function escapeHtml(str) {
    return String(str || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function getArticlesForCountry(countryCode) {
    return BLOG_ARTICLES[countryCode] || BLOG_ARTICLES.world;
}

function renderList(countryCode) {
    const articles = getArticlesForCountry(countryCode);
    newsContainer.innerHTML = "";

    articles.forEach(article => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <h3>${escapeHtml(article.title)}</h3>
            <div class="meta">${escapeHtml(article.source)} — ${escapeHtml(article.date)}</div>
            <p>${escapeHtml(article.summary)}</p>
            <button class="btn-read" data-id="${escapeHtml(article.id)}">قراءة الخبر في الموقع</button>
        `;
        card.querySelector(".btn-read").addEventListener("click", () => {
            renderArticleReader(countryCode, article.id);
        });
        newsContainer.appendChild(card);
    });
}

function renderArticleReader(countryCode, articleId) {
    const articles = getArticlesForCountry(countryCode);
    const article = articles.find(a => a.id === articleId) || articles[0];
    if (!article) return;

    newsContainer.innerHTML = `
        <button class="btn-back" id="backToListBtn">← العودة إلى قائمة الأخبار</button>
        <article class="reader-box">
            <h2>${escapeHtml(article.title)}</h2>
            <div class="meta">${escapeHtml(article.source)} — ${escapeHtml(article.date)}</div>
            <div class="reader-body">${escapeHtml(article.content)}</div>
            <a class="external-link" href="${escapeHtml(article.sourceUrl)}" target="_blank" rel="noopener noreferrer">
                بحث إضافي في أخبار Google (رابط خارجي)
            </a>
        </article>
    `;

    document.getElementById("backToListBtn").addEventListener("click", () => {
        renderList(countryCode);
    });
}

countrySelect.addEventListener("change", (e) => {
    renderList(e.target.value);
});

renderList(countrySelect.value || "world");
