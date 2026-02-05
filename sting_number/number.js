
// // Question no 1. Round a Number
// let num1 = 4.7;
// console.log(Math.round(num1));


// // Question no 2. Ceil a Decimal
// let num2 = 5.3;
// console.log(Math.ceil(num2));



// // Question no 3. Floor a Decimal
// let num3 = 8.9;
// console.log(Math.floor(num3));



// // Question no 4. Generate a Random Number (0–1)
// function randomZeroToOne(){
//     return Math.random();
// }



// // Question no 5. Random Integer (0–9)
// let random0to9 = Math.floor(Math.random() * 10);
// console.log(random0to9);



// // Question no 6. Random Integer (1–100)
// let random1to100 = Math.floor(Math.random() * 100) + 1;
// console.log(random1to100);



// // Question no 7. Convert String to Integer
// let strInt = "42";
// let intValue = parseInt(strInt);
// console.log(intValue);



// // Question no 8. Convert String to Float
// let strFloat = "3.14159";
// let floatValue = parseFloat(strFloat);
// console.log(floatValue);



// // Question no 9. Round User Input
// function roundInput(value){

//     let number = parseFloat(value);
//     return Math.round(number);

// }



// // Question no 10. Dice Simulator
// function rollDice(){

//     return Math.floor(Math.random() * 6) + 1;

// }



// // Question no 11. Temperature Rounding
// let temp = 36.6;
// console.log(Math.round(temp));



// // Question no 12. Ceil Shopping Price
// let price = 9.25;
// console.log(Math.ceil(price));



// // Question no 13. Parse and Add
// let a = "10";
// let b = "5.5";

// let sum = parseInt(a) + parseFloat(b);
// console.log(sum);



// // Question no 14. Random Even Number (2–20)
// function randomEven(){

//     return Math.floor(Math.random() * 10) * 2 + 2;

// }



// // Question no 15. Check if Parsed Value is a Number
// function isValidNumber(input){

//     let value = parseInt(input);
//     return !isNaN(value);

// }



// // Question no 16. Round All Prices in Array
// let prices = [10.2, 5.7, 8.9];
// let roundedPrices = [];

// for(let i = 0; i < prices.length; i++){
//     roundedPrices.push(Math.round(prices[i]));
// }

// console.log(roundedPrices);



// // Question no 17. Simulate Coin Toss
// function coinToss(){

//     let toss = Math.random();

//     if(toss < 0.5){
//         return "Heads";
//     }else{
//         return "Tails";
//     }

// }



// // Question no 18. Random Integer within Range (Min–Max)
// function randomBetween(min, max){

//     return Math.floor(Math.random() * (max - min + 1)) + min;

// }

// // Question no 19. Extract Number from Text
// let text = "Total: 45.90 USD";
// let extracted = parseFloat(text);
// console.log(extracted);

// // Question no 20. Round to Nearest 0.5
// function roundToHalf(num){

//     return Math.round(num * 2) / 2;

// }
