let box = document.getElementById("box");

box.addEventListener("click", function () {
  console.log("I want to open the box");
});

// --------------------------------------

// If possible, use const. If not, use let.

// Which variables below should be changed from let to const?

// The customer wants to order some stuff. Here are the details:
const basePrice = 520;
const discount = 120;
let shippingCost = 12;
let shippingTime = "5-12 days";

// Whops! Turns out the shipping will be a bit more complex
shippingCost = 15;
shippingTime = "7-14 days";

// Calculating the full price
const fullPrice = basePrice - discount + shippingCost;

// Finally, notifying the customer
console.log("Total cost: " + fullPrice + ". It will arrive in " + shippingTime);

// --------------------------------------

const container = document.getElementById("container");

container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// --------------------------------------

function buy() {
  container.innerHTML += "<p>Thank you for buying!</p>";
}

// --------------------------------------

const recipient = "James";

const sender = "Pepe";

// const email = "Hey " + recipient + "! How is it going? Cheers Per";

// const email = `Hey ${recipient}! How is it going? Cheers Per`;

// Backticks allow strings to be on multiple lines

const email = `Hey ${recipient}! 
  How is it going? Cheers ${sender}`;

console.log(email);

// --------------------------------------

console.log(Boolean("")); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean(100)); // truthy
console.log(Boolean(null)); // falsy
console.log(Boolean([0])); // truthy
console.log(Boolean(-0)); // falsy

// --------------------------------------

// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(name) {
//   welcomeEl.textContent = "Welcome back, " + name + "!";
// }

// greetUser("Pepe");

// --------------------------------------

// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(greeting, name) {
//   // welcomeEl.textContent = greeting + ", " + name + "!";
//   welcomeEl.textContent = `${greeting}, ${name}!`;
// }

// greetUser("Howdy", "Pepe");

// --------------------------------------

const welcomeEl = document.getElementById("welcome-el");

function greetUser(greeting, name, emoji) {
  // welcomeEl.textContent = greeting + ", " + name + "!";
  welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
}

greetUser("Howdy", "Pepe", "emoji");

// --------------------------------------

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4));
console.log(add(9, 102));

// --------------------------------------

const array = [0, 1, 2];

function getFirst(arr) {
  return arr[0];
}

console.log(getFirst(array));
