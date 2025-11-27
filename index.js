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

// const myLeads = [
//   "www.awesomelead.com",
//   "www.epiclead.com",
//   "www.greatlead.com",
// ];
const myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// console.log(ulEl);

localStorage.setItem("myLeads", "www.examplelead.com");
console.log(localStorage.getItem("myLeads"));

localStorage.setItem("myLeads2", "www.examplelead2.com");
console.log(localStorage.getItem("myLeads2"));

localStorage.clear();
console.log(localStorage);

inputBtn.addEventListener("click", function () {
  // console.log("Button clicked from addEventListener");
  // myLeads.push("www.awesomelead.com");
  myLeads.push(inputEl.value);
  // https://www.w3schools.com/jsreF/prop_text_value.asp
  // console.log(myLeads);

  inputEl.value = "";

  renderLeads();

  // renderLead();
  // inputEl.value = "";
});

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    // ulEl.textContent += myLeads[i] + " ";

    // ulEl.innerHTML = "<li>" + myLeads[i] + "</li>";
    // OR
    // 1. create element
    // 2. set text contents
    // 3. append to ul
    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);

    // listItems +=
    //   "<a href='" +
    //   myLeads[i] +
    //   "' target='_blank'><li>" +
    //   myLeads[i] +
    //   "</li></a>";

    listItems += `
      <li>
        <a href='${myLeads[i]}' target='_blank'>${myLeads[i]}</a>
      </li>
    `;
    console.log(listItems);
  }

  // ulEl.innerHTML = "<li>" + listItems + "</li>";
  ulEl.innerHTML = listItems;
}

// faster function without iterating through the list every time a item is added
// function renderLead() {
//   let listItem = "<li>" + inputEl.value + "</li>";
//   ulEl.innerHTML += listItem;
// }
