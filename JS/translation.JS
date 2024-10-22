let currentTheme = 'light';
let currentLanguage = 'en';
const translations = {
    en: {
        navMenu: "Menu",
        navMenu1: "Egyptian Menu",
        navMenu2: "Italian Menu",
        navMenu3: "Japanese Menu",
        navMenu4: "Mexican Menu",
        navRecipes: "Recipes",
        navContact: "Contact",
        navAbout: "About Us",
        navServices: "Services",
        navAboutStuff: "Stuff",
        homeTitle1: "Your Ultimate ",
        homeTitle2: "food Destination ",
        // homeTitle3: " Destination",
        homeParagraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nam quia magni.",
        homeButton1: "Buy Now",
        homeButton2: "How to Order",
        homeP1: "Happy Customers",
        homeP2: "Types of Food",
        popularH2: "Featured Resipes",
        popularSlide1: "Drink & Burger",
        popularSlide2: "ice-cream",
        popularSlide3: "Rice",
        popularSlide4: "Soup",
        popularSlide5: "Drink & Burger",
        recipesH2: "Featured  Recipes",
        recipesNew1: "New ",
        recipesNew2: "New ",
        recipesNew3: "New ",
        recipesNew4: "New ",
        recipesNew5: "New ",
        recipesNew6: "New ",

        recipesCard1: "Classic Margherita Pizza",
        recipesCard2: "Classic Margherita Pizza",
        recipesCard3: "Classic Margherita Pizza",
        recipesCard4: "Classic Margherita Pizza",
        recipesCard5: "Classic Margherita Pizza",
        recipesCard6: "Classic Margherita Pizza",

        recipesBigCard1: "15% OFF",
        recipesBigCard2: "Great offer for today",
        recipesBigCard3: "Enjoy a 15% Discount on every",
        recipesBigCard4: "order of Hakka Noodles",
        recipesBigCard5: "Don't Miss Today.",
        recipesBigCard6: "Order Now",

        recipesBigCard6: "15% OFF",
        recipesBigCard7: "Great offer for today",
        recipesBigCard8: "Enjoy a 15% Discount on every",
        recipesBigCard9: "order of Hakka Noodles",
        recipesBigCard10: "Don't Miss Today.",
        recipesBigCard11: "Order Now",


        menuP: "Explore Our Menus",
        menuP1: " Italian menu ",
        menuP2: "Some quick example text to build on the card title and make upthe bulk of the card's content 333t3t3t34t3t3t.",
        menuP3: "Mediterranean menu",
        menuP4: " Some quick example text to build on the card title and make upthe bulk of the card's content 34t34t34t43t3t34t.",
        menuP5: " Asian menu ",
        menuP6: "Some quick example text to build on the card title and make upthe bulk of the card's content reg3rg4g54g.",
        menuP7: "Italian Menu",
        menuP8: "Some quick example text to build on the card title and make up the bulkof the card's content ",
        menuP9: "Chinese Menu",
        menuP10: " Some quick example text to build on the card title and make upthe bulk of the card's content",
        menuP11: "Korean menu",
        menuP12: "Some quick example text to build on the card title and make up the bulkof the card's content",
        menuP13: "Syrian Menu",
        menuP14: "Some quick example text to build on the card title and make up the bulkof the card's content",
        menuP15: "Egyptian Menu",
        menuP16: "Some quick example text to build on the card title and make up the bulkof the card's content",
        

        reservH2:"Seamless Reservations for Unforgettable Dining Moments",
        reservla1:"Your Name*",
        reservIn2:"Your Full Name",
        reservla3:"Your Email*",
        reservIn4:"Your Email",
        reservla5:"Phone Number*",
        reservla6:"Reservation Date*",
        reservla7:"Reservation Time*",
        reservIn8:"Person*",
        reservIn9:"Notes*",
        submit:"Request Reservation",


        reviewH2:"Reviews about our test ",
        reviewP:">Hear what our customers have to say about the incredible flavors in every bite! From savory to sweet, ourdishes continue to impress and satisfy, earning rave reviews for their delicious taste and quality. ",
        


        serviceH1:"Quality Food ",
        serviceP1:"Savor the best, freshest ingredients in every bite, as we take pride in offering only premium quality food tofulfill your cravings! ",
        serviceH2:"Super Taste ",
        serviceP2:"Indulge in our dishes packed with bold flavors and a super taste that will leave your taste buds cravingmore!",
        serviceH3:"Fast Delivery ",
        serviceP3:"Experience lightning-fast delivery, bringing your favorite meals hot and fresh right to your doorstep in notime! ",


        footerP:"We deliver fresh, sustainable ingredients from local farms, making it easy for you to enjoy delicious wholesome meals every day. ",
        footerH4:"Our Links ",
        footerlink1:" Home",
        footerlink2:" About Us",
        footerlink3:" Our Menu",
        footerContact:" Contact Us",
        footeraddress:" 2642 Royal Ln. Mesa, New Jersey 64563",
        footerSub:" Subscribe",
        footersend:"send ",
        footerTime:" Saturday - Sunday \ 7:00AM - 2:00PM",
        footerCopyRighy:" &copy; 2024 craetive team project Limited. All Rights Reserved.",

    },
    ar: {
        navMenu: "القوائم",
        navMenu1: "قائمة الأكلات المصرية",
        navMenu2: "قائمة الأكلات الإيطالية",
        navMenu3: "قائمة الأكلات اليابانية",
        navMenu4: "قائمة الأكلات المكسيكية",
        navRecipes: "الوصفات",
        navContact: "تواصل معنا",
        navAbout: "من نحن",
        navServices: "الخدمات",
        navAboutStuff: "فريق العمل",
        homeTitle1: "وجهتك",
        homeTitle2: " المثالية للطعام" ,
        // homeTitle3: "للطعام",
        homeParagraph: "اكتشف أشهى الوصفات والمأكولات من جميع أنحاء العالم، مع خدمة توصيل سريعة إلى باب منزلك. نقدم لك تجربة طعام استثنائية تجمع بين النكهة والجودة.",
        homeButton1: "اطلب الآن",
        homeButton2: "كيفية الطلب",
        homeP1: "عملاء سعداء",
        homeP2: "أنواع الطعام",
        popularH2: " الوصفات المشهورة",
        popularSlide1: " المشروبات و البيرجر",
        popularSlide2: " ايس كريم",
        popularSlide3: " ارز",
        popularSlide4: " حساء",
        popularSlide5: " المشروبات و البيرجر",
        recipesH2: " الوصفات المميزة ",
        recipesNew1: "جديد ",
        recipesNew2: "جديد ",
        recipesNew3: "جديد ",
        recipesNew4: "جديد ",
        recipesNew5: "جديد ",
        recipesNew6: "جديد ",
        recipesCard1: "بيتزا مارجريتا كلاسيكية",
        recipesCard2: "ساق الضأن المحمر",
        recipesCard3: "برجر لذيذ",
        recipesCard4: "تحمير الخضار",
        recipesCard5: "دجاج محمر مع الخضروات",

        recipesBigCard1: "15% خصم",
        recipesBigCard2: "اكبر عروض اليوم",
        recipesBigCard3: "استمتع ب خصم 15% على اي طلب",
        recipesBigCard4: "اطلب ساق الضأن المحمر",
        recipesBigCard5: "لا تفوت اليوم.",
        recipesBigCard6: "اطلب الان",

        recipesBigCard7: "15% خصم",
        recipesBigCard8: "اكبر عروض اليوم",
        recipesBigCard9: "استمتع ب خصم 15% على اي طلب",
        recipesBigCard10: "اطلب ساق الضأن المحمر",
        recipesBigCard11: "لا تفوت اليوم.",
        recipesBigCard12: "اطلب الان",


        menuP: "  استكشف قوائمة الطعام",
        menuP1: "قائمة الطعام المصرية",
        menuP2: "ستمتع بالنكهات الغنية للمأكولات المصرية، مع أطباق تقليدية مثل الكشري، والفلافل المتبلة، والكباب المشوي الشهي، جميعها تقدم مع السلطات الطازجة والأرز العطري لتجربة أصيلة حقًا.",
        menuP3: "قائمة الطعام الإيطالية",
        menuP4: "استمتع بأشهى الأطباق الإيطالية التقليدية، بما في ذلك المعكرونة الطازجة، والبيتزا المخبوزة في فرن الحطب، والسلطات المنعشة التي تعكس نكهات البحر الأبيض المتوسط.",
        menuP5: "قائمة الطعام المتوسطية",
        menuP6: "استكشف نكهات البحر الأبيض المتوسط مع مجموعة متنوعة من الأطباق الصحية، من الحمص الطازج إلى الأسماك المشوية، مع تشكيلة من السلطات الشهية والمقبلات",
        menuP7: "قائمة الطعام الآسيوية",
        menuP8: "كتشف تنوع المأكولات الآسيوية، حيث نقدم أطباقاً مثل النودلز المقلية، والسوشي الطازج، والكاري الغني بالنكهات، لتجربة طعام فريدة ومميز",
        menuP9: "قائمة الطعام المصرية",
        menuP10: "ستمتع بالنكهات الغنية للمأكولات المصرية، مع أطباق تقليدية مثل الكشري، والفلافل المتبلة، والكباب المشوي الشهي، جميعها تقدم مع السلطات الطازجة والأرز العطري لتجربة أصيلة حقًا.",
        menuP11: "قائمة الطعام الإيطالية",
        menuP12: "استمتع بأشهى الأطباق الإيطالية التقليدية، بما في ذلك المعكرونة الطازجة، والبيتزا المخبوزة في فرن الحطب، والسلطات المنعشة التي تعكس نكهات البحر الأبيض المتوسط.",
        menuP13: "قائمة الطعام المتوسطية",
        menuP14: "استكشف نكهات البحر الأبيض المتوسط مع مجموعة متنوعة من الأطباق الصحية، من الحمص الطازج إلى الأسماك المشوية، مع تشكيلة من السلطات الشهية والمقبلات",
        menuP15: "قائمة الطعام الآسيوية",
        menuP16: "كتشف تنوع المأكولات الآسيوية، حيث نقدم أطباقاً مثل النودلز المقلية، والسوشي الطازج، والكاري الغني بالنكهات، لتجربة طعام فريدة ومميز",
        


        reservH2:"حجوزات سلسة لحظات طعام لا تُنسى",
        reservla1:"الاسم*",
        reservIn2:"اسمك الكامل",
        reservla3:"بريدك الإلكتروني*",
        reservIn4:"بريدك الإلكتروني",
        reservla5:"رقم الهاتف*",
        reservla6:"تاريخ الحجز*",
        reservla7:"وقت الحجز*",
        reservIn8:" عدد الافراد*",
        reservIn9:"ملاحظات*",
        submit:" طلب الحجز",

        reviewH2:"اراء العملاء",
        reviewP:"يقول عملاؤنا إنهم سعداء بالنكهات المذهلة في كل لقمة من طعامنا الشهي والرائع، حيث يكسبون تقييمات رائعة لطعمه ونوعيته.",
    
        serviceH1:"طعام جيد الجودة",
        serviceP1:"استمتع بأفضل وأطيب المكونات الطازجة. نحن نفخر بتقديم طعام عالي الجودة لإسعاد رغباتك.",
        serviceH2:"طعم رائع",
        serviceP2:"تمتع بأطباقنا المحشوة بنكهات جريئة وممتعة، ستترك ذوقك راضيًا ومشتاقًا للمزيد.",
        serviceH3:"توصيل سريع",
        serviceP3:"استمتع بخدمة التوصيل السريع لوصول وجباتك الساخنة والطازجة إلى منزلك في أسرع وقت.",
    
    
        footerP:" نحن نقدم مكونات طازجة ومستدامة من المزارع المحلية، مما يسهل عليك الاستمتاع بوجبات لذيذة وصحية كل يوم.",
        footerH4:"روابط ",
        footerlink1:" الصفحة الرئيسية",
        footerlink2:" تعرف علينا",
        footerlink3:"قوائم الطعام ",
        footerContact:" تواصل معنا",
        footeraddress:" شارع الطيران المتفرع من صلاح سالم - مصر الجديده ",
        footerSub:" اشتراك",
        footersend:" ارسال",
        footerTime:" السبت والأحد: 7:00 صباحًا - 2:00 مساء",
        footerCopyRighy:" &copy; 2024 Creative Team Project Limited. جميع الحقوق محفوظة.",
    
    
    
    
    
    },
};

