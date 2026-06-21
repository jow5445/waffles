window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#383848";
        navbar.style.position = "fixed";
        navbar.style.width = "100%";
        navbar.style.top = "0";
        navbar.style.left = "0";
        navbar.style.zIndex = "1000";
    } else {
        navbar.style.background = "transparent";
        navbar.style.position = "relative";
    }
});

document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const galleryImages = document.querySelectorAll('.img-gallery img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {

        const overlay = document.createElement('div');
        overlay.classList.add('lightbox');

        overlay.innerHTML = `
            <img src="${img.src}" alt="">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name.length < 3) {
        e.preventDefault();
        alert("Please enter a valid name.");
        return;
    }

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        e.preventDefault();
        alert("Please enter a valid email.");
        return;
    }

    alert("Message sent successfully!");
});

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2
    }
);

document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


const text =
    "Here you can find most delicacies food in the world";

const target =
    document.querySelector("header .content p");

target.textContent = "";

let i = 0;

function typing() {
    if (i < text.length) {
        target.textContent += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();