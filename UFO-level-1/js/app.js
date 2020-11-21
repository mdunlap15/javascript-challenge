// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each sighting
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
});

// Step 2:  Use d3 to append one table row `tr` for each sighting object
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each sighting value
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");

  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
  });
});

// // Step 4: Use d3 to update each cell's text with sighting values
data.forEach(function(ufoSightings) {
  console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

data.forEach((ufoSightings) => {
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(date => date.datetime === inputValue);

  console.log(filteredData);
};
