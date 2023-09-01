const shoeSize = parseFloat(prompt("Enter your shoe size:"));
const birthYear = parseInt(prompt("Enter your birth year:"));
const magicNumber = ((shoeSize * 2 + 5) * 50 - birthYear) + 1766;
alert("Your magic number is: " + magicNumber);