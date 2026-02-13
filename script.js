const envelope = document.getElementById("envelope");
const startSlideBtn = document.getElementById("startSlideBtn");
const sliderSection = document.getElementById("sliderSection");
const envelopeBox = document.querySelector(".envelope");

const slideImage = document.getElementById("slideImage");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn"); // ต้องมีใน HTML
const caption = document.getElementById("caption");
const counter = document.getElementById("counter");
const flash = document.getElementById("flash"); // ต้องมี div flash ใน HTML

let currentSlide = 1;
const totalSlides = 20;

/* ========================= */
/* เปิดจดหมาย */
/* ========================= */

/* ========================= */
/* Floating Hearts */
/* ========================= */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 400);

/* ========================= */
/* กดเริ่มดูความทรงจำ */
/* ========================= */

const pageFlash = document.getElementById("pageFlash");

startSlideBtn.addEventListener("click", () => {

    // เปิดแฟลช
    pageFlash.classList.add("active");

    setTimeout(() => {

        envelopeBox.style.display = "none";
        startSlideBtn.style.display = "none";
        document.querySelector(".open-text").style.display = "none";

        sliderSection.classList.remove("hidden");
        sliderSection.style.display = "flex";

    }, 300);  // ให้แฟลชขึ้นก่อนค่อยเปลี่ยนหน้า

});

const flowers = document.querySelectorAll(".flower-gift");

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    flowers.forEach(flower => {
        flower.classList.add("show");
    });

    setTimeout(() => {
        startSlideBtn.classList.add("show");
    }, 800);
});



/* ========================= */
/* เปลี่ยนสไลด์ */
/* ========================= */
function updateSlide(direction) {

    // เอฟเฟกต์แฟลช
    flash.classList.add("active");

    // slide animation
    slideImage.style.transform =
        direction === "next"
        ? "translateX(-40px)"
        : "translateX(40px)";

    slideImage.style.opacity = 0;

    setTimeout(() => {

        slideImage.src = `photo/${currentSlide}.jpg`;

        caption.innerText = `โมเมนต์ที่ ${currentSlide} ❤️`;
        counter.innerText = `${currentSlide} / ${totalSlides}`;

        slideImage.style.transform = "translateX(0)";
        slideImage.style.opacity = 1;

        flash.classList.remove("active");

    }, 300);
}

/* ========================= */
/* ปุ่ม Next */
/* ========================= */
nextBtn.addEventListener("click", () => {

    currentSlide++;
    if(currentSlide > totalSlides){
        currentSlide = 1;
    }

    updateSlide("next");
});

/* ========================= */
/* ปุ่ม Prev */
/* ========================= */
if(prevBtn){
    prevBtn.addEventListener("click", () => {

        currentSlide--;
        if(currentSlide < 1){
            currentSlide = totalSlides;
        }

        updateSlide("prev");
    });
}


function flowerBurst() {

    const envelopeRect = envelope.getBoundingClientRect();
    const centerX = envelopeRect.left + envelopeRect.width / 2;
    const centerY = envelopeRect.top + envelopeRect.height / 2;

    for(let i = 0; i < 20; i++){

        const flower = document.createElement("div");
        flower.classList.add("flower-burst");
        flower.innerHTML = "🌸";

        document.body.appendChild(flower);

        flower.style.left = centerX + "px";
        flower.style.top = centerY + "px";

        const randomX = (Math.random() - 0.5) * 400;
        const randomY = (Math.random() - 0.5) * 400;

        flower.style.setProperty('--x', randomX + "px");
        flower.style.setProperty('--y', randomY + "px");

        setTimeout(()=>{
            flower.remove();
        },1200);
    }
}


