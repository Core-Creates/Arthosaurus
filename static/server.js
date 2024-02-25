// let reader = new FileReader();
// let rawData = new File([], 'feeds_20240224T233919-0800.csv');
let spawn = require("child_process").spawn;
const speechrecognition = spawn('python', ['../speechrecognition.py']);
const PythonShell = require('python-shell').PythonShell;

PythonShell.run('my_script.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});
// Read the CSV file
// const csvData = reader.readAsText(rawData, 'utf-8');

// Split the CSV data into rows
// const colums = csvData.split('\n');

// // Initialize an empty array to store the parsed data
// const dataArray = [];

// // Iterate over each row
// for (let i = 0; i < 11; i++) {
//   // Split the row into individual values
//   const values = colums[i].split(',');

//   // Add the values to the data array
//   dataArray.push(values);
// }

console.log(speechrecognition);
