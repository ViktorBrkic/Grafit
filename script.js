// const { start } = require("live-server");

// function smoothScroll(target, duration) {
//     var target = document.querySelector(target);
//     var targetPosition = target.getBoundingClientRect().top;
//     var startPosition = window.pageYOffset;
//     var distance = targetPosition - startPosition;
//     var startTime = null;

//     function animation(currentTime) {
//         if (startTime === null) startTime = currentTime;
//         var timeElapsed = currentTime - startTime;
//         var run = ease(timeElapsed, startPosition, distance, duration);
//         window.scrollTo(0, run)
//         if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//         t /= d / 2;
//         if (t < 1) return c / 2 * t * t + b;
//         t--;
//         return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
// }


// var btn = document.querySelector('.btn')

// btn.addEventListener('click', function () {
//     smoothScroll('.story', 1000);
// });

const btnScrollToStory = document.querySelector(".btn");

btnScrollToStory.addEventListener("click", function () {

    window.scrollTo({
        top: 1900,
        behavior: "smooth"
    });
});

document.getElementById("facebook").onclick = function () {
    location.href = "https://www.facebook.com/grafitmostar";

};

document.getElementById("instagram").onclick = function () {
    location.href = "https://www.instagram.com/grafit_mostar/?fbclid=IwAR28xBjURAD7Hf51igO6MPgxgVU9c4OJS2Lh0eA1ja8X8yrtCtlalipOtDc";
};

const bottomScrollToTop = document.querySelector(".foot__brand");

bottomScrollToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});