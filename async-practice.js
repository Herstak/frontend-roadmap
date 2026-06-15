console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");

setTimeout(() => console.log("D"), 100);

console.log("E");

// Твой прогноз порядка: A, C, E, B, D

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

console.log("Старт");
delay(2000).then(() => console.log("Прошло 2 секунды!"));
console.log("Это выдается сразу");