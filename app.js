//Chapter 38 to 42 

//Questuon 1
// function power(a, b) {
//     if (b === 0) {
//         // Anything raised to the power of 0 is 1
//         return 1;
//     } else if (b < 0) {
//         // If the exponent is negative, calculate the reciprocal
//         return 1 / (a * power(a, -b - 1));
//     } else {
//         // For positive exponents, calculate the result iteratively
//         let result = 1;
//         for (let i = 0; i < b; i++) {
//             result *= a;
//         }
//         return result;
//     }
// }

// // Example usage:
// const base = 2;
// const exponent = 3;
// const result = power(base, exponent);
// console.log(`${base} raised to the power of ${exponent} is ${result}`);

//Question 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Example usage:
// const year = 2024;
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }

// Question 3

// Function to calculate semiperimeter S
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }

// // Function to calculate the area of a triangle
// function calculateTriangleArea(a, b, c) {
//     const S = calculateS(a, b, c);
//     const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// // Example usage:
// const sideA = 5;
// const sideB = 6;
// const sideC = 7;

// const triangleArea = calculateTriangleArea(sideA, sideB, sideC);
// console.log(`The area of the triangle is: ${triangleArea}`);

// Question 4

// Function to calculate average
// function calculateAverage(subject1, subject2, subject3) {
//     return (subject1 + subject2 + subject3) / 3;
// }

// // Function to calculate percentage
// function calculatePercentage(subject1, subject2, subject3) {
//     const totalMarks = 300; // Assuming each subject is out of 100
//     const obtainedMarks = subject1 + subject2 + subject3;
//     return (obtainedMarks / totalMarks) * 100;
// }

// // Main function
// function mainFunction() {
//     const subject1Marks = 85;
//     const subject2Marks = 92;
//     const subject3Marks = 78;

//     const average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
//     const percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks);

//     console.log(`Marks in Subject 1: ${subject1Marks}`);
//     console.log(`Marks in Subject 2: ${subject2Marks}`);
//     console.log(`Marks in Subject 3: ${subject3Marks}`);
//     console.log(`Average Marks: ${average}`);
//     console.log(`Percentage: ${percentage}%`);
// }

// // Call the main function
// mainFunction();

// Question 5

// function customIndexOf(inputString, searchChar) {
//     for (let i = 0; i < inputString.length; i++) {
//         if (inputString[i] === searchChar) {
//             return i;
//         }
//     }
//     return -1; // Return -1 if the character is not found in the string
// }

// // Example usage:
// const str = "Hello, World!";
// const charToFind = "o";
// const index = customIndexOf(str, charToFind);

// if (index !== -1) {
//     console.log(`The character "${charToFind}" is found at index ${index}`);
// } else {
//     console.log(`The character "${charToFind}" is not found in the string.`);
// }

// Question 6

// function deleteVowels(sentence) {
//     // Define a string containing all vowels
//     const vowels = 'aeiouAEIOU';

//     // Initialize an empty string to store the result
//     let result = '';

//     // Iterate through the characters of the input sentence
//     for (let i = 0; i < sentence.length; i++) {
//         // Check if the current character is not a vowel
//         if (vowels.indexOf(sentence[i]) === -1) {
//             // If it's not a vowel, add it to the result
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// // Example usage:
// const inputSentence = "This is a sample sentence without vowels.";
// const sentenceWithoutVowels = deleteVowels(inputSentence);
// console.log(sentenceWithoutVowels);

// Question 7

// function countSuccessiveVowels(text) {
//     // Convert the input text to lowercase to handle both upper and lower case vowels
//     text = text.toLowerCase();

//     // Initialize a variable to keep track of the count of successive vowels
//     let count = 0;

//     // Iterate through the text to find successive vowels
//     for (let i = 0; i < text.length - 1; i++) {
//         let currentChar = text[i];
//         let nextChar = text[i + 1];

//         // Check if the current character and the next character are both vowels
//         if (isVowel(currentChar) && isVowel(nextChar)) {
//             count++;
//             i++; // Skip the next character since we've already counted it
//         }
//     }

//     return count;
// }

// function isVowel(char) {
//     // Use a switch statement to check if the character is a vowel
//     switch (char) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

// // Example usage:
// const sentence = "Pleases read this application and give me gratuity";
// const successiveVowelsCount = countSuccessiveVowels(sentence);
// console.log("Number of successive vowels: " + successiveVowelsCount);

// Question 8

// function convertToMeters(kilometers) {
//     return kilometers * 1000;
// }

// function convertToFeet(kilometers) {
//     const meters = convertToMeters(kilometers);
//     return meters * 3.28084;
// }

// function convertToInches(kilometers) {
//     const feet = convertToFeet(kilometers);
//     return feet * 12;
// }

// function convertToCentimeters(kilometers) {
//     const meters = convertToMeters(kilometers);
//     return meters * 100;
// }

// // Example usage:
// const distanceInKilometers = 100; // Replace with the actual distance
// const distanceInMeters = convertToMeters(distanceInKilometers);
// const distanceInFeet = convertToFeet(distanceInKilometers);
// const distanceInInches = convertToInches(distanceInKilometers);
// const distanceInCentimeters = convertToCentimeters(distanceInKilometers);

// console.log(`Distance in kilometers: ${distanceInKilometers} km`);
// console.log(`Distance in meters: ${distanceInMeters} meters`);
// console.log(`Distance in feet: ${distanceInFeet} feet`);
// console.log(`Distance in inches: ${distanceInInches} inches`);
// console.log(`Distance in centimeters: ${distanceInCentimeters} centimeters`);

// Question 9

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12.00;

//     if (hoursWorked > regularHours) {
//         const overtimeHours = hoursWorked - regularHours;
//         const overtimePay = overtimeHours * overtimeRate;
//         return overtimePay;
//     } else {
//         return 0;
//     }
// }

// // Input the number of hours worked by the employee
// const hoursWorked = parseFloat(prompt("Enter the number of hours worked:"));

// const overtimePay = calculateOvertimePay(hoursWorked);

// if (overtimePay > 0) {
//     console.log(`Overtime pay: Rs. ${overtimePay.toFixed(2)}`);
// } else {
//     console.log("No overtime pay earned.");
// }

// Question 10

// function countCurrencyNotes(amountInHundreds) {
//     const denomination100 = 100;
//     const denomination50 = 50;
//     const denomination10 = 10;

//     // Calculate the number of each denomination
//     const notes100 = Math.floor(amountInHundreds);
//     const remainingAmount = (amountInHundreds - notes100) * 100;
//     const notes50 = Math.floor(remainingAmount / denomination50);
//     const notes10 = Math.floor((remainingAmount % denomination50) / denomination10);

//     return {
//         '100 Rupees Notes': notes100,
//         '50 Rupees Notes': notes50,
//         '10 Rupees Notes': notes10,
//     };
// }

// // Input the amount to be withdrawn in hundreds
// const amountInHundreds = parseFloat(prompt("Enter the amount to be withdrawn in hundreds:"));

// if (!isNaN(amountInHundreds)) {
//     const notes = countCurrencyNotes(amountInHundreds);
//     console.log("Cashier needs to give the following currency notes:");
//     for (const denomination in notes) {
//         console.log(`${denomination}: ${notes[denomination]}`);
//     }
// } else {
//     console.log("Invalid input. Please enter a valid amount.");
// }