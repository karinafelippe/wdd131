const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-count"));

visitsDisplay.textContent = (numVisits !== 0) ? numVisits : "This is your first visit!";

numVisits++;

localStorage.setItem("visits-count", numVisits);