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

document.addEventListener('DOMContentLoaded', function() {
    const options = {}; // Define your options object if needed

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, options);

    const counterSection = document.getElementById('counterSection');
    if (counterSection) { // Check if counterSection is not null
        observer.observe(counterSection);
    } else {
        console.error("Element with ID 'counterSection' not found.");
    }
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
        'BROCHURE': 'BROŠURA',
        'ELECTRICAL SYSTEMS DESIGN': 'DIZAJN ELEKTRIČNIH SISTEMA',
        'COMMISSIONING & STARTUP': 'PUŠTANJE U RAD I POKRETANJE',
        'ABOUT US': 'O NAMA',
        'SERVICES': 'USLUGE',
        'REFERENCES': 'REFERENCE',
        'CONTACT': 'KONTAKT',
        'GALLERY': 'GALERIJA',
        'WELCOME TO TASCAL ENGINEERING': 'DOBRODOŠLI U TASCAL INŽENJERING',
        'CONSULTING': 'KONSULTACIJE',
        'Consulting': 'Konsultacije',
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
        'Control panels production': 'Proizvodnja kntrolnih panela',
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

        'TASCAL ENGINEERING  consists of a team of professionals with many years of experience on the domestic and international market, who possess the appropriate licenses for design & construction, revision of technical documentation & supervision during the construction phase. We have licenses issued by the competent ministry and the Engineering Chamber of Montenegro, as well as the Engineering Chamber of Serbia and the competent associations of designers and contractors in the Russian Federation.': 'TASCAL INŽENJERING čini tim stručnjaka sa dugogodišnjim iskustvom na domaćem i međunarodnom tržištu, koji posjeduju odgovarajuće licence za projektovanje i izgradnju, reviziju tehničke dokumentacije i nadzor tokom faze izgradnje. Posjedujemo licence koje izdaje nadležno ministarstvo i Inženjerska komora Crne Gore, kao i Inženjerska komora Srbije i nadležne asocijacije dizajnera i izvođača u Ruskoj Federaciji.',

        'The level at which we provide our services to clients is recognized by the world\'s leading vendors in this industry, with whom we cooperate, and which is crowned by the official partner status (most often the highest level, Solution Partner):': 'Nivo na kojem pružamo usluge klijentima prepoznat je od strane vodećih svjetskih dobavljača u ovoj industriji, sa kojima sarađujemo, što je krunisano zvaničnim statusom partnera (najčešće najvišeg nivoa, Solution Partner):',

        'In the production of all types of electrical cabinets, but also in the field of delivery of electrical accessories (Hager, Berker) and the application of proven and innovative KNX technical solutions, we often rely on the HAGER Group in our work, whose partners we are through the regional center in Vogošća.': 'U proizvodnji svih vrsta električnih ormara, ali i u oblasti isporuke električnih pribora (Hager, Berker) i primjene dokazanih i inovativnih tehničkih rješenja KNX, često se oslanjamo na HAGER Group u našem radu, čiji smo partneri kroz regionalni centar u Vogošći.',

        'Project and workshop documentation is created in our company using licensed AutoCAD, Microsoft Office, ePLAN, Siemens, Eaton, ABB software packages.': 'Projektna i radionička dokumentacija se kreiraju u našoj kompaniji korištenjem licenciranih softverskih paketa AutoCAD-a, Microsoft Office-a, ePLAN-a, Siemensa, Eaton-a, ABB-a.',

        'The own production of distribution and control cabinets is organized in Podgorica, Montenegro.': 'Vlastita proizvodnja razvodnih i kontrolnih ormara organizovana je u Podgorici, Crna Gora.',

        'The implemented integrated management system in the field of quality, environmental protection and occupational safety has as a result the confirmed fact that the services we provide are in accordance with the requirements of the ISO 9001:2015, ISO 14001:2015 and ISO 45001:2018 standards.': 'Implementirani integrisani sistem upravljanja u oblasti kvaliteta, zaštite životne sredine i bezbjednosti na radu rezultira potvrđenim činjenicom da usluge koje pružamo odgovaraju zahtjevima standarda ISO 9001:2015, ISO 14001:2015 i ISO 45001:2018.',

        'YEARS OF EXPERIENCE': 'GODINE ISKUSTVA',

        'FINISHED PROJECTS': 'ZAVRŠENI PROJEKTI',

        'SATISFIED CLIENTS': 'ZADOVOLJNI KLIJENTI',

        'We can provide valuable assistance in the process of obtaining reliable and objective information before making a decision regarding a certain investment, but also later in the course of its realization.': 'Možemo pružiti vrednu pomoć u procesu dobijanja pouzdanih i objektivnih informacija pre donošenja odluke o određenom investiciji, ali i kasnije tokom njene realizacije.',

        'We know the local legal regulations in the field of construction, specific requirements of competent services and companies, the principles of adopting documentation, categorization of buildings, etc., and we give timely suggestions in the process of searching for the optimal level of technical solutions. We are known for our dedication to detail and excellence, as well as our uncompromising quality of service.': 'Poznajemo lokalne pravne propisi u oblasti građevinarstva, specifične zahteve kompetentnih usluga i kompanija, principe usvajanja dokumentacije, kategorizaciju objekata, itd., i dajemo pravovremene predloge u procesu traženja optimalnog nivoa tehničkih rešenja. Poznati smo po našoj posvećenosti detaljima i izvrsnosti, kao i našoj nekompromisnoj kvaliteti usluga.',

        'If you need a partner who recommends the best solutions considering your needs, industry requirements, legal regulations and available budget, get in touch.': 'Ako vam je potreban partner koji preporučuje najbolja rešenja uzimajući u obzir vaše potrebe, industrijske zahteve, pravne propisi i dostupan budžet, kontaktirajte nas.',

        'These standards and regulations can vary depending on the location and type of installation being designed. It\'s important to have a deep understanding of the applicable regulations and standards in order to ensure that documentation meets the necessary requirements. Creating high-quality technical documentation is essential for obtaining a building permit and ensuring that the installation is safe and effective. With our expertise, you can rest assured that your project will be completed to the highest of standards.': 'Ovi standardi i propisi mogu varirati u zavisnosti od lokacije i vrste instalacije koja se dizajnira. Važno je imati duboko razumevanje primenljivih propisa i standarda kako bi se osiguralo da dokumentacija zadovoljava potrebne zahteve. Kreiranje visokokvalitetne tehničke dokumentacije je ključno za dobijanje građevinske dozvole i osiguravanje da je instalacija sigurna i efikasna. Sa našim iskustvom, možete biti sigurni da će vaš projekat biti završen prema najvišim standardima.',

        'A huge “personal“ archival database of projects of all types of electrical installations of high and low currents, as well as Control Systems, Building Management Systems, Room Managamenet or Smart Home Systems - gives us the opportunity to reuse already made and in practice proven / confirmed technical solutions, consistently, the ability to release project documentation in an unrivaled short terms.': 'Velika „lična“ arhivska baza projekata svih vrsta električnih instalacija visokog i niskog napona, kao i kontrolnih sistema, sistema upravljanja zgradama, upravljanja prostorijama ili pametnih kućnih sistema - omogućava nam da ponovo koristimo već napravljena i u praksi dokazana / potvrđena tehnička rešenja, dosledno, mogućnost da se projektne dokumentacije izdaju u neuporedivo kratkom roku.',

        'Our experienced team of engineers and technical staff understands the intricacies of the project, from concept to completion. We create technical documentation that takes into account all aspects of the project, from the initial design to the final product. Our team understands the importance of staying within the budget and timeframe of the project, and so we take the necessary steps to ensure the project is completed in a timely and cost - effective manner. We also utilize our extensive experience in working on projects to ensure that any potential problems are identified and addressed before they become an issue.': 'Naš iskusni tim inženjera i tehničkog osoblja razume suptilnosti projekta, od koncepta do završetka. Kreiramo tehničku dokumentaciju koja uzima u obzir sve aspekte projekta, od početnog dizajna do finalnog proizvoda. Naš tim razume važnost ostajanja unutar budžeta i vremenskog okvira projekta, pa preduzimamo neophodne korake da osiguramo da projekat bude završen na vreme i na ekonomičan način. Takođe koristimo naše obimno iskustvo u radu na projektima kako bismo osigurali da se bilo koji potencijalni problemi identifikuju i reše pre nego što postanu problem.',

        'As a professional PLC programming service, we have extensive experience programming a wide range of Programmable Logic Controllers (PLCs) from various manufacturers.': 'Kao profesionalna usluga programiranja PLC-a, imamo bogato iskustvo u programiranju širokog spektra programabilnih logičkih kontrolera (PLC) različitih proizvođača.',

        'This means that we can provide tailored solutions to clients who are looking to automate and control home&industrial processes using PLCs.': 'To znači da možemo pružiti prilagođena rešenja klijentima koji žele automatizovati i kontrolisati procese u kući i industriji koristeći PLC-ove.',

        'Our team of skilled engineers and technicians are familiar with the programming languages and software tools used by various PLC manufacturers, including Siemens, Smarteh, Hager, Loxone, among others. This enables us to offer our clients flexible and customized solutions that meet their specific requirements.': 'Naš tim stručnih inženjera i tehničara poznaje programske jezike i softverske alate koje koriste različiti proizvođači PLC-ova, uključujući Siemens, Smarteh, Hager, Loxone, među ostalima. To nam omogućava da klijentima ponudimo fleksibilna i prilagođena rešenja koja zadovoljavaju njihove specifične zahteve.',

        'Whether our clients require programming for a smallscale control system or a large-scale automation project, we have the expertise to deliver high-quality programming solutions that are efficient, reliable, and cost-effective. Our team uses best practices in PLC programming to ensure that the programs we create are easy to maintain and update, and that they meet industry standards for safety and performance.': 'Da li naši klijenti zahtevaju programiranje za kontrolni sistem malog obima ili za projekat automatizacije velikog obima, imamo ekspertizu da isporučimo programerska rešenja visokog kvaliteta koja su efikasna, pouzdana i ekonomična. Naš tim koristi najbolje prakse u PLC programiranju kako bi osigurao da su programi koje kreiramo laki za održavanje i ažuriranje, i da zadovoljavaju industrijske standarde za bezbednost i performanse.',

        'At our company, we are committed to providing our clients with top-notch PLC programming services that help them achieve their automation goals. So if you are looking for a reliable partner to help you program your PLCs, please don’t hesitate to contact us. We would be happy to discuss your project requirements and provide you with a customized solution that fits your needs.': 'U našoj kompaniji posvećeni smo pružanju našim klijentima usluga programiranja PLC-a vrhunskog kvaliteta koje im pomažu da postignu svoje ciljeve automatizacije. Dakle, ako tražite pouzdanog partnera koji će vam pomoći da programirate vaše PLC-ove, slobodno nas kontaktirajte. Rado ćemo razgovarati o zahtevima vašeg projekta i pružiti vam prilagođeno rešenje koje odgovara vašim potrebama.',

        'As an organization that provides programming services, we can offer solutions for a wide variety of systems:': 'Kao organizacija koja pruža usluge programiranja, možemo ponuditi rešenja za širok spektar sistema:',

        'Building Automation Systems & Fire detection systems & Parking and garage gas detection systems & PA/VA': 'Sistemi za automatizaciju zgrada i sistemi za detekciju požara & Sistemi za detekciju gasova u parkinzima i garažama & PA/VA',

        'Industrial Control Systems': 'Industrijski kontrolni sistemi',

        'We can provide solutions that help control and monitor HVAC, lighting, and other building systems. This may include systems for commercial buildings, hospitals, and schools.': 'Možemo pružiti rešenja koja pomažu u kontroli i praćenju HVAC-a, osvetljenja i drugih sistema u zgradama. To može uključivati sisteme za komercijalne zgrade, bolnice i škole.',

        'Home Automation Systems': 'Sistemi kućne automatizacije',

        'We create complex control solutions that allow homeowners to remotely control and monitor their home appliances, lighting, and security systems using a smartphone or other device.': 'Kreiramo kompleksna kontrolna rešenja koja omogućavaju vlasnicima kuća da daljinski kontrolišu i nadgledaju svoje kućne aparate, osvetljenje i sigurnosne sisteme koristeći pametni telefon ili drugi uređaj.',

        'Energy Management Systems': 'Sistemi upravljanja energijom',

        'We develop control solutions that help businesses and organizations manage their energy consumption, optimize energy usage, and reduce energy costs.': 'Razvijamo kontrolna rešenja koja pomažu preduzećima i organizacijama da upravljaju svojom potrošnjom energije, optimizuju upotrebu energije i smanje troškove energije.',

        'In our work, we rely on various platforms to develop and deliver solutions for our clients:': 'U našem radu oslanjamo se na različite platforme za razvoj i isporuku rešenja za naše klijente:',

        'Siemens Simatic PLCs in all kind of technological processes,': 'Siemens Simatic PLC-ovi u svim vrstama tehnoloških procesa,',

        'Siemens Desigo, SMARTEH LPC and Loxone PLC devices in the hotel industry,': 'Siemens Desigo, SMARTEH LPC i Loxone PLC uređaji u hotelijerstvu,',

        'KNX devices (Siemens Gamma, Hager) devices in the hotel industry&home automation systems,': '- KNX uređaji (Siemens Gamma, Hager) u hotelijerstvu i sistemima kućne automatizacije,',
        '- Siemens Simatic PLCs in all kind of technological processes': '- Siemens Simatic PLC-ovi u svim vrstama tehnoloških procesa',
        '- Siemens Desigo, SMARTEH LPC and Loxone PLC devices in the hotel industry,': '- Siemens Desigo, SMARTEH LPC i Loxone PLC uređaji u hotelijerstvu,',
        '- KNX devices (Siemens Gamma, Hager) devices in the hotel industry&home automation systems,': '- KNX uređaji (Siemens Gamma, Hager) u hotelijerstvu i sistemima kućne automatizacije,',
        '- Siemens Cerberus PACE, INTER-M and TOA - the high performing Public Address and Controlled': '- Siemens Cerberus PACE, INTER-M i TOA - visoko performantni sistemi za javnu adresu i kontrolu',
        '- Siemens Cerberus Pro smart fire safety systems for fast, reliable fire detection, alarm signaling and control,':'\n' +
            '- Siemens Cerberus Pro pametni sistemi za zaštitu od požara za brzo i pouzdano otkrivanje požara, signalizaciju alarma i kontrolu.',
        'Commissioning & Start Up': 'Puštanje u rad i Pokretanje',
        'Pre-Commissioning Checks:': 'Provere pre puštanja u rad:',
        'Configuration and Testing:': 'Konfiguracija i testiranje:',
        'Integration and Testing:': 'Integracija i testiranje:',
        'Start-up Procedures:': 'Procedure pokretanja:',
        'Training and Handover:': 'Obuka i predaja:',
        'Overall, the commissioning and start-up procedures are critical to ensure that the control system operates as expected, and the client’s requirements are met.': 'Sveukupno, postupci puštanja u rad i pokretanja su ključni kako bi se osiguralo da kontrolni sistem funkcioniše kao što se očekuje i da se ispune zahtevi klijenta.',
        'We have extensive experience in commissioning and start-up procedures of control systems.': 'Imamo obimno iskustvo u postupcima puštanja u rad i pokretanja kontrolnih sistema.',
        'Our experience enables us to understand the client’s requirements and develop tailored solutions that meet their needs.': 'Naše iskustvo nam omogućava da razumemo zahteve klijenta i razvijemo prilagođena rešenja koja zadovoljavaju njihove potrebe.',
        'We have a structured and comprehensive approach to commissioning and start-up procedures.': 'Imamo struktuiran i sveobuhvatan pristup postupcima puštanja u rad i pokretanja.',
        'Our procedures include pre-commissioning checks, configuration and testing, integration and testing, start-up procedures, and training and handover.': 'Naši postupci uključuju provere pre puštanja u rad, konfiguraciju i testiranje, integraciju i testiranje, procedure pokretanja, i obuku i predaju.',
        'This approach ensures that all aspects of the control system are thoroughly tested and verified, and any issues that arise are identified and addressed promptly.': 'Ovaj pristup osigurava da su sve komponente kontrolnog sistema temeljno testirane i proverene, i da se sve eventualne probleme identifikuju i rešavaju promptno.',
        'Checks: Before the commissioning process can begin, it is essential to perform a series of precommissioning checks. These checks include verifying that all equipment and materials are on-site and installed correctly, checking that the control system hardware and software are working correctly, and that all necessary documentation and manuals are available.': 'Provere: Pre nego što proces puštanja u rad može da počne, neophodno je izvršiti niz provera pre puštanja u rad. Ove provere uključuju verifikaciju da su sva oprema i materijali na licu mesta i ispravno instalirani, proveru da hardver i softver kontrolnog sistema funkcionišu ispravno, i da su sva potrebna dokumentacija i priručnici dostupni.',
        'Once the precommissioning checks are completed, the control system is configured and tested. This involves programming the control system to perform the desired tasks, ensuring that all sensors and actuators are connected correctly and testing the system to ensure that it operates correctly.': 'Nakon što su provere pre puštanja u rad završene, kontrolni sistem se konfiguriše i testira. Ovo uključuje programiranje kontrolnog sistema da obavlja željene zadatke, osiguravanje da su svi senzori i aktuatori ispravno povezani i testiranje sistema kako bi se osiguralo da funkcioniše ispravno.',
        'After the control system is configured and tested, it is integrated with other systems and tested to ensure that it operates correctly with other subsystems': 'Nakon što je kontrolni sistem konfigurisán i testiran, integriše se sa drugim sistemima i testira kako bi se osiguralo da funkcioniše ispravno sa drugim podsistemima.',
        'Once the control system is fully tested and integrated, the start-up procedures can begin. This involves starting the system and monitoring it to ensure that it operates correctly. During this process, any issues that arise are identified and addressed.': 'Nakon što je kontrolni sistem potpuno testiran i integrisan, mogu početi procedure puštanja u rad. Ovo uključuje pokretanje sistema i njegovo praćenje kako bi se osiguralo da funkcioniše ispravno. Tokom ovog procesa, svi problemi koji se pojave se identifikuju i rešavaju.',
        'We have extensive experience in commissioning and start-up procedures of control systems. We have a team of experienced engineers who have worked on numerous projects, ranging from small to large scale, and in various industries. Our experience in this field is a guarantee for top-notch commissioning and start-up procedures.': 'Imamo bogato iskustvo u procedurama puštanja u rad i pokretanja kontrolnih sistema. Imamo tim iskusnih inženjera koji su radili na brojnim projektima, od malih do velikih razmera, i u raznim industrijama. Naše iskustvo u ovoj oblasti je garancija za vrhunske procedure puštanja u rad i pokretanja sistema.',

        'Our experience enables us to understand the client’s requirements and develop tailored solutions that meet their needs. We have a thorough understanding of the various control system components, such as sensors, actuators, and programmable logic controllers (PLCs), and how they interact with each other. This enables us to identify potential issues early in the commissioning process and address them promptly, ensuring that the control system operates as expected.': 'Naše iskustvo nam omogućava da razumemo zahteve klijenata i razvijemo prilagođena rešenja koja zadovoljavaju njihove potrebe. Imamo temeljno razumevanje različitih komponenti kontrolnih sistema, kao što su senzori, aktuatori i programabilni logički kontroleri (PLC-ovi), i kako oni međusobno deluju. Ovo nam omogućava da identifikujemo potencijalne probleme rano u procesu puštanja u rad i rešavamo ih brzo, osiguravajući da kontrolni sistem funkcioniše kako se očekuje.',

        'We also have a structured and comprehensive approach to commissioning and start-up procedures. Our procedures include pre-commissioning checks, configuration and testing, integration and testing, start-up procedures, and training and handover. This approach ensures that all aspects of the control system are thoroughly tested and verified, and any issues that arise are identified and addressed promptly.': 'Takođe imamo strukturisan i sveobuhvatan pristup procedurama puštanja u rad i pokretanja sistema. Naše procedure uključuju provere pre puštanja u rad, konfiguraciju i testiranje, integraciju i testiranje, procedure puštanja u rad, i obuku i predaju sistema. Ovaj pristup osigurava da su svi aspekti kontrolnog sistema temeljno testirani i verifikovani, i da se svi problemi koji se pojave brzo identifikuju i reše.',

        'That\'s why we offer a wide range of electrical installation services tailored to meet the specific needs of our clients. Our team of experienced and skilled electricians has a deep understanding of the complex electrical systems required in commercial and industrial settings. We work closely with our clients to ensure that their electrical systems are installed to the highest standards, and that all necessary safety and regulatory requirements are met.': 'Zato nudimo širok spektar usluga električne instalacije prilagođenih specifičnim potrebama naših klijenata. Naš tim iskusnih i veštih električara ima duboko razumevanje složenih električnih sistema potrebnih u komercijalnim i industrijskim okruženjima. Blisko sarađujemo sa našim klijentima kako bismo osigurali da njihovi električni sistemi budu instalirani po najvišim standardima i da svi potrebni bezbednosni i regulatorni zahtevi budu ispunjeni.',

        'We take a proactive approach to electrical installation, working closely with our clients to develop customized solutions that are both cost-effective and efficient. We use the latest technologies and techniques to ensure that our installations are of the highest quality, and that our clients receive the best possible value for their investment.': 'Imamo proaktivan pristup električnim instalacijama, radeći blisko sa našim klijentima na razvoju prilagođenih rešenja koja su i ekonomična i efikasna. Koristimo najnovije tehnologije i tehnike kako bismo osigurali da naše instalacije budu najvišeg kvaliteta i da naši klijenti dobiju najbolju moguću vrednost za svoju investiciju.',

        'Our services include the installation of power distribution systems, lighting systems, security systems, fire alarm systems, and much more. We also offer ongoing maintenance and repair services to ensure that our clients\' electrical systems are always operating at peak efficiency.': 'Naše usluge uključuju instalaciju sistema za distribuciju energije, rasvetnih sistema, sigurnosnih sistema, protivpožarnih sistema i još mnogo toga. Takođe nudimo stalne usluge održavanja i popravke kako bismo osigurali da električni sistemi naših klijenata uvek rade na vrhunskoj efikasnosti.',

        'At TASCAL ENGINEERING, we pride ourselves on our commitment to excellence in all aspects of our electrical installation services. We work hard to build strong relationships with our clients, and to exceed their expectations at every turn. Contact us today to learn more about how we can help you with your commercial or industrial electrical installation needs.': 'U TASCAL ENGINEERING-u ponosni smo na našu posvećenost izvrsnosti u svim aspektima naših usluga električne instalacije. Naporno radimo na izgradnji jakih odnosa sa našim klijentima i da premašimo njihova očekivanja u svakom pogledu. Kontaktirajte nas danas da saznate više o tome kako vam možemo pomoći sa vašim komercijalnim ili industrijskim potrebama za električnu instalaciju.',


        'Being specialized in the design and construction of electrical panels means that our company has expertise in creating customized electrical control panels that are specifically tailored to meet the needs of commercial and industrial plants:': 'Specijalizacija za dizajn i izradu električnih panela znači da naša kompanija ima stručnost u kreiranju prilagođenih električnih kontrolnih panela koji su specifično prilagođeni potrebama komercijalnih i industrijskih postrojenja:',

        'Control automation panels for operating machines,': 'Kontrolni automatski paneli za upravljanje mašinama,',

        '• Air conditioning panels for large buildings,': '•  Paneli za klimatizaciju za velike zgrade,',

        '• Industrial and PLC panels,': '•  Industrijski i PLC paneli,',

        '• Power Group panels,': '• Paneli za energetske grupe,',

        '• Machine border panels,': '• Paneli za granice mašina,',

        '• Distribution panels etc.': '• Distribucioni paneli itd.',

        'By having all the necessary tools and equipment in one place - our wellequipped control panel workshop in Moscow and Podgorica, we can customize control panels to meet the specific needs of our customers and ensure that they are of high quality.': 'Imajući sve potrebne alate i opremu na jednom mestu - naša dobro opremljena radionica za kontrolne panele u Moskvi i Podgorici, možemo prilagoditi kontrolne panele specifičnim potrebama naših kupaca i osigurati da su visokog kvaliteta.',

        'Our official partnership with Eaton Corp. as a registered panel-builder within the Eaton Power Advantage Partner Program demonstrates our company’s expertise and commitment to produce high-quality electrical cabinets.': 'Naše zvanično partnerstvo sa Eaton Corp. kao registrovanim proizvođačem panela u okviru Eaton Power Advantage Partner Program-a pokazuje stručnost naše kompanije i posvećenost proizvodnji visokokvalitetnih električnih ormara.',

        'Our panel engineers are also site engineers involved with installation, software design and commissioning. This means they have a truly in-depth understanding of controls and integration, and have extensive HVAC and plant knowledge.': 'Naši inženjeri za panele su takođe terenski inženjeri uključeni u instalaciju, dizajn softvera i puštanje u rad. To znači da imaju istinski duboko razumevanje kontrole i integracije, kao i obimno znanje o HVAC sistemima i postrojenjima.',

        'The team creating our panels know exactly what they are being for, how they will be installed, and have a real understanding of the projects themselves. They are not just following a panel diagram.': 'Tim koji kreira naše panele tačno zna za šta se koriste, kako će biti instalirani i imaju pravo razumevanje samih projekata. Oni ne prate samo dijagram panela.',

        'We design our own control panel/switchgear units inhouse. For this purpose, the our electrical engineers use the EPLAN Electric P8 CAE tool. Following the actual electrical design phase, a 3D structural design is also implemented in Pro Panel, as well as Eaton’s or ABB’s configuration and pricing software that enables our experts to design, configure and calculate the cost of low-voltage switchgear assemblies (Eaton Configurator xEnergy, ABB e-Design).': 'Mi dizajniramo naše sopstvene kontrolne panele/jedinice za razvod u kući. U tu svrhu naši električni inženjeri koriste EPLAN Electric P8 CAE alat. Nakon stvarne faze električnog dizajna, 3D strukturni dizajn se takođe implementira u Pro Panel, kao i Eaton-ov ili ABB-ov softver za konfiguraciju i cenu koji omogućava našim stručnjacima da dizajniraju, konfigurišu i izračunaju trošak sklopova niskonaponskih razvodnih ormana (Eaton Configurator xEnergy, ABB e-Design).',

        'All equipment is powered up at the factory and fully tested for functionality prior to leaving our facility. Our internal procedures and standards ensure that our panels are delivered ready for field startup and commissioning.': 'Sva oprema se pokreće u fabrici i potpuno se testira za funkcionalnost pre nego što napusti našu ustanovu. Naše interne procedure i standardi osiguravaju da naši paneli budu isporučeni spremni za početak rada i puštanje u rad na terenu.',

        'It is recommended that maintenance be carried out on a regular schedule, with more frequent inspections and tests for critical equipment. The maintenance of electrical installations in a facility involves a series of activities that aim to ensure the safe and reliable operation of electrical systems and equipment within the facility. We have experienced and well-trained personnel who can handle various maintenance tasks with expertise:': 'Preporučuje se da se održavanje obavlja prema redovnom rasporedu, sa češćim inspekcijama i testovima za kritičnu opremu. Održavanje električnih instalacija u objektu obuhvata niz aktivnosti koje imaju za cilj osiguranje sigurnog i pouzdanog rada električnih sistema i opreme unutar objekta. Imamo iskusno i dobro obučeno osoblje koje može obavljati različite zadatke održavanja sa stručnošću:',
        'Visual inspection': 'Vizuelna inspekcija',
        'A visual inspection of electrical equipment is carried out to check for signs of damage, wear and tear, and other issues that may affect the safe operation of the equipment.': 'Vizuelna inspekcija električne opreme se vrši kako bi se proverili znakovi oštećenja, habanja i drugi problemi koji mogu uticati na siguran rad opreme.',
        'Testing': 'Testiranje',
        'Electrical equipment is tested to ensure that it is operating within its design specifications. This may involve measuring voltages, currents, and other parameters to verify that they are within acceptable limits.': 'Električna oprema se testira kako bi se osiguralo da radi unutar svojih dizajnerskih specifikacija. Ovo može uključivati merenje napona, struje i drugih parametara kako bi se proverilo da li su unutar prihvatljivih granica.',
        'Replacement of parts': 'Zamena delova',
        'Parts that are worn out or damaged are replaced to ensure that the electrical equipment operates reliably.': 'Delovi koji su istrošeni ili oštećeni se zamenjuju kako bi se osiguralo pouzdano funkcionisanje električne opreme.',
        'Upgrades': 'Nadogradnje',
        'Electrical equipment is upgraded to meet changing safety standards or to improve its performance.': 'Električna oprema se nadograđuje kako bi se ispunili promenjeni bezbednosni standardi ili poboljšala njena performansa.',
        'Documentation': 'Dokumentacija',
        'Records are kept of all maintenance activities, including inspections, tests, and repairs.': 'Vode se evidencije svih aktivnosti održavanja, uključujući inspekcije, testove i popravke.',

        'Take comfort that your control panels&systems are designed by a staff with years of experience and Professional Engineering licenses held in multiple states (Russian Federation, Serbia, Montenegro). We are the control panel experts, so you do not have to be. Contact us and we will develop an optimum controls solution for you.': 'Budite bez brige jer su vaši kontrolni paneli i sistemi dizajnirani od strane osoblja sa dugogodišnjim iskustvom i profesionalnim inženjerskim licencama koje važe u više država (Ruska Federacija, Srbija, Crna Gora). Mi smo stručnjaci za kontrolne panele, tako da vi ne morate biti. Kontaktirajte nas i mi ćemo razviti optimalno rešenje za vas.',

        'Being specialized in the design and construction of electrical panels means that our company has expertise in creating customized electrical control panels that are specifically tailored to meet the needs of commercial and industrial plants:': 'Specijalizacija za dizajn i izradu električnih panela znači da naša kompanija ima stručnost u kreiranju prilagođenih električnih kontrolnih panela koji su specifično prilagođeni potrebama komercijalnih i industrijskih postrojenja:',

        'Control automation panels for operating machines,': 'Kontrolni automatski paneli za upravljanje mašinama,',

        'Air conditioning panels for large buildings,': 'Paneli za klimatizaciju za velike zgrade,',

        'Industrial and PLC panels,': 'Industrijski i PLC paneli,',

        'Power Group panels,': 'Paneli za energetske grupe,',

        'Machine border panels,': 'Paneli za granice mašina,',

        'Distribution panels etc.': 'Distribucioni paneli itd.',

        'By having all the necessary tools and equipment in one place - our well-equipped control panel workshop in Moscow and Podgorica, we can customize control panels to meet the specific needs of our customers and ensure that they are of high quality.': 'Imajući sve potrebne alate i opremu na jednom mestu - naša dobro opremljena radionica za kontrolne panele u Moskvi i Podgorici, možemo prilagoditi kontrolne panele specifičnim potrebama naših kupaca i osigurati da su visokog kvaliteta.',

        'Our official partnership with Eaton Corp. as a registered panel-builder within the Eaton Power Advantage Partner Program demonstrates our company’s expertise and commitment to produce high-quality electrical cabinets.': 'Naše zvanično partnerstvo sa Eaton Corp. kao registrovanim proizvođačem panela u okviru Eaton Power Advantage Partner Program-a pokazuje stručnost naše kompanije i posvećenost proizvodnji visokokvalitetnih električnih ormara.',

        'Our panel engineers are also site engineers involved with installation, software design and commissioning. This means they have a truly in-depth understanding of controls and integration, and have extensive HVAC and plant knowledge.': 'Naši inženjeri za panele su takođe terenski inženjeri uključeni u instalaciju, dizajn softvera i puštanje u rad. To znači da imaju istinski duboko razumevanje kontrole i integracije, kao i obimno znanje o HVAC sistemima i postrojenjima.',

        'The team creating our panels know exactly what they are being for, how they will be installed, and have a real understanding of the projects themselves. They are not just following a panel diagram.': 'Tim koji kreira naše panele tačno zna za šta se koriste, kako će biti instalirani i imaju pravo razumevanje samih projekata. Oni ne prate samo dijagram panela.',

        'We design our own control panel/switchgear units in-house. For this purpose, the our electrical engineers use the EPLAN Electric P8 CAE tool. Following the actual electrical design phase, a 3D structural design is also implemented in Pro Panel, as well as Eaton’s or ABB’s configuration and pricing software that enables our experts to design, configure and calculate the cost of low-voltage switchgear assemblies (Eaton Configurator xEnergy, ABB e-Design).': 'Mi dizajniramo naše sopstvene kontrolne panele/jedinice za razvod u kući. U tu svrhu naši električni inženjeri koriste EPLAN Electric P8 CAE alat. Nakon stvarne faze električnog dizajna, 3D strukturni dizajn se takođe implementira u Pro Panel, kao i Eaton-ov ili ABB-ov softver za konfiguraciju i cenu koji omogućava našim stručnjacima da dizajniraju, konfigurišu i izračunaju trošak sklopova niskonaponskih razvodnih ormana (Eaton Configurator xEnergy, ABB e-Design).',
};






    // Function to perform translation
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

    function resetSlider() {
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }

    function resetSliderRemove() {
        slider.removeChild(slider.firstElementChild);
        slider.appendChild(slider.firstElementChild.cloneNode(true));
    }

    let slider = document.querySelector('.slider');

