const slides = document.querySelectorAll('.image_slide div');
let currentIndex = 0;

// 처음에 첫 번째 이외의 span을 숨김
for (let i = 1; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.display = 'none';
}

function fadeOut(element, duration = 1000) {
    let opacity = 1;
    const start = performance.now();

    function step(timestamp) {
        const progress = (timestamp - start) / duration;
        opacity = Math.max(1 - progress, 0);
        element.style.opacity = opacity;

        if (opacity > 0) {
            requestAnimationFrame(step);
        } else {
            element.style.display = 'none';
        }
    }

    requestAnimationFrame(step);
}

function fadeIn(element, duration = 1000) {
    let opacity = 0;
    const start = performance.now();
    element.style.display = 'inline'; // 또는 'block', 'inline-block'

    function step(timestamp) {
        const progress = (timestamp - start) / duration;
        opacity = Math.min(progress, 1);
        element.style.opacity = opacity;

        if (opacity < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

setInterval(function () {
    // 현재 슬라이드를 페이드아웃
    fadeOut(slides[currentIndex]);

    // 다음 슬라이드로 전환
    currentIndex = (currentIndex + 1) % slides.length;

    // 다음 슬라이드를 페이드인
    fadeIn(slides[currentIndex]);
}, 10000); // 슬라이드 전환 주기
