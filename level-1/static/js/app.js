// from data.js
var tableData = data;
var tbody = d3.select("tbody");
console.log(tbody);

// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO sightings data from data.js
console.log(data);
//=====================================================//
//+++=============================================++++//

//with the the Arrow Functions refactor
data.forEach((sightingsReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingsReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// selecting the button  and form 
var button = d3.select("#filter-btn");
var form = d3.select("#form");
// event handler
button.on("click", runEnter);
function runEnter() {
  //delete the current info and select input element to get raw HTML
  d3.selectAll("tbody").html("")  
  var inputElement = d3.select("#datetime");
  // property value for the element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  // check sightings by date 
  var filteredData = data.filter(d => d.datetime === inputValue);
  console.log(filteredData);
//finish with the new table
  filteredData.forEach((selections) => {
    var row = tbody.append("tr");
    Object.entries(selections).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};
console.log(tableData) //complete 