function setLanguage(language) {
    const textElements = translations[language];

    document.getElementById("navMenu").textContent = textElements.navMenu;
    document.getElementById("navMenu1").textContent = textElements.navMenu1;
    document.getElementById("navMenu2").textContent = textElements.navMenu2;
    document.getElementById("navMenu3").textContent = textElements.navMenu3;
    document.getElementById("navMenu4").textContent = textElements.navMenu4;
    document.getElementById("navRecipes").textContent = textElements.navRecipes;
    document.getElementById("navContact").textContent = textElements.navContact;
    document.getElementById("navAbout").textContent = textElements.navAbout;
    document.getElementById("navServices").textContent = textElements.navServices;
    document.getElementById("navAboutStuff").textContent = textElements.navAboutStuff;
    document.getElementById("homeTitle1").textContent = textElements.homeTitle1;
    document.getElementById("homeTitle2").textContent = textElements.homeTitle2;
    // document.getElementById("homeTitle3").textContent = textElements.homeTitle3;
    document.getElementById("homeParagraph").textContent = textElements.homeParagraph;
    document.getElementById("homeButton1").textContent = textElements.homeButton1;
    document.getElementById("homeButton2").textContent = textElements.homeButton2;
    document.getElementById("homeP1").textContent = textElements.homeP1;
    document.getElementById("homeP2").textContent = textElements.homeP2;
    document.getElementById("popularSlide1").textContent = textElements.popularSlide1;
    document.getElementById("popularSlide2").textContent = textElements.popularSlide2;
    document.getElementById("popularSlide3").textContent = textElements.popularSlide3;
    document.getElementById("popularSlide4").textContent = textElements.popularSlide4;
    document.getElementById("popularSlide5").textContent = textElements.popularSlide5;
    document.getElementById("popularH2").textContent = textElements.popularH2;
    document.getElementById("recipesH2").textContent = textElements.recipesH2;
    document.getElementById("recipesNew1").textContent = textElements.recipesNew1;
    document.getElementById("recipesNew2").textContent = textElements.recipesNew2;
    document.getElementById("recipesNew3").textContent = textElements.recipesNew3;
    document.getElementById("recipesNew4").textContent = textElements.recipesNew4;
    document.getElementById("recipesNew5").textContent = textElements.recipesNew5;
    document.getElementById("recipesNew6").textContent = textElements.recipesNew6;
    document.getElementById("recipesCard1").textContent = textElements.recipesCard1;
    document.getElementById("recipesCard2").textContent = textElements.recipesCard2;
    document.getElementById("recipesCard3").textContent = textElements.recipesCard3;
    document.getElementById("recipesCard4").textContent = textElements.recipesCard4;
    document.getElementById("recipesCard5").textContent = textElements.recipesCard5;
    document.getElementById("recipesCard6").textContent = textElements.recipesCard6;

    document.getElementById("recipesBigCard1").textContent = textElements.recipesBigCard1;
    document.getElementById("recipesBigCard2").textContent = textElements.recipesBigCard2;
    document.getElementById("recipesBigCard3").textContent = textElements.recipesBigCard3;
    document.getElementById("recipesBigCard4").textContent = textElements.recipesBigCard4;
    document.getElementById("recipesBigCard5").textContent = textElements.recipesBigCard5;
    document.getElementById("recipesBigCard6").textContent = textElements.recipesBigCard6;
    document.getElementById("recipesBigCard7").textContent = textElements.recipesBigCard7;
    document.getElementById("recipesBigCard8").textContent = textElements.recipesBigCard8;
    document.getElementById("recipesBigCard9").textContent = textElements.recipesBigCard9;
    document.getElementById("recipesBigCard10").textContent = textElements.recipesBigCard10;
    document.getElementById("recipesBigCard11").textContent = textElements.recipesBigCard11;
    document.getElementById("recipesBigCard12").textContent = textElements.recipesBigCard12;


    document.getElementById("menuP").textContent = textElements.menuP;
    document.getElementById("menuP1").textContent = textElements.menuP1;
    document.getElementById("menuP2").textContent = textElements.menuP2;
    document.getElementById("menuP3").textContent = textElements.menuP3;
    document.getElementById("menuP4").textContent = textElements.menuP4;
    document.getElementById("menuP5").textContent = textElements.menuP5;
    document.getElementById("menuP6").textContent = textElements.menuP6;
    document.getElementById("menuP7").textContent = textElements.menuP7;
    document.getElementById("menuP8").textContent = textElements.menuP8;
    document.getElementById("menuP9").textContent = textElements.menuP9;
    document.getElementById("menuP10").textContent = textElements.menuP10;
    document.getElementById("menuP11").textContent = textElements.menuP11;
    document.getElementById("menuP12").textContent = textElements.menuP12;
    document.getElementById("menuP13").textContent = textElements.menuP13;
    document.getElementById("menuP14").textContent = textElements.menuP14;
    document.getElementById("menuP15").textContent = textElements.menuP15;
    document.getElementById("menuP16").textContent = textElements.menuP16;



    document.getElementById("submit").textContent = textElements.submit;
    document.getElementById("reservIn9").textContent = textElements.reservIn9;
    document.getElementById("reservIn8").textContent = textElements.reservIn8;
    document.getElementById("reservla7").textContent = textElements.reservla7;
    document.getElementById("reservla6").textContent = textElements.reservla6;
    document.getElementById("reservla5").textContent = textElements.reservla5;
    document.getElementById("reservIn4").textContent = textElements.reservla4;
    document.getElementById("reservla3").textContent = textElements.reservla3;
    document.getElementById("reservIn2").textContent = textElements.reservla2;
    document.getElementById("reservla1").textContent = textElements.reservla1;
    document.getElementById("reservH2").textContent = textElements.reservH2;
    
    document.getElementById("reviewP").textContent = textElements.reviewP;
    document.getElementById("reviewH2").textContent = textElements.reviewH2;
    



    document.getElementById("serviceH1").textContent = textElements.serviceH1;
    document.getElementById("serviceP1").textContent = textElements.serviceP1;
    document.getElementById("serviceH2").textContent = textElements.serviceH2;
    document.getElementById("serviceP2").textContent = textElements.serviceP2;
    document.getElementById("serviceH3").textContent = textElements.serviceH3;
    document.getElementById("serviceP3").textContent = textElements.serviceP3;



    document.getElementById("footerP").textContent = textElements.footerP;
    document.getElementById("footerH4").textContent = textElements.footerH4;
    document.getElementById("footerlink1").textContent = textElements.footerlink1;
    document.getElementById("footerlink2").textContent = textElements.footerlink2;
    document.getElementById("footerlink3").textContent = textElements.footerlink3;
    document.getElementById("footerContact").textContent = textElements.footerContact;
    // document.getElementById("footeraddress").textContent = textElements.footeraddress;
    document.getElementById("footerSub").textContent = textElements.footerSub;
    document.getElementById("button1").textContent = textElements.footersend;
    document.getElementById("footerTime").textContent = textElements.footerTime;
    document.getElementById("footerCopyRighy").textContent = textElements.footerCopyRighy;
    










    currentLanguage = language; // Update the current language

    const dropdowns = document.querySelectorAll(".dropdown-menu");

    if (language === "ar") {
        document.documentElement.setAttribute("lang", "ar");
        // document.body.dir = "rtl";
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("dropdown-menu-lg-end");
            dropdown.classList.add("dropdown-menu-lg-start");
        });
    } else {
        document.documentElement.setAttribute("lang", "en");
        // document.body.dir = "ltr";
        dropdowns.forEach((dropdown) => {
            dropdown.classList.remove("dropdown-menu-lg-start");
            dropdown.classList.add("dropdown-menu-lg-end");
        });
    }
}

// function toggleTheme() {
//     if (currentTheme === 'dark') {
//         document.body.classList.remove('dark-theme');
//         document.body.classList.add('light-theme');
//         currentTheme = 'light';
//     } else {
//         document.body.classList.remove('light-theme');
//         document.body.classList.add('dark-theme');
//         currentTheme = 'dark';
//     }
// }

// Example usage:
// setLanguage('ar'); // Set language to Arabic
// setLanguage('en'); // Set language to English


function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute("data-bs-theme", currentTheme);
    document.getElementById("theme-icon").className = currentTheme === 'dark' ? 'fas fa-sun': 'fas fa-moon'  ;
    document.getElementById("home").classList.toggle("bg-dark");
}