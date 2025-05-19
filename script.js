// Animation on input focus
const input = document.querySelector('main input');

input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 15px rgba(255, 0, 0, 0.4)';
});

input.addEventListener('blur', () => {
    input.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
});

// Smooth load animations
document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    mainContent.style.transform = "translateY(30px)";
    setTimeout(() => {
        mainContent.style.transition = "all 0.8s ease-in-out";
        mainContent.style.opacity = 1;
        mainContent.style.transform = "translateY(0)";
    }, 200);
});
