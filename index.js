const btns = document.querySelectorAll('.contents');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        window.open('https://Wongoon.github.io/Chzzk_Layer/' + btn.getAttribute("id"));
    });
});