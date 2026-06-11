console.log("10" + 5); // "105"
console.log("10" - 5); // "5"
console.log(true + true); // true
console.log("5" * "2"); // 10
console.log([] + {}); // true

function isTruthy(value) {
    if (value) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isTruthy(0));
console.log(isTruthy(""));
console.log(isTruthy([]));
console.log(isTruthy("hello"));

const user = {
    name: "Alkarim",
    age: 21,
    email: "alkarim210@gmail.com",
    isAdmin: true,

    greet() {
        return `Привет, я ${this.name}, мне ${this.age} лет`;
    }
};

user.age = 22;
user.country = "Kazakhstan";
delete user.email;
console.log(Object.keys(user));
console.log(user.greet());

const numbers = [1, 2, 3, 4, 5];

const numsq = numbers.map(n => n * n);
console.log(numsq);

const users = [
    { name: "Anna", age: 15 },
    { name: "Bob", age: 30 },
    { name: "Carl", age: 22 },
    { name: "Diana", age: 17 }
];

const adults = users
    .filter(u => u.age >= 18)
    .map(u => u.name.toUpperCase())
    .sort();

console.log(adults);

const newNumbers = [5, 10, 15, 20, 25]

console.log(newNumbers.reduce((total, n) => total + n, 0));