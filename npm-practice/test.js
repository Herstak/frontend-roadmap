const dayjs = require("dayjs");

console.log("Сегодня:", dayjs().format("YYYY-MM-DD"));
console.log("Через неделю:", dayjs().add(7, "day").format("YYYY-MM-DD"));