const lessons = [
    {
        title: "1. الطباعة والنصوص",
        desc: "نستخدم دالة print() لعرض النصوص على الشاشة. يجب وضع النصوص دائماً بين علامتي تنصيص.",
        task: "اطبع جملة: مرحبا بالعالم",
        starterCode: 'print("اكتب النص هنا");',
        expectedOutput: "مرحبا بالعالم"
    },
    {
        title: "2. طباعة الأرقام",
        desc: "يمكن طباعة الأرقام مباشرة دون الحاجة لوضعها بين علامتي تنصيص.",
        task: "اطبع الرقم 2026 على الشاشة.",
        starterCode: 'print();',
        expectedOutput: "2026"
    },
    {
        title: "3. المتغيرات النصية",
        desc: "نستخدم كلمة let لإنشاء متغير وتخزين قيمة بداخله لاستخدامها لاحقاً.",
        task: "أنشئ متغيراً باسم city قيمته الجزائر ثم اطبعه.",
        starterCode: 'let city = "الجزائر";\n// اطبع المتغير هنا\n',
        expectedOutput: "الجزائر"
    },
    {
        title: "4. العمليات الحسابية (الجمع)",
        desc: "يمكن إجراء عمليات الجمع (+) والطرح (-) بين الأرقام والمتغيرات الرقمية.",
        task: "احسب واطبع ناتج جمع 45 و 55 (النتيجة 100).",
        starterCode: 'let x = 45;\nlet y = 55;\n// اطبع المجموع\n',
        expectedOutput: "100"
    },
    {
        title: "5. الضرب والقسمة",
        desc: "نستخدم علامة النجمة (*) للضرب وعلامة الشرطة المائلة (/) للقسمة.",
        task: "اضرب الرقم 8 في 7 واطبع النتيجة (56).",
        starterCode: 'print(8 * 7);',
        expectedOutput: "56"
    },
    {
        title: "6. دمج النصوص",
        desc: "تستخدم علامة الجمع (+) أيضاً لربط نصين معاً في جملة واحدة.",
        task: "ادمج كلمتي 'تعلم' و 'البرمجة' مع مسافة بينهما واطبعهما.",
        starterCode: 'let a = "تعلم";\nlet b = "البرمجة";\nprint(a + " " + b);',
        expectedOutput: "تعلم البرمجة"
    },
    {
        title: "7. الثوابت (const)",
        desc: "نستخدم const لتعريف قيم ثابتة لا تتغير طوال تشغيل البرنامج.",
        task: "عرف ثابتاً باسم pi قيمته 3.14 ثم اطبعه.",
        starterCode: 'const pi = 3.14;\n// اطبع الثابت\n',
        expectedOutput: "3.14"
    },
    {
        title: "8. باقي القسمة (%)",
        desc: "يعطينا الرمز (%) الباقي من عملية قسمة عددين، ويفيد في معرفة الأعداد الزوجية والفردية.",
        task: "اطبع باقي قسمة 10 على 3 (النتيجة 1).",
        starterCode: 'print(10 % 3);',
        expectedOutput: "1"
    },
    {
        title: "9. المقارنات المنطقية",
        desc: "تُرجع عمليات المقارنة مثل (>) و (<) و (===) قيمة منطقية: true (صحيح) أو false (خطأ).",
        task: "اختبر هل 15 أكبر من 10 واطبع النتيجة.",
        starterCode: 'print(15 > 10);',
        expectedOutput: "true"
    },
    {
        title: "10. الجملة الشرطية (if)",
        desc: "تنفذ جملة if الكود الموجود بداخلها فقط إذا كان الشرط صحيحاً.",
        task: "إذا كانت الحرارة 35 أكبر من 30، اطبع: الجو حار",
        starterCode: 'let temp = 35;\nif (temp > 30) {\n    // اكتب أمر الطباعة\n}',
        expectedOutput: "الجو حار"
    },
    {
        title: "11. الشرط البديل (else)",
        desc: "تعمل كتلة else كخيار بديل عندما لا يتحقق شرط if.",
        task: "بما أن العمر 15 أصغر من 18، أكمل الكود لطباعة: قاصر",
        starterCode: 'let age = 15;\nif (age >= 18) {\n    print("بالغ");\n} else {\n    // اطبع قاصر هنا\n}',
        expectedOutput: "قاصر"
    },
    {
        title: "12. تعدد الشروط (else if)",
        desc: "نستخدم else if لاختبار أكثر من شرط متتالي.",
        task: "اجعل البرنامج يطبع 'ممتاز' لأن الدرجة تساوي 95.",
        starterCode: 'let grade = 95;\nif (grade >= 90) {\n    print("ممتاز");\n} else if (grade >= 50) {\n    print("ناجح");\n}',
        expectedOutput: "ممتاز"
    },
    {
        title: "13. المعامل المنطقي (AND &&)",
        desc: "يتطلب المعامل && تحقق الشرطين معاً لكي ينفذ الكود.",
        task: "اطبع 'مسموح' لأن المستخدم يملك تذكرة وعمره أكبر من 18.",
        starterCode: 'let hasTicket = true;\nlet age = 20;\nif (hasTicket && age > 18) {\n    print("مسموح");\n}',
        expectedOutput: "مسموح"
    },
    {
        title: "14. حلقة التكرار (for)",
        desc: "تُستخدم حلقة for لتكرار الكود عدداً محدداً من المرات.",
        task: "اطبع الأرقام من 1 إلى 4 (كل رقم في سطر).",
        starterCode: 'for (let i = 1; i <= 4; i++) {\n    print(i);\n}',
        expectedOutput: "1\n2\n3\n4"
    },
    {
        title: "15. حلقة التكرار (while)",
        desc: "تستمر حلقة while في العمل طالما بقي الشرط المحدد صحيحاً.",
        task: "اطبع الأرقام 0 و 1 و 2 باستخدام حلقة while.",
        starterCode: 'let count = 0;\nwhile (count < 3) {\n    print(count);\n    count++;\n}',
        expectedOutput: "0\n1\n2"
    },
    {
        title: "16. المصفوفات (Arrays)",
        desc: "المصفوفة هي قائمة تحفظ عدة قيم في متغير واحد، ويبدأ ترقيم عناصرها من الصفر (0).",
        task: "اطبع العنصر الأول من مصفوفة الفواكه (تفاح).",
        starterCode: 'let fruits = ["تفاح", "موز", "برتقال"];\nprint(fruits[0]);',
        expectedOutput: "تفاح"
    },
    {
        title: "17. طول المصفوفة (.length)",
        desc: "تُستخدم خاصية length لمعرفة عدد العناصر الموجودة داخل المصفوفة.",
        task: "اطبع عدد العناصر الموجودة في مصفوفة الألوان (3).",
        starterCode: 'let colors = ["أحمر", "أخضر", "أزرق"];\nprint(colors.length);',
        expectedOutput: "3"
    },
    {
        title: "18. الدوال البسيطة (Functions)",
        desc: "تجمع الدالة مجموعة أوامر تحت اسم واحد لتنفيذها عند استدعائها.",
        task: "استدعِ دالة greet لطباعة: أهلا بك",
        starterCode: 'function greet() {\n    print("أهلا بك");\n}\n// استدعِ الدالة هنا\n',
        expectedOutput: "أهلا بك"
    },
    {
        title: "19. الدوال والمدخلات (Parameters)",
        desc: "يمكن تمرير بيانات إلى الدالة داخل الأقواس لمعالجتها.",
        task: "مرر الرقم 5 إلى دالة double لطباعة ضعفه (10).",
        starterCode: 'function double(num) {\n    print(num * 2);\n}\ndouble(5);',
        expectedOutput: "10"
    },
    {
        title: "20. الكائنات (Objects)",
        desc: "يخزن الكائن البيانات في شكل أزواج من الخصائص والقيم.",
        task: "اطبع اسم الطالب المخزن داخل كائن student (سامي).",
        starterCode: 'let student = { name: "سامي", level: 1 };\nprint(student.name);',
        expectedOutput: "سامي"
    }
];

