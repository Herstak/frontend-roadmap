function repeat(n, fn) {
    if (n <= 0) return;
    fn();
    repeat(n - 1, fn);
}

repeat(3, () => console.log("Hello!"));


function createMultiplier(x) {
    return function Multiplier(n) {
        return x * n;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));


function createUser({ name, age = 18, role = "user" } = {}) {
    return `name: ${name}, age: ${age}, role: ${role}`;
}

console.log(createUser({ name: "Anna" }));

console.log(createUser({ name: "Bob", age: 30, role: "admin" }));

console.log(createUser());

function makeCounter() {
    let count = 0;

    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = 0;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const counter = makeCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(counter.getValue());

counter.decrement();
console.log(counter.getValue());

counter.reset();
console.log(counter.getValue());

console.log(counter.count);


const person = {
    name: "Alkarim",

    greetNormal: function() {
        return `Привет от ${this.name}`; 
    },

    greetArrow: () => {
        return `Привет от ${this.name}`; 
    }
}

console.log(person.greetNormal()); 

console.log(person.greetArrow()); 

function memoize(fn) {
    const cache = {};

    return function(arg) {
        if (arg in cache) {
            return cache[arg];
        } 
        cache[arg] = fn(arg);
        return cache[arg];
    }
}

const slowDouble = (n) => {
    console.log(`Считаю ${n}*2...`);
    return n * 2;
}

const fastDouble = memoize(slowDouble);

console.log(fastDouble(5));
console.log(fastDouble(5));
console.log(fastDouble(10));
console.log(fastDouble(5));