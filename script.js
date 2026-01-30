// SCROLL

let sayfa = 0;

sayfaBir = document.querySelector(".bir");
sayfaIki = document.querySelector(".iki");
sayfaUc = document.querySelector(".uc");

// Nav Clicks
document.getElementById("anasayfa").addEventListener("click", () => {
  sayfa = 0;
  scrollToElement(sayfaBir);
  switchimsi();
});

document.getElementById("projeler").addEventListener("click", () => {
  sayfa = 1;
  scrollToElement(sayfaIki);
  switchimsi();
});

document.getElementById("videolar").addEventListener("click", () => {
  sayfa = 2;
  scrollToElement(sayfaUc);
  switchimsi();
});

// Wheel
window.addEventListener("wheel", (e) => {
  e.preventDefault();
  if(e.deltaY > 0 && sayfa != 2) {
    sayfa++;
  }
  else if(e.deltaY < 0 && sayfa != 0) {
    sayfa--;
  }

  else if(e.deltaY > 0 && sayfa == 2) {
    sayfa = 0;
  }

  else if(e.deltaY < 0 && sayfa == 0) {
    sayfa = 2;
  }

  switchimsi();
}, { passive: false });


// Nav Renkleri
function switchimsi() {
  switch(sayfa) {
    case 0:
      sayfa = 0;
      scrollToElement(document.querySelector(".bir"));
      renkDegisim("rgba(255, 255, 255)", "rgba(128, 128, 128, 0.6)", "rgba(128, 128, 128, 0.6)");
      break;
    case 1:
      sayfa = 1;
      scrollToElement(document.querySelector(".iki"));
      renkDegisim("rgba(128, 128, 128, 0.6)", "rgba(255, 255, 255)", "rgba(128, 128, 128, 0.6)");
      break;
    case 2:
      sayfa = 2;
      scrollToElement(document.querySelector(".uc"));
      renkDegisim("rgba(128, 128, 128, 0.6)", "rgba(128, 128, 128, 0.6)", "rgba(255, 255, 255)");
      break;
  }
}

function renkDegisim(anasayfa, projeler, videolar){
  document.getElementById("anasayfa").style.color = anasayfa;
  document.getElementById("projeler").style.color = projeler;
  document.getElementById("videolar").style.color = videolar;
}

function scrollToElement(index) {
index.scrollIntoView({
  behavior: "smooth",
  inline: "start",   // yatayda başa hizala
  block: "nearest"
});
}


// Social Media Button

document.querySelector(".youtube").addEventListener("click", (e) => window.open("https://www.youtube.com/@RsSeta"), false);

document.querySelector(".instagram").addEventListener("click", (e) => window.open("https://www.instagram.com/rs_seta/"), false);

document.querySelector(".tiktok").addEventListener("click", (e) => window.open("https://www.tiktok.com/@rssetatt"), false);

document.querySelector(".kick").addEventListener("click", (e) => window.open("https://kick.com/rsseta"), false);