// Function to reset the slider after the animation ends
    function resetSliderAnimation() {

        resetSliderRemove();

    }

// Add animation end event listener to reset the slider
    slider.addEventListener('animationiteration', resetSliderAnimation);

    function resetSlider2() {
        slider2.appendChild(slider2.firstElementChild.cloneNode(true));
    }

    function resetSliderRemove2() {
        slider2.removeChild(slider2.firstElementChild);
        slider2.appendChild(slider2.firstElementChild.cloneNode(true));
    }

    let slider2 = document.querySelector('.slider2');

// Function to reset the slider after the animation ends
    function resetSliderAnimation2() {

        resetSliderRemove2();

    }

// Add animation end event listener to reset the slider
    slider.addEventListener('animationiteration', resetSliderAnimation2);

// Initial reset
    resetSlider();
resetSlider2()



    const referenceContainer = document.querySelector('.max-w-picture');
    const paginationContainer = document.getElementById('pagination');
    const itemsPerPage = 4; // Adjust as needed
    let currentPage = 1;

    function displayReferences(page) {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const referenceItems = Array.from(referenceContainer.children);

        referenceItems.forEach((item, index) => {
            if (index >= startIndex && index < endIndex) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function generatePagination() {
        const totalItems = referenceContainer.children.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage);

        paginationContainer.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;

            if (i === currentPage) {
                pageLink.classList.add('active');
            }

            pageLink.addEventListener('click', () => {
                currentPage = i;
                displayReferences(currentPage);
                updatePaginationUI();
            });

            paginationContainer.appendChild(pageLink);
        }
    }

    function updatePaginationUI() {
        const pageLinks = Array.from(paginationContainer.children);

        pageLinks.forEach((link, index) => {
            if (index === currentPage - 1) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    displayReferences(currentPage);
    generatePagination();

});





