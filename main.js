let customButton = document.querySelector(".customButton");
let customInput = document.getElementById("#customTip");

customButton.addEventListener("click", () => {
  customButton.classList.add("hidden");
  customInput.classList.remove("hidden");
});
/* ! */

let tipButton1 = document.getElementById("#tipButton5");
let tipButton2 = document.getElementById("#tipButton10");
let tipButton3 = document.getElementById("#tipButton15");
let tipButton4 = document.getElementById("#tipButton25");
let tipButton5 = document.getElementById("#tipButton50");

let tip = 0;

tipButton1.addEventListener("click", () => {
  tipButton2.classList.remove("selected");
  tipButton3.classList.remove("selected");
  tipButton4.classList.remove("selected");
  tipButton5.classList.remove("selected");
  tipButton1.classList.add("selected");
  customInput.classList.add("hidden");
  customButton.classList.remove("hidden");
  tip = 5;
});
tipButton2.addEventListener("click", () => {
  tipButton1.classList.remove("selected");
  tipButton3.classList.remove("selected");
  tipButton4.classList.remove("selected");
  tipButton5.classList.remove("selected");
  tipButton2.classList.add("selected");
  customInput.classList.add("hidden");
  customButton.classList.remove("hidden");
  tip = 10;
});
tipButton3.addEventListener("click", () => {
  tipButton2.classList.remove("selected");
  tipButton1.classList.remove("selected");
  tipButton4.classList.remove("selected");
  tipButton5.classList.remove("selected");
  tipButton3.classList.add("selected");
  customInput.classList.add("hidden");
  customButton.classList.remove("hidden");
  tip = 15;
});
tipButton4.addEventListener("click", () => {
  tipButton2.classList.remove("selected");
  tipButton3.classList.remove("selected");
  tipButton1.classList.remove("selected");
  tipButton5.classList.remove("selected");
  tipButton4.classList.add("selected");
  customInput.classList.add("hidden");
  customButton.classList.remove("hidden");
  tip = 25;
});
tipButton5.addEventListener("click", () => {
  tipButton2.classList.remove("selected");
  tipButton3.classList.remove("selected");
  tipButton4.classList.remove("selected");
  tipButton1.classList.remove("selected");
  tipButton5.classList.add("selected");
  customInput.classList.add("hidden");
  customButton.classList.remove("hidden");
  tip = 50;
});
let customTip = document.getElementById("#customTip").value;
if (customTip != "") {
  tip = parseInt(customTip);
}

let tipAmount = 0;

const resetButton = document.querySelector(".resetButton");
resetButton.addEventListener("click", () => {
  /* reset */
  document.querySelector("#billError").classList.add("hidden");
  document.querySelector("#peopleError").classList.add("hidden");
  document.getElementById("#inputBill").classList.remove("error");
  document.querySelector("#inputPeople").classList.remove("error");

  const billInput = document.getElementById("#inputBill").value;
  const peopleInput = document.querySelector("#inputPeople").value;

  if (billInput == "" || billInput == 0) {
    document.querySelector("#billError").classList.remove("hidden");
    document.getElementById("#inputBill").classList.add("error");
  }
  if (peopleInput == "" || peopleInput == 0) {
    document.querySelector("#peopleError").classList.remove("hidden");
    document.querySelector("#inputPeople").classList.add("error");
  }
  tipAmount = (tip * billInput) / 100 / peopleInput;
  document.getElementById("#displayTip").innerHTML = tipAmount;
  document.getElementById("#displayTotal").innerHTML = calcTotal(
    billInput,
    peopleInput,
    tipAmount
  );
});

function calcTotal(bill, people, tip) {
  let total = 0;
  tip = tip * people;
  total = (parseInt(bill) + tip) / people;
  return total;
}
