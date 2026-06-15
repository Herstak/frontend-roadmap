let count = 0;
const counter = document.querySelector("#counter");

document.querySelector("#increment").addEventListener("click", () => {
    count++;
    counter.textContent = count;
});

document.querySelector("#decrement").addEventListener("click", () => {
    count--;
    counter.textContent = count;
});

document.querySelector("#reset").addEventListener("click", () => {
    count = 0;
    counter.textContent = count;
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const form = document.querySelector("#greet-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.querySelector("#name-input").value;
    document.querySelector("#greeting").textContent = `Привет, ${name}!`;
});

const liveInput = document.querySelector("#live-input");
const liveOutput = document.querySelector("#live-output");

liveInput.addEventListener("input", (event) => {
    const inputText = event.target.value;
    liveOutput.textContent = inputText;
});