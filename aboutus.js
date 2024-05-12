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

