const scroll = document.getElementById("scroll");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const startBtn = document.getElementById("startBtn");
const sound = document.getElementById("scrollSound");

let opened = false;

scroll.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    // Putar suara gulungan
    sound.currentTime = 0;
    sound.play();

    // Animasi gulungan
    scroll.classList.add("open");

    // Munculkan judul
    setTimeout(() => {
        title.classList.add("show");
        subtitle.classList.add("show");
    }, 800);

    // Munculkan tombol
    setTimeout(() => {
        startBtn.classList.add("show");
    }, 1400);

});

// Masuk ke halaman login
startBtn.addEventListener("click", () => {
    window.location.href = "pages/login.html";
});