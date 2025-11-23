// function saveLead() {
//   console.log("Button clicked from onclick attribute");
// }

// -----------------------------------

// const inputBtn = document.getElementById("input-btn");

// inputBtn.addEventListener("click", function () {
//   console.log("Button clicked from addEventListener");
// });

// -----------------------------------

// const myLeads = [];
// const inputEl = document.getElementById("input-el");

// -----------------------------------

const myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// console.log(ulEl);

inputBtn.addEventListener("click", function () {
  console.log("Button clicked from addEventListener");
  // myLeads.push("www.awesomelead.com");
  myLeads.push(inputEl.value);
  // https://www.w3schools.com/jsreF/prop_text_value.asp
  console.log(myLeads);

  for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    // ulEl.textContent += myLeads[i] + " ";
    ulEl.innerHTML = "<li>" + myLeads[i] + "</li>";
  }
});
