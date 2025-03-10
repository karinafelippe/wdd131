myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};

// -------------- EXAMPLE
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);


// -------------- SOLUTION 1
// my for loop solution
for (const favFood in myInfo.favoriteFoods){
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = myInfo.favoriteFoods[favFood];
    document.querySelector("#favorite-foods-solution1").appendChild(favoriteFood);
}


// -------------- SOLUTION 2
// with .forEach
const foodsElement2 = document.querySelector('#favorite-foods-solution2');
function appendFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  foodsElement2.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(appendFoodItem);


// -------------- SOLUTION 3
// with .map
const foodsElement3 = document.querySelector('#favorite-foods-solution3');
function mapFoodItem(food) {
  let favoriteFood = document.createElement('li');
  favoriteFood.textContent = food;
  return favoriteFood;
}
// this function could also be written this way using a template literal:
function mapFoodItemSmall(food) {
  return `<li>${food}</li>`;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItemSmall);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement3.innerHTML = foodListElements.join('');


// -------------- SOLUTION 4
// The map example could be simplified as below:
const foodsElement = document.querySelector("#favorite-foods-solution4");
const foodListElements2 = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
// we need to flatten the array of strings into one big string. .join does this.
foodsElement.innerHTML = foodListElements2.join("");

// OR we could in fact simplify this down to one line!
document.querySelector("#favorite-foods-solution4r").innerHTML = myInfo.favoriteFoods
  .map((food) => `<li>${food}</li>`)
  .join("");


// -------------- SOLUTION 5
const foodsElement5 = document.querySelector("#favorite-foods-solution5");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
  return `<li>${food}</li>`;
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate(place) {
  return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement5.innerHTML = generateListMarkup(
  myInfo.favoriteFoods,
  foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
  myInfo.placesLived,
  placesTemplate
);



// -------------- LEARNING ACTIVITY - WDD 131
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

function appendReport(studentReport) {
    if (studentReport < LIMIT){
        return `<li>${studentReport}</li>`
    }
}

const studentReportElement = document.querySelector("#student-report");
studentReportElement.innerHTML = studentReport.map(appendReport).join("");

//   // for loop
//   for (let i = 0; i < studentReport.length; i++) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//   }

//   // while loop
//   let i = 0;
//   while (i < studentReport.length) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//     i++;
//   }

//   // forEach loop
//   studentReport.forEach(function (item) {
//     if (item < LIMIT) {
//       console.log(item);
//     }
//   });

//   // for...in loop
//   for (let i in studentReport) {
//     if (studentReport[i] < LIMIT) {
//       console.log(studentReport[i]);
//     }
//   }