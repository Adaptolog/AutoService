        const translations = {
            uk: {
                nav_home: "Головна", nav_info: "Інфо", nav_services: "Послуги",
                nav_hours: "Графік", nav_contact: "Контакти",
                hero_sub: "СЕРВІС • ПНЕВМО",
                serv_1_title: "Автомобілі", serv_1_desc: "Повний сервіс та ремонт",
                serv_2_title: "Фургони", serv_2_desc: "До вантажопідйомності 5.5т",
                serv_3_title: "Причепи", serv_3_desc: "Ремонт та сервіс влеків",
                hours_note: "Поза робочим часом — за домовленістю."
            },
            cs: {
                nav_home: "Domů", nav_info: "Info", nav_services: "Služby",
                nav_hours: "Otevírací doba", nav_contact: "Kontakt",
                hero_sub: "SERVIS • PNEU",
                serv_1_title: "Osobní vozy", serv_1_desc: "Kompletní servis a opravy",
                serv_2_title: "Dodávky", serv_2_desc: "Servis vozů do 5.5t",
                serv_3_title: "Vleky", serv_3_desc: "Opravy a servis přívěsů",
                hours_note: "Mimo pracovní dobu dle tel. domluvy."
            },
            en: {
                nav_home: "Home", nav_info: "Info", nav_services: "Services",
                nav_hours: "Hours", nav_contact: "Contact",
                hero_sub: "SERVICE • TYRES",
                serv_1_title: "Passenger Cars", serv_1_desc: "Full service & repairs",
                serv_2_title: "Vans", serv_2_desc: "Up to 5.5t capacity",
                serv_3_title: "Trailers", serv_3_desc: "Repairs and trailer service",
                hours_note: "After hours by phone appointment."
            }
        };

        function setLang(lang) {
            document.querySelectorAll('[data-key]').forEach(elem => {
                const key = elem.getAttribute('data-key');
                elem.innerText = translations[lang][key];
            });
            document.querySelectorAll('.lang-switcher button').forEach(btn => btn.classList.remove('active'));
            document.getElementById('btn-' + lang).classList.add('active');
        }

        // Авто визначення мови браузера
        const userLang = navigator.language.substring(0, 2);
        let defaultLang = 'uk'; // За замовчуванням
        if (userLang === 'cs') {
            defaultLang = 'cs';
        } else if (userLang === 'en') {
            defaultLang = 'en';
        }
        setLang(defaultLang);

        // Завантаження фону та приховування loading screen
        const img = new Image();
        img.src = 'images/background.jpg';
        img.onload = () => {
            document.getElementById('loading-screen').classList.add('hide');
        };

        // Плавний паралакс для фону
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            document.getElementById('heroBg').style.transform = `translateY(${offset * 0.4}px)`;
        });