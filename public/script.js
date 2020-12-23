const seconds = document.querySelector('.seconds');
const submit = document.querySelector('.submit');
const current = document.querySelector('.current');
const header = document.querySelector('.header');
// Timer feature
let i = 60;
const timerSeconds = setInterval(() => {
    i--;
    seconds.innerHTML = `${i}s`;

    if (i === 0) {
        clearInterval(timerSeconds);
        i = 0;
    }
}, 1000);

// On scroll feature
window.onscroll = function () {
    if (document.documentElement.scrollTop >= 80) {
        header.classList.add('shadow');
    } else {
        header.classList.remove('shadow');
    }
}

