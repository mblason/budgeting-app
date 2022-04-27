// UBICAR ELEMENTOS Y NOMBRARLOS //

// Total Balance //
const balanceElement = document.getElementById("balance");

// Entry list //
const entryListElements = document.querySelector("section ul");

// Value Input //
const valueInputElement = document.querySelector("input");

// Income - Expense Select //
const selectElement = document.querySelector("select");

// Addittion button //
const addittionButtonElement = document.querySelector("footer button");

// CREAR UNA FUNCIÓN: para que se agregue una entrada nueva //

function addEntry(amount, operation) {
  const listEntry = document.createElement("li");
  listEntry.classList.add(operation);

  const descriptionEntry = document.createElement("em");
  descriptionEntry.innerText = "Description";

  const operatorEntry = document.createElement("span");
  if (operation === "income") {
    operatorEntry.innerText = "+";
  } else if (operation === "expense") {
    operatorEntry.innerText = "-";
  }

  const valueEntry = document.createElement("strong");
  valueEntry.innerText = amount + "$";

  entryListElements.appendChild(listEntry);
  listEntry.appendChild(descriptionEntry);
  listEntry.appendChild(operatorEntry);
  listEntry.appendChild(valueEntry);
}

// CREAR UNA FUNCIÓN: para actualizar el balance //

function updateBalance() {
  let total = 0;

  for (let item of entryListElements.children) {
    const valueItem = item.querySelector("strong");
    const value = parseInt(valueItem.innerText);

    const operatorItem = item.querySelector("span");
    const operator = operatorItem.innerText;

    if (operator === "+") {
      total += value;
    } else if (operator === "-") {
      total -= value;
    }

    balanceElement.innerText = total + "$";
  }
}

// CREAR UNA FUNCIÓN: para cuando se haga click en el botón se ejecuten las otras funciones ya declaradas //

addittionButtonElement.onclick = function () {
  const amount = valueInputElement.value;
  const operation = selectElement.value;

  addEntry(amount, operation);

  valueInputElement.value = "";

  updateBalance();
};
