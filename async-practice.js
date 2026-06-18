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

function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 0) {
            resolve("Положительное");
        }
        else {
            reject("Не положительное");
        }
    });
}

checkNumber(5)
    .then(result => console.log("✅", result))
    .catch(error => console.log("❌", error));

checkNumber(-3)
    .then(result => console.log("✅", result))
    .catch(error => console.log("❌", error));


delay(1000)
    .then(() => {
        console.log("Шаг 1 (через 1 сек)");
        return delay(1000);
    })
    .then(() => {
        console.log("Шаг 2 (еще через 1 сек)");
        return delay(1000);
    })
    .then(() => {
        console.log("Шаг 3 (еще через 1 сек)");
    });

const p1 = delay(1000).then(() => "Первый (1с)");
const p2 = delay(2000).then(() => "Второй (2с)");
const p3 = delay(1500).then(() => "Третии (1.5с)");

Promise.all([p1, p2, p3])
    .then((resutls) => {
        console.log("Все готовы:", resutls);
    });