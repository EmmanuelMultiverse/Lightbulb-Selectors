let lightbulbs = document.querySelectorAll(".item.lightbulb");
let subtitle = document.querySelector(".subtitle");
let count = 0;

lightbulbs.forEach((item) => item.addEventListener("click", () => {
    ++count;
    item.classList.toggle("active");
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
}))