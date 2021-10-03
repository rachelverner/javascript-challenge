// from data.js
var tableData = data;

// YOUR CODE HERE!
//Using the UFO dataset provided in the form of an array of JavaScript objects, 
//write code that appends a table to your web page and then adds new rows of data for each UFO sighting.
//Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
//Use a date form in your HTML document and write JavaScript code that will listen for events,
//and search through the date/time column to find rows that match user input.

// Use D3 to select the table
var table = d3.select("table");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Use d3 to create striped table (doesn't seem to be working though)
var tClass = d3.select("class", "table table-striped");
table.attr("class", "table table-striped");

//build table
data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


// filter function on click
var submit = d3.select("#filter-btn");
submit.on("click", function() {

    // Preventing the page from refreshing
    d3.event.preventDefault();

    // clear the table
    d3.select("tbody").selectAll("*").remove();

    var inputElement = d3.select("#datetime");

     // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // matching the input value with data
    var filteredData = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredData);
    // inputs the filtered data into the table
    filteredData.forEach(function(obj){
        var rows = tbody.append("tr");
        Object.keys(obj).forEach(function(key){
            rows.append("td").text(obj[key]);
        })
      })
});