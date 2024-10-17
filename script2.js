const fruits = document.querySelector(".fruits");

const input = document.querySelector(".input");

const button = document.querySelector(".button");

const demoFruits = ["apple", "mango", "banana", "orange"];

const init = () => {
  fruits.innerHTML = "";
  demoFruits.sort().forEach((item) => {
    const element = document.createElement("li");
    element.innerText = item;
    fruits.appendChild(element);
  });
};

const addItem = () => {
  const fruitItem = input.value;
  demoFruits.push(fruitItem);
  init();
  input.innerHTML = "";
};

button.addEventListener("click", addItem);

init();
