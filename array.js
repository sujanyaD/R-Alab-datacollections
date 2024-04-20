// Part 1 :Refactoring code

let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
// let csvStr =" Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

//separate string using split method using \n delimeter
let rows = csvStr.split('\n');
console.log(rows);

//create new empty array 

let newData = [];
for (let i = 0; i < rows.length; i++) {
  let row = rows[i];
  // pushing array into new array.
  newData.push(rows[i])
  let words = row.split(',');
  // iterating 
  for (j = 0; j < words.length; j++) {
    //  console.log(words[j])
    console.log(words.join(` `))

  }

}
console.log(newData);

console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")

// Part 2: Expanding Functionality


let csvStr1 = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26"
//  let csvStr1 =" Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"

// split the csv string into rows.

const rows1 = csvStr1.split('\n');
//create a 2d array to store the data.
const array1 = [];

// iterate over the rows and split each into columns
for (let r = 0; r < rows1.length; r++) {
  let columns1 = rows1[r].split(',');

  // add the columns to 2d array
  array1.push(columns1);
}

console.log(array1);
console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")

// //Part 3: Transforming Data

//create an array of objects

let colheader = array1[0];
let objectArray = [];
for (let k = 1; k < array1.length; k++) {
  objectArray[k - 1] = {};
  for (let h = 0; h < array1.length - 1; h++) {
    objectArray[k - 1][colheader[h].toLowerCase()] = array1[k][h];
    //console.log(array1[k][h]);
  }
}
console.log(objectArray);

console.log("----------------------------------------------------------------")
console.log("----------------------------------------------------------------")

//Part 4: Sorting and Manipulating Data


let poppedArray=objectArray.pop();
console.log(poppedArray)
let obj={ id: "48", name: "Barry", occupation: "Runner", age: "25" }
objectArray.splice(1,0,obj)

let ob2={ id: "7", name: "Bilbo", occupation: "None", age: "111" }
objectArray.push(ob2)















