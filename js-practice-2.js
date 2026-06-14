const fruits = ["яблоко", "банан", "вишня"];

for (const [i, fruit] of fruits.entries()) {
    console.log(i, fruit);
}

fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});

const getStatus = (age) => 
    age < 13 ? "Ребенок"
 : age < 18 ? "Подросток" 
 : "Взрослый";

console.log(getStatus(5));    
console.log(getStatus(15));   
console.log(getStatus(25));

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

const withZero = [0, ...arr3];

const arr1copy = [...arr1];
arr1copy.push(999);

console.log(withZero);
console.log(arr1copy);

const defaults = { theme: "light", lang: "ru", fontSize: 14 };
const userPrefs = { theme: "dark", fontSize: 16 };

const finalSettings = {...defaults, ...userPrefs};

console.log(finalSettings);

const product = {
    name: "iPhone 15",
    price: 999,
    color: "blue",
    stock: 10
};

const {name, price, color} = product;

console.log(name, price, color);

function displayUser({name, age, city}) { return `${name} (${age} лет) из ${city}` };

const user = { name: "Алькарим", age: 22, city: "Атырау" };
console.log(displayUser(user));
