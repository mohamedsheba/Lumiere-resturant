// Menu Cards Content
const menuCategories = document.querySelectorAll(".menu-category");

// Breakfast Menu
menuCategories[0].innerHTML = "";
for (let i = 1; i <= 6; i++) {
    menuCategories[0].innerHTML += `<div class="card">
                            <div class="card-img">
                                <img src="images/breakfast${i}.jpg" alt="">
                            </div>

                            <div class="card-content">

                                <div class="main-line">
                                    <h3>Creamy Pasta</h3>
                                    <span class="price">$17.00</span>
                                </div>

                                <div class="rating">
                                    <span>★</span>4.5<small>(945 Review)</small>
                                </div> 

                                <div class="card-desc">
                                    Handmade pasta in a rich cream sauce, finished with herbs and truffle.
                                </div>

                                <a href="#">Add to Cart</a>
                            </div>

                        </div>`
}

// Lunch Menu
menuCategories[1].innerHTML = "";
for (let i = 1; i <= 6; i++) {
    menuCategories[1].innerHTML += `<div class="card">
                            <div class="card-img">
                                <img src="images/lunch${i}.jpg" alt="">
                            </div>

                            <div class="card-content">

                                <div class="main-line">
                                    <h3>Creamy Pasta</h3>
                                    <span class="price">$17.00</span>
                                </div>

                                <div class="rating">
                                    <span>★</span>4.5<small>(945 Review)</small>
                                </div> 

                                <div class="card-desc">
                                    Handmade pasta in a rich cream sauce, finished with herbs and truffle.
                                </div>

                                <a href="#">Add to Cart</a>
                            </div>

                        </div>`
}

// Dinner Menu
menuCategories[2].innerHTML = "";
for (let i = 1; i <= 6; i++) {
    menuCategories[2].innerHTML += `<div class="card">
                            <div class="card-img">
                                <img src="images/dinner${i}.jpg" alt="">
                            </div>

                            <div class="card-content">

                                <div class="main-line">
                                    <h3>Creamy Pasta</h3>
                                    <span class="price">$17.00</span>
                                </div>

                                <div class="rating">
                                    <span>★</span>4.5<small>(945 Review)</small>
                                </div> 

                                <div class="card-desc">
                                    Handmade pasta in a rich cream sauce, finished with herbs and truffle.
                                </div>

                                <a href="#">Add to Cart</a>
                            </div>

                        </div>`
}


menuCategories[3].innerHTML = "";
for (let i = 1; i <= 6; i++) {
    menuCategories[3].innerHTML += `<div class="card">
                            <div class="card-img">
                                <img src="images/dessert${i}.jpg" alt="">
                            </div>

                            <div class="card-content">

                                <div class="main-line">
                                    <h3>Mango Ice Cream</h3>
                                    <span class="price">$9.00</span>
                                </div>

                                <div class="rating">
                                    <span>★</span>4.5<small>(945 Review)</small>
                                </div>

                                <div class="card-desc">
                                    Silky mango ice cream with ripe mangoes and a refreshing tropical sweetness.
                                </div>

                                <a href="#">Add to Cart</a>
                            </div>

                        </div>`
}

// Dark Mode Button
const themeToggle = document.querySelector(".dark-mode");
const darkLightBall = document.querySelector(".dark-mode div");
const navLogo = document.querySelector("nav img");
const footerLogo = document.querySelector("footer img");
const html = document.documentElement;

let theme = localStorage.getItem("theme");
if (theme === "dark") {
    html.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkLightBall.classList.toggle("active");
    darkLightBall.innerHTML = "🌙";
    navLogo.classList.toggle("dark");
    footerLogo.classList.toggle("dark");
}

themeToggle.addEventListener("click", () => {

    if (html.getAttribute("data-theme") === "dark") {
        html.removeAttribute("data-theme");
        localStorage.setItem("theme", "light");
        darkLightBall.classList.toggle("active");
        darkLightBall.innerHTML = "☀️";
        navLogo.classList.toggle("dark");
        footerLogo.classList.toggle("dark");
    } else {
        html.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        darkLightBall.classList.toggle("active");
        darkLightBall.innerHTML = "🌙";
        navLogo.classList.toggle("dark");
        footerLogo.classList.toggle("dark");
    }
});

/* ===== Menu ===== */
// Menu Categories
const menuCategoriesBtns = document.querySelectorAll(".menu-btn");

menuCategoriesBtns.forEach((btn, index) => {

    btn.addEventListener("click", () => {

        menuCategoriesBtns.forEach(btns => {
            btns.classList.remove("active");
        });
        btn.classList.add("active");

        menuCategories.forEach(category => {
            category.classList.remove("active");
        });
        menuCategories[index].classList.add("active");

        updateDots(menuCategories[index]);
    });

});

// Menu Cards Slider
const dots = document.querySelectorAll(".dot");

function updateDots(category) {

    const index = Math.round(
        category.scrollLeft / category.clientWidth
    );

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[index]?.classList.add("active");
}

menuCategories.forEach(category => {

    category.addEventListener("scroll", () => {
        updateDots(category);
    })
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {

    if (navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
        menuToggle.innerHTML = "☰";
    }
    else {
        navLinks.classList.add("open");
        menuToggle.innerHTML = "X";
    }

});

document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove("open");
        menuToggle.innerHTML = "☰";
    }
})

const navLinkEls = document.querySelectorAll('.nav-links a');
navLinkEls.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.innerHTML = "☰";
    });

});


/* ===== Animations ===== */

// Changing NavBar on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 60);
});

// Active NavLinks
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
    let current = '';
    const offset = window.innerHeight * 0.4;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
            current = section.getAttribute('id');
        }
    });

    navLinkEls.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);


// Data Reveal
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));