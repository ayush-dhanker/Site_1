"use strict";

//declaring variables
const niftyEl = document.getElementById("nifty");
const bank_NiftyEl = document.getElementById("bank-nifty");
const total_P_L_EL = document.getElementById("total_P&L");
const nifty_P_L_El = document.getElementById("nifty_P&L");
const bank_P_L_El = document.getElementById("bank_P&L");
const square_Off_Btn = document.querySelector(".square-off");
const modalEl = document.querySelector(".modal");
const overlayEl = document.querySelector(".overlay");
const cancel_btn = document.querySelector(".modal_buttons1");
const row_1 = document.querySelector(".row1");
const row_2 = document.querySelector(".row2");

//initialization
let seconds = 0,
  total_P_L = 0,
  nifty_P_L = 0,
  bank_P_L = 0;

//function for changing the color of button when clicked
function swapButton() {
  niftyEl.classList.toggle("swap-button");
  bank_NiftyEl.classList.toggle("swap-button");
}

//function for displaying amounts
function displayAmount() {
  seconds++;
  if (seconds <= 3) {
    nifty_P_L = 0;
    bank_P_L = 28.75;
    display(nifty_P_L, bank_P_L);
  } else if (seconds > 3 && seconds <= 6) {
    nifty_P_L = 0;
    bank_P_L = 98.75;
    display(nifty_P_L, bank_P_L);
  } else if (seconds > 6 && seconds < 10) {
    nifty_P_L = 0;
    bank_P_L = 193.75;
    display(nifty_P_L, bank_P_L);
  } else {
    seconds = 0;
  }
}

function display(nifty_P_L, bank_P_L) {
  total_P_L = nifty_P_L + bank_P_L;
  nifty_P_L_El.textContent = `₹ 0.00`;
  bank_P_L_El.textContent = `₹ ${bank_P_L}`;
  total_P_L_EL.textContent = `₹ ${total_P_L}`;
}

//function for warning window
function modalWindow() {
  modalEl.classList.toggle("hidden");
  overlayEl.classList.toggle("hidden");
}

//adding event to nifty button
niftyEl.addEventListener("click", function () {
  swapButton();
  row_1.classList.add("hidden");
  row_2.classList.add("hidden");
});
//adding event to BankNifty Button
bank_NiftyEl.addEventListener("click", function () {
  swapButton();
  row_1.classList.remove("hidden");
  row_2.classList.remove("hidden");
});

window.setInterval(displayAmount, 1000);

//showing/hiding warning window
square_Off_Btn.addEventListener("click", modalWindow);
cancel_btn.addEventListener("click", modalWindow);
