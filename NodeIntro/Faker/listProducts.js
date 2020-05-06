let faker = require("faker");

let randomProduct = "";
let randomPrice = "";

for (let i = 0; i < 10; i++) {
    randomProduct = faker.commerce.productName();
    randomPrice = faker.commerce.price();
    console.log(`Product: ${randomProduct} | Price: $${randomPrice}`);
}