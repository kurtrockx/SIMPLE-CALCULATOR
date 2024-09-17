"use strict";

const calCont = document.querySelector(".input-container");
const numbers = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const input = document.querySelector(".input");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const plusminus = document.querySelector(".plusminus");
const backspace = document.querySelector(".backspace");
let value1, value2, op;

// Clear Function
const clearInput = () => (input.value = "");

// Number Input Function
const inputNumber = (value) => {
  if (!value) return;
  // Prevent multiple decimal points
  if (value === "." && input.value.includes(".")) return;
  input.value += value;
};

// Number Input Event
calCont.addEventListener("click", function (e) {
  const value = e.target.dataset.value;
  inputNumber(value);
});
window.addEventListener("keydown", function (e) {
  const value = e.key;
  if (isFinite(value) || value === ".") {
    inputNumber(value);
  } else if (["+", "-", "*", "/"].includes(value)) {
    op = value;
    value1 = +input.value;
    clearInput();
  } else if (value === "Enter") {
    equalOp();
  } else if (value === "Backspace") {
    backspaceFunction();
  } else if (value === "Escape") {
    clearInput();
  } else if (value === "+") {
    plusminusFunction();
  }
});

// Operators
operators.addEventListener("click", function (e) {
  value1 = +input.value;
  op = e.target.dataset.op;
  if (!op) return;
  clearInput();
});

// Equals Function
const equalOp = () => {
  if (value1 == null || !op) return;
  value2 = +input.value;
  switch (op) {
    case "+":
      input.value = value1 + value2;
      break;
    case "-":
      input.value = value1 - value2;
      break;
    case "*":
      input.value = value1 * value2;
      break;
    case "/":
      input.value = value1 / value2;
      break;
  }
  // Clear operator after calculation
  op = null;
  value1 = null;
};

equal.addEventListener("click", equalOp);

// Clear Field
clear.addEventListener("click", clearInput);

// Plus Minus
const plusminusFunction = () => {
  input.value = input.value.startsWith("-")
    ? input.value.slice(1)
    : `-${input.value}`;
};

plusminus.addEventListener("click", plusminusFunction);

// Backspace
const backspaceFunction = () => {
  input.value = input.value.slice(0, -1);
};

backspace.addEventListener("click", backspaceFunction);
