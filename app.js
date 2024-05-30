document.addEventListener('DOMContentLoaded', function() {
    var circle = document.querySelector('.circle');
    var words = document.querySelector('.words');
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

    // Add animation class to circle and words on page load
    circle.classList.add('show');
    words.classList.add('show');

    // Update navbar on scroll
    window.addEventListener('scroll', function() {
        scrollPosition = window.scrollY;

        if (scrollPosition > 150) {
            navbar.classList.remove('bg-transparent');
            navbar.classList.add('bg-[#192436]');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('bg-[#192436]');
            navbar.classList.add('bg-transparent');
            navbar.classList.remove('scrolled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const servicesLink = document.getElementById('servicesLink');
    const servicesDropdown = document.getElementById('servicesDropdown');

    servicesLink.addEventListener('click', function() {
        servicesDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('#servicesDropdown') && !target.closest('#servicesLink')) {
            servicesDropdown.classList.add('hidden');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const burgerDropDown = document.getElementById('burgerDropDown');

    burgerMenu.addEventListener('click', function() {
        burgerDropDown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('#burgerDropDown') && !target.closest('#burgerMenu')) {
            burgerDropDown.classList.add('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerServicesLink = document.getElementById('burgerServicesLink');
    const burgerServicesDropdown = document.getElementById('burgerServicesDropdown');

    burgerServicesLink.addEventListener('click', function() {
        burgerServicesDropdown.classList.toggle('hidden');
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        const target = event.target;
        if (!target.closest('#burgerServicesDropdown') && !target.closest('#burgerServicesLink')) {
            burgerServicesDropdown.classList.add('hidden');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // English to Serbian translations
    const translations = {

        'HOME': 'POČETNA',
        'ABOUT US': 'O NAMA',
        'ELECTRICAL SYSTEM DESIGN': 'DIZAJN ELEKTRIČNIH SISTEMA',
        'COMMISSIONING & STARTUP': 'PUŠTANJE U RAD I POKRETANJE',
        'BROCHURE': 'BROŠURA',
        'SERVICES': 'USLUGE',
        'REFERENCES': 'REFERENCE',
        'CONTACT': 'KONTAKT',
        'GALLERY': 'GALERIJA',
        'WELCOME TO TASCAL ENGINEERING': 'DOBRODOŠLI U TASCAL INŽENJERING',
        'CONSULTING': 'KONSULTACIJE',
        'TASCAL ENGINEERING is a company for the design and execution of all electrical installations of high and low current, programming and commissioning of IT systems, technical security systems and automatic control and management systems (EMS, BMS, RMS) in commercial construction and industry.': 'TASCAL INŽENJERING je firma za projektovanje i izvođenje svih elektroinstalacija visokog i niskog napona, programiranje i puštanje u rad IT sistema, tehničkih sigurnosnih sistema i automatskih kontrolno-upravljačkih sistema (EMS, BMS, RMS) u komercijalnoj izgradnji i industriji.',
        'We are registered for production and have our own plant for the production of all types of low-voltage switchgear, metering-distribution and specific technological, control management cabinets (DDC, MCC).': 'Mi smo registrovani za proizvodnju i imamo vlastitu fabriku za proizvodnju svih vrsta niskonaponskih prekidača, mjerno-distributivnih i specifičnih tehnoloških, kontrolnih ormara (DDC, MCC).',
        'The long-term experience of our experts is a guarantee that we have the necessary knowledge to guide you through the individual stages or the entire process of planning, designing and the very realization of specific technical solutions.': 'Dugogodišnje iskustvo naših stručnjaka garancija je da posjedujemo potrebno znanje da vas provedemo kroz pojedinačne faze ili cijeli proces planiranja, dizajniranja i same realizacije specifičnih tehničkih rješenja.',
        'MORE DETAILS': 'VIŠE DETALJA',
        'OUR SERVICES': 'NAŠE USLUGE',
        'Our team of specialists is experienced in designing high and low current electrical installations. The documentation we create must meet specific standards and regulations set forth by the relevant governing bodies.': 'Naš tim stručnjaka ima iskustva u dizajniranju električnih instalacija visokog i niskog napona. Dokumentacija koju kreiramo mora zadovoljiti određene standarde i propise propisane od strane relevantnih tijela vlasti.',
        'Commissioning and start-up procedures are critical steps in the deployment of control systems. These procedures ensure that the control system operates as expected and meets the client’s requirements.': 'Procedura puštanja u rad i pokretanja su ključni koraci u implementaciji kontrolnih sistema. Ove procedure osiguravaju da kontrolni sistem radi kako je očekivano i ispunjava zahtjeve klijenta.',
        'CONTROL PANELS PRODUCTION': 'PROIZVODNJA KONTROLNIH PANELA',
        'TASCAL ENGINEERING is a manufacturer of Electrical Panels and assemblies for clients in a wide range of industries. We offer custom design and fabrication for OEM clients, contractors, and end users requiring either large or small production runs.': 'TASCAL INŽENJERING je proizvođač električnih panela i sklopova za klijente u različitim industrijama. Nudimo prilagođeni dizajn i proizvodnju za OEM klijente, izvođače radova i krajnje korisnike koji zahtijevaju velike ili male serije proizvodnje.',
        'MAINTENANCE': 'ODRŽAVANJE',
        'Regular maintenance of electrical installations is important to ensure the safety of people working in the facility, as well as to prevent equipment failures and minimize downtime.': 'Redovno održavanje električnih instalacija važno je kako bi se osigurala sigurnost ljudi koji rade u objektu, kao i sprečavanje kvarova opreme i minimiziranje vremena prestanka rada.',
        'About Us': 'O NAMA',
        'MORE ABOUT US': 'VIŠE O NAMA',
        'INSTALLATION': 'INSTALACIJA',
        'At TASCAL ENGINEERING, we are committed to providing top-quality electrical installation services to our commercial and industrial clients. We understand that a properly installed electrical system is crucial for the safe and efficient operation of any commercial or industrial facility.': 'U TASCAL INŽENJERINGU, posvećeni smo pružanju visokokvalitetnih usluga električne instalacije našim komercijalnim i industrijskim klijentima. Razumijemo da je pravilno instaliran električni sistem ključan za siguran i efikasan rad svakog komercijalnog ili industrijskog objekta.',
        'PROGRAMMING': 'PROGRAMIRANJE',
        'In order to ensure the successful implementation of turnkey projects, our team is equipped with the technical and personnel capabilities to parameterize, configure, and program various central and peripheral devices of various subsystems.': 'Kako bismo osigurali uspješnu implementaciju ključ u ruke projekata, naš tim je opremljen tehničkim i kadrovskim sposobnostima za parametrizaciju, konfiguraciju i programiranje različitih centralnih i perifernih uređaja različitih podsistema.'


};



    // Function to perform translation
    function translatePageToSerbian() {
        translateNode(document.body);
    }

    function translateNode(node) {
        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
            const translatedText = translations[node.nodeValue.trim()];
            if (translatedText) {
                node.nodeValue = translatedText;
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            node.childNodes.forEach(childNode => translateNode(childNode));
        }
    }

// Event listener for clicking on ENG link in navbar
    const srbLink = document.querySelector('#srbLink');
    srbLink.addEventListener('click', function(event) {
        event.preventDefault();
        translatePageToSerbian();
    });

// Event listener for clicking on SRB link in navbar
    const engLink = document.querySelector(' #engLink');
    engLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Implement the logic to revert to English
        // For simplicity, let's assume there's a function called revertToEnglish() for this purpose
        revertToEnglish();
    });

// Event listener for clicking on ENG link in burger menu
    const srbLinkBurger = document.querySelector('#burgerDropDown #srbBurgerLink ');
    srbLinkBurger.addEventListener('click', function(event) {
        event.preventDefault();
        translatePageToSerbian();
    });

// Event listener for clicking on SRB link in burger menu
    const engLinkBurger = document.querySelector('#burgerDropDown #engBurgerLink');
     engLinkBurger.addEventListener('click', function(event) {
        event.preventDefault();
        // Implement the logic to revert to English
        // For simplicity, let's assume there's a function called revertToEnglish() for this purpose
        revertToEnglish();
    });

    function revertToEnglish() {
        // You need to implement the logic to revert to English here
        // For demonstration purposes, let's just reload the page
        location.reload();
    }




});

document.addEventListener('scroll', function() {
    const imageContainer = document.getElementById('image-container');
    const rect = imageContainer.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        imageContainer.classList.add('scrolled');
    } else {
        imageContainer.classList.remove('scrolled');
    }
});
