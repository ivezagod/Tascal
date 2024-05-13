document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;

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


    function animateCounters() {
    const counters = document.querySelectorAll('.text-6xl');

    counters.forEach(counter => {
    const finalValue = parseInt(counter.getAttribute('data-final-value'));
    const duration = 2000; // 2 seconds
    let currentValue = 0;
    const increment = finalValue / (duration / 50);

    const interval = setInterval(() => {
    currentValue += increment;
    counter.textContent = Math.floor(currentValue);

    if (currentValue >= finalValue) {
    clearInterval(interval);
    counter.textContent = finalValue;
}
}, 50);
});
}

    function animateCountersOnScroll() {
    const options = {
    threshold: 0.5
};

    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    animateCounters();
    observer.unobserve(entry.target);
}
});
}, options);

    const counterSection = document.getElementById('counterSection');
    observer.observe(counterSection);
}

    document.addEventListener('DOMContentLoaded', function() {
    animateCountersOnScroll();
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
        'SERVICES': 'USLUGE',
        'REFERENCES': 'REFERENCE',
        'CONTACT': 'KONTAKT',
        'GALLERY':'GALERIJA',
        'WELCOME TO TASCAL ENGINEERING': 'DOBRODOŠLI U TASCAL INŽENJERING',
        'CONSULTING': 'KONSULTACIJE',
        'TASCAL ENGINEERING is a company for the design and execution of all electrical installations of high and low current, programming and commissioning of IT systems, technical security systems and automatic control and management systems (EMS, BMS, RMS) in commercial construction and industry.': 'TASCAL INŽENJERING je firma za projektovanje i izvođenje svih elektroinstalacija visokog i niskog napona, programiranje i puštanje u rad IT sistema, tehničkih sigurnosnih sistema i automatskih kontrolno-upravljačkih sistema (EMS, BMS, RMS) u komercijalnoj izgradnji i industriji.',
        'We are registered for production and have our own plant for the production of all types of low-voltage switchgear, metering-distribution and specific technological, control management cabinets (DDC, MCC).': 'Mi smo registrovani za proizvodnju i imamo vlastitu fabriku za proizvodnju svih vrsta niskonaponskih prekidača, mjerno-distributivnih i specifičnih tehnoloških, kontrolnih ormara (DDC, MCC).',
        'The long-term experience of our experts is a guarantee that we have the necessary knowledge to guide you through the individual stages or the entire process of planning, designing and the very realization of specific technical solutions.': 'Dugogodišnje iskustvo naših stručnjaka garancija je da posjedujemo potrebno znanje da vas provedemo kroz pojedinačne faze ili cijeli proces planiranja, dizajniranja i same realizacije specifičnih tehničkih rješenja.',
        'MORE DETAILS': 'VIŠE DETALJA',
        'OUR SERVICES': 'NAŠE USLUGE',
        'ELECTRICAL SYSTEMS DESIGN': 'DIZAJN ELEKTRIČNIH SISTEMA',
        'Our team of specialists is experienced in designing high and low current electrical installations. The documentation we create must meet specific standards and regulations set forth by the relevant governing bodies.': 'Naš tim stručnjaka ima iskustva u dizajniranju električnih instalacija visokog i niskog napona. Dokumentacija koju kreiramo mora zadovoljiti određene standarde i propise propisane od strane relevantnih tijela vlasti.',
        'COMMISSIONING & START UP': 'PUŠTANJE U RAD & POKRETANJE',
        "Commissioning and start-up procedures are critical steps in the deployment of control systems. These procedures ensure that the control system operates as expected and meets the client’s requirements.": 'Procedura puštanja u rad i pokretanja su ključni koraci u implementaciji kontrolnih sistema. Ove procedure osiguravaju da kontrolni sistem radi kako je očekivano i ispunjava zahtjeve klijenta.',
        'CONTROL PANELS PRODUCTION': 'PROIZVODNJA KONTROLNIH PANELA',
        'TASCAL ENGINEERING is a manufacturer of Electrical Panels and assemblies for clients in a wide range of industries. We offer custom design and fabrication for OEM clients, contractors, and end users requiring either large or small production runs.': 'TASCAL INŽENJERING je proizvođač električnih panela i sklopova za klijente u različitim industrijama. Nudimo prilagođeni dizajn i proizvodnju za OEM klijente, izvođače radova i krajnje korisnike koji zahtijevaju velike ili male serije proizvodnje.',
        'MAINTENANCE': 'ODRŽAVANJE',
        'Regular maintenance of electrical installations is important to ensure the safety of people working in the facility, as well as to prevent equipment failures and minimize downtime.': 'Redovno održavanje električnih instalacija važno je kako bi se osigurala sigurnost ljudi koji rade u objektu, kao i sprečavanje kvarova opreme i minimiziranje vremena prestanka rada.',
        'About Us': 'O NAMA',
        'MORE ABOUT US': 'VIŠE O NAMA',

        'INSTALLATION': 'INSTALACIJA',
        'At TASCAL ENGINEERING, we are committed to providing top-quality electrical installation services to our commercial and industrial clients. We understand that a properly installed electrical system is crucial for the safe and efficient operation of any commercial or industrial facility.': 'U TASCAL INŽENJERINGU, posvećeni smo pružanju visokokvalitetnih usluga električne instalacije našim komercijalnim i industrijskim klijentima. Razumijemo da je pravilno instaliran električni sistem ključan za siguran i efikasan rad svakog komercijalnog ili industrijskog objekta.',



        'PROGRAMMING': 'PROGRAMIRANJE',
        'In order to ensure the successful implementation of turnkey projects, our team is equipped with the technical and personnel capabilities to parameterize, configure, and program various central and peripheral devices of various subsystems.': 'Kako bismo osigurali uspješnu implementaciju ključ u ruke projekata, naš tim je opremljen tehničkim i kadrovskim sposobnostima za parametrizaciju, konfiguraciju i programiranje različitih centralnih i perifernih uređaja različitih podsistema.',

        'TASCAL ENGINEERING is a company for the design and execution of all electrical installations of high and low current, programming and commissioning of IT systems, technical security systems and automatic control and management systems (EMS, BMS, RMS) in commercial construction and industry.': 'TASCAL INŽENJERING je firma za projektovanje i izvođenje svih elektroinstalacija visokog i niskog napona, programiranje i puštanje u rad IT sistema, tehničkih sigurnosnih sistema i automatskih kontrolno-upravljačkih sistema (EMS, BMS, RMS) u komercijalnoj izgradnji i industriji.',

        'We are registered for production and have our own plant for the production of all types of low-voltage switchgear, metering-distribution and specific technological, control-management cabinets (DDC, MCC).': 'Registrovani smo za proizvodnju i posjedujemo vlastitu fabriku za proizvodnju svih vrsta niskonaponskih razvodnih ormara, mjerno-distributivnih i specifičnih tehnoloških, kontrolno-upravljačkih ormara (DDC, MCC).',

        'TASCAL ENGINEERING consists of a team of professionals with many years of experience on the domestic and international market, who possess the appropriate licenses for design & construction, revision of technical documentation & supervision during the construction phase. We have licenses issued by the competent ministry and the Engineering Chamber of Montenegro, as well as the Engineering Chamber of Serbia and the competent associations of designers and contractors in the Russian Federation.': 'TASCAL INŽENJERING čini tim stručnjaka sa dugogodišnjim iskustvom na domaćem i međunarodnom tržištu, koji posjeduju odgovarajuće licence za projektovanje i izgradnju, reviziju tehničke dokumentacije i nadzor tokom faze izgradnje. Posjedujemo licence koje izdaje nadležno ministarstvo i Inženjerska komora Crne Gore, kao i Inženjerska komora Srbije i nadležne asocijacije dizajnera i izvođača u Ruskoj Federaciji.',

        'The level at which we provide our services to clients is recognized by the world\'s leading vendors in this industry, with whom we cooperate, and which is crowned by the official partner status (most often the highest level, Solution Partner):': 'Nivo na kojem pružamo usluge klijentima prepoznat je od strane vodećih svjetskih dobavljača u ovoj industriji, sa kojima sarađujemo, što je krunisano zvaničnim statusom partnera (najčešće najvišeg nivoa, Solution Partner):',

        'In the production of all types of electrical cabinets, but also in the field of delivery of electrical accessories (Hager, Berker) and the application of proven and innovative KNX technical solutions, we often rely on the HAGER Group in our work, whose partners we are through the regional center in Vogošća.': 'U proizvodnji svih vrsta električnih ormara, ali i u oblasti isporuke električnih pribora (Hager, Berker) i primjene dokazanih i inovativnih tehničkih rješenja KNX, često se oslanjamo na HAGER Group u našem radu, čiji smo partneri kroz regionalni centar u Vogošći.',

        'Project and workshop documentation is created in our company using licensed AutoCAD, Microsoft Office, ePLAN, Siemens, Eaton, ABB software packages.': 'Projektna i radionička dokumentacija se kreiraju u našoj kompaniji korištenjem licenciranih softverskih paketa AutoCAD-a, Microsoft Office-a, ePLAN-a, Siemensa, Eaton-a, ABB-a.',

        'The own production of distribution and control cabinets is organized in Podgorica, Montenegro.': 'Vlastita proizvodnja razvodnih i kontrolnih ormara organizovana je u Podgorici, Crna Gora.',

        'The implemented integrated management system in the field of quality, environmental protection and occupational safety has as a result the confirmed fact that the services we provide are in accordance with the requirements of the ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 standards.': 'Implementirani integrisani sistem upravljanja u oblasti kvaliteta, zaštite životne sredine i bezbjednosti na radu rezultira potvrđenim činjenicom da usluge koje pružamo odgovaraju zahtjevima standarda ISO 9001:2015, ISO 14001:2015 i ISO 45001:2018.',

        'YEARS OF EXPERIENCE': 'GODINE ISKUSTVA',

        'FINISHED PROJECTS': 'ZAVRŠENI PROJEKTI',

        'SATISFIED CLIENTS': 'ZADOVOLJNI KLIJENTI',


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

// Event listener for clicking on ENG link
    const engLink = document.querySelector('#navbar a[href="#section5"]');
    engLink.addEventListener('click', function(event) {
        event.preventDefault();
        translatePageToSerbian();
    });

});


