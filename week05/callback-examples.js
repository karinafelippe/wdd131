/* --------------- Js Series #13 Array 
            Callback Methods & Arrow Functions --------------- */

console.log("\nExample 1");




/* --------------- W05 Learning Activity
                JavaScript Callback Functions --------------- */
console.log("Activity Example 1");

function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    console.log('The result is: ' + result);
}

calculate(2, 3, displayResult);

let now = new Date();
console.log("\nActivity Example 2", `(${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})`);

function fetchData(callback) {
    // using setTimeout to simulate fetching data from a server
    setTimeout(() => {
        // This calls the 'callback' function and passes data to it.
        callback('Data has been fetched');
    }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
    now = new Date();
    console.log("Data received:", data, `(${now.getHours()}:${now.getMinutes()}:${now.getSeconds()})`);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);