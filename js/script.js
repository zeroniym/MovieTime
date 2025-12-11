const line = document.getElementById('line');
const btnLeft = document.getElementById('arrow-left');
const btnRight = document.getElementById('arrow-right');

let offset = 0;
const posterWidth = 220; // ширина постера + gap (200 + 20)
const visibleWidth = 1200; // ширина области (можешь менять)
const maxOffset = (line.children.length * posterWidth) - visibleWidth;

// Плавная анимация только для контейнера
line.style.transition = "transform 1s ease-in-out";

btnRight.onclick = () => {
    if (offset > -maxOffset) {
        offset -= posterWidth;
        line.style.transform = `translateX(${offset}px)`;
    }
};
