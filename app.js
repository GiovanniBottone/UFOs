// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 - With this code we declare a variable, tbody -  and use d3.select to tell js to look for the <tbody> tags in the HTML
var tbody = d3.select("tbody");

function buildTable(data) {
    // First, clear out any existing data 
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    // notice the 'fat arrow' which is a cleaner way to write a forEach loop
    data.forEach((dataRow) => {
        // append a row to the table body
        // this tells js to find the <tbody> tag within the html and add a table row "tr"
        let row = tbody.append("tr");

        //loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            // create a variable to append data to a table
            let cell = row.append("td");
            //add the values
            // when we chain .text(val) to the variable, we are extracting only the text of the value
            cell.text(val);

// With this function buildTable we have:
// looped through each object in the array - data.forEach((dataRow) =>) {
// Appended a row to the HTML table     -  let row = tbody.append("tr")
// Added each value from the object into a cell.    - object.values(dataRow).forEach((val) => {
        });
    });
  }