// --- SCROLL ---

let sayfa = 0;

const sayfaBir = document.querySelector(".bir");
const sayfaIki = document.querySelector(".iki");
const sayfaUc = document.querySelector(".uc");
const sayfaDort = document.querySelector(".dort");
const sayfaBes = document.querySelector(".bes");

const navs = ["anasayfa", "projeler", "hakkimda", "icerikler", "iletisim"]

// Nav Clicks
navs.forEach((id, index) => {
    document.getElementById(id).addEventListener("click", () => {
        sayfa = index;
        switchimsi();
    });
});

// Wheel
window.addEventListener("wheel", (e) => {
  e.preventDefault();
  if(e.deltaY > 0 && sayfa != 4) {
    sayfa++;
  }
  else if(e.deltaY < 0 && sayfa != 0) {
    sayfa--;
  }

  switchimsi();
}, { passive: false });

// Touch
let touchStartY = 0;

window.addEventListener("touchstart", e => {
    touchStartY = e.touches[0].clientY;
});

window.addEventListener("touchend", e => {
    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) < 50) return;

    if (diff > 0 && sayfa < 2) sayfa++;
    else if (diff < 0 && sayfa > 0) sayfa--;

    switchimsi();
});

// Scrolling
function switchimsi() {
    const sayfalar = [sayfaBir, sayfaIki, sayfaUc, sayfaDort, sayfaBes];

    sayfalar.forEach(s => s.classList.remove("active"));

    document.querySelectorAll(".nav-links a")
        .forEach(nav => nav.classList.remove("active"));

    scrollToElement(sayfalar[sayfa]);

    document.getElementById(navs[sayfa]).classList.add("active");
}

function scrollToElement(index) {
index.scrollIntoView({
  behavior: "smooth",
  inline: "start",   // yatayda başa hizala
  block: "nearest"
});
}

const projects = [
    {
        image: "images/MyDiary.png",
        title: "Günlük Uygulamam",
        description: "Flutter • Firestore",
        link: "https://groups.google.com/g/gunlugum-testers"
    },
    {
        image: "images/website.png",
        title: "Web sayfam",
        description: "HTML • CSS • Javascritp",
        link: "https://example.com"
    },
];

const projectsContainer = document.getElementById("projects");

projects.forEach(project => {
    projectsContainer.innerHTML += `
        <div class="card">
            <img src="${project.image}" alt="${project.title}">
            <div class="title">${project.title}</div>
            <div class="description">${project.description}</div>
            <a href="${project.link}" target="_blank">
                <button>İncele</button>
            </a>
        </div>
    `;
});