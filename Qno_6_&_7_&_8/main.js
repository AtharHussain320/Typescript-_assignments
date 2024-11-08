6.; //Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
// Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name
// is displayed. Then print the name after striping the white spaces.
// Step 1: Store the name with whitespace characters at the beginning and end.
var personName = "\t\n   John Doe   \n\t";
// Step 2: Print the name with the whitespace characters displayed.
console.log("Original name with whitespaces:");
console.log("\"".concat(personName, "\""));
// Step 3: Strip the whitespace characters using the trim() method.
var strippedName = personName.trim();
// Step 4: Print the name after stripping the whitespaces.
console.log("Name after stripping whitespaces");
console.log(strippedName);
7.; //Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose
// your operations in print statements to see the results.
var operations = ["addition", "subtraction", "multiplication", "division"];
//addition of operators 
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(2, 6)); //8
//Subtraction of operator
var sub1 = 10;
var sub2 = 2;
var res = sub1 - sub2;
console.log(res);
//multiplication of operators
var multiply = function (dig1, dig2) { return dig1 * dig2; };
console.log(multiply(2, 4));
//division of operators
var div1 = 16;
var div2 = 2;
var resul = div1 / div2;
console.log(resul);
//8.	You should create four lines that look like this:
//console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
console.log(5 + 3);
console.log(16 - 8);
console.log(2 * 2 * 2);
console.log(16 / 2);