let currentLesson = 0;
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
let currentOutput = [];

function print(text) {
    currentOutput.push(String(text));
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML += text + "<br>";
}

function loadSidebar() {
    const list = document.getElementById("lessonsList");
    list.innerHTML = "";
    lessons.forEach((lesson, index) => {
        const btn = document.createElement("button");
        const isDone = completedLessons.includes(index) ? " ✅" : "";
        btn.className = "lesson-btn" + (index === currentLesson ? " active" : "");
        btn.innerText = lesson.title + isDone;
        btn.onclick = () => selectLesson(index);
        list.appendChild(btn);
    });
    document.getElementById("progressText").innerText = `التقدم: ${completedLessons.length} / ${lessons.length}`;
}

function selectLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    document.getElementById("lessonTitle").innerText = lesson.title;
    document.getElementById("lessonDesc").innerText = lesson.desc;
    document.getElementById("lessonTask").innerText = lesson.task;
    document.getElementById("codeEditor").value = lesson.starterCode;
    document.getElementById("output").innerHTML = "النتيجة ستظهر هنا...";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    loadSidebar();
}

function runCode() {
    currentOutput = [];
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    const userCode = document.getElementById("codeEditor").value;
    try {
        eval(userCode);
    } catch (error) {
        outputDiv.innerHTML = "<span style='color:#ff4d4d;'>خطأ برمجي: " + error.message + "</span>";
    }
}

function checkSolution() {
    runCode();
    const feedback = document.getElementById("feedback");
    const nextBtn = document.getElementById("nextBtn");
    const actual = currentOutput.join("\n").trim();
    const expected = lessons[currentLesson].expectedOutput.trim();

    feedback.style.display = "block";
    if (actual === expected) {
        feedback.style.background = "#00b894";
        feedback.style.color = "#fff";
        feedback.innerText = "إجابة صحيحة! أحسنت.";
        if (currentLesson < lessons.length - 1) {
            nextBtn.style.display = "inline-block";
        }
        if (!completedLessons.includes(currentLesson)) {
            completedLessons.push(currentLesson);
            localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
            loadSidebar();
        }
    } else {
        feedback.style.background = "#d63031";
        feedback.style.color = "#fff";
        feedback.innerText = "حاول مرة أخرى. النتيجة الحالية لا تطابق المطلوب.";
        nextBtn.style.display = "none";
    }
}

function nextLesson() {
    if (currentLesson < lessons.length - 1) {
        selectLesson(currentLesson + 1);
    }
}

selectLesson(0);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
