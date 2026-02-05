// // Question no 1. Convert to Uppercase
// function toUpper(str){
//     return str.toUpperCase();
// }
// console.log(toUpper("hello"));

// // Question no 2. Convert to Lowercase
// function toLower(str){
//     return str.toLowerCase();
// }
// console.log(toLower("HELLO"));

// // Question no 3. Get String Length
// function stringLength(str){
//     return str.length;
// }
// console.log(stringLength("JavaScript"));

// // Question no 4. Get First Character
// function firstChar(str){
//     return str[0];
// }
// console.log(firstChar("Asim"));

// // Question no 5. Get Last Character
// function lastChar(str){
//     return str[str.length-1];
// }
// console.log(lastChar("Asim"));

// // Question no 6. Concatenate Strings
// function concatStr(a,b){
//     return a + " " + b;
// }
// console.log(concatStr("Hello","World"));

// // Question no 7. Check if String Includes Word
// function includesWord(str,word){
//     return str.includes(word);
// }
// console.log(includesWord("I love JS","love"));

// // Question no 8. Find Index of Character
// function findIndex(str,char){
//     return str.indexOf(char);
// }
// console.log(findIndex("banana","a"));

// // Question no 9. Replace Word
// function replaceWord(str){
//     return str.replace("bad","good");
// }
// console.log(replaceWord("This is bad"));

// // Question no 10. Trim Spaces
// function trimStr(str){
//     return str.trim();
// }
// console.log(trimStr("   hello   "));

// // Question no 11. Repeat String
// function repeatStr(str){
//     return str.repeat(3);
// }
// console.log(repeatStr("ha"));

// // Question no 12. Extract Part of String
// function sliceStr(str){
//     return str.slice(0,4);
// }
// console.log(sliceStr("JavaScript"));

// // Question no 13. Convert String to Array
// function strToArray(str){
//     return str.split(" ");
// }
// console.log(strToArray("Learn JavaScript fast"));

// // Question no 14. Convert Array to String
// function arrayToStr(arr){
//     return arr.join(" ");
// }
// console.log(arrayToStr(["Hello","JS"]));

// // Question no 15. Check Start of String
// function startsWithA(str){
//     return str.startsWith("A");
// }
// console.log(startsWithA("Asim"));

// // Question no 16. Check End of String
// function endsWithN(str){
//     return str.endsWith("n");
// }
// console.log(endsWithN("Khan"));

// // Question no 17. Count Characters
// function countChar(str,char){
//     let count = 0;
//     for(let c of str){
//         if(c === char){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countChar("banana","a"));

// // Question no 18. Reverse String
// function reverseStr(str){
//     return str.split("").reverse().join("");
// }
// console.log(reverseStr("hello"));

// // Question no 19. Check Palindrome
// function isPalindrome(str){
//     let rev = str.split("").reverse().join("");
//     return str === rev;
// }
// console.log(isPalindrome("madam"));

// // Question no 20. Remove Vowels
// function removeVowels(str){
//     return str.replace(/[aeiou]/gi,"");
// }
// console.log(removeVowels("education"));

// // Question no 21. Capitalize First Letter
// function capitalizeFirst(str){
//     return str[0].toUpperCase() + str.slice(1);
// }
// console.log(capitalizeFirst("javascript"));

// // Question no 22. Capitalize Every Word
// function capitalizeWords(str){
//     let words = str.split(" ");
//     let result = [];

//     for(let w of words){
//         result.push(w[0].toUpperCase() + w.slice(1));
//     }

//     return result.join(" ");
// }
// console.log(capitalizeWords("learn javascript now"));

// // Question no 23. Remove Duplicate Characters
// function removeDuplicates(str){
//     return [...new Set(str)].join("");
// }
// console.log(removeDuplicates("aabbcc"));

// // Question no 24. Check Anagram
// function isAnagram(a,b){
//     let s1 = a.split("").sort().join("");
//     let s2 = b.split("").sort().join("");
//     return s1 === s2;
// }
// console.log(isAnagram("listen","silent"));

// // Question no 25. Find Longest Word
// function longestWord(sentence){
//     let words = sentence.split(" ");
//     let longest = "";

//     for(let w of words){
//         if(w.length > longest.length){
//             longest = w;
//         }
//     }

//     return longest;
// }
// console.log(longestWord("I love programming"));

// // Question no 26. Find Shortest Word
// function shortestWord(sentence){
//     let words = sentence.split(" ");
//     let shortest = words[0];

//     for(let w of words){
//         if(w.length < shortest.length){
//             shortest = w;
//         }
//     }

//     return shortest;
// }
// console.log(shortestWord("I love programming"));

// // Question no 27. Count Words
// function countWords(sentence){
//     return sentence.split(" ").length;
// }
// console.log(countWords("Learn JS step by step"));

// // Question no 28. Repeat Each Character Twice
// function doubleChars(str){
//     let result = "";

//     for(let c of str){
//         result += c + c;
//     }

//     return result;
// }
// console.log(doubleChars("abc"));

// // Question no 29. Insert Dash Between Characters
// function addDash(str){
//     return str.split("").join("-");
// }
// console.log(addDash("1234"));

// // Question no 30. Remove Spaces
// function removeSpaces(str){
//     return str.replace(/\s/g,"");
// }
// console.log(removeSpaces("Hello World"));

// // Question no 31. Check Numeric String
// function isNumeric(str){
//     return !isNaN(str);
// }
// console.log(isNumeric("123"));

// // Question no 32. Convert Number to String
// function numberToString(num){
//     return num.toString();
// }
// console.log(numberToString(123));

// // Question no 33. Pad String
// function padString(str){
//     return str.padStart(5,"0");
// }
// console.log(padString("7"));

// // Question no 34. Truncate String
// function truncate(str){
//     return str.slice(0,5);
// }
// console.log(truncate("JavaScript"));

// // Question no 35. Swap Case
// function swapCase(str){
//     let result = "";

//     for(let c of str){
//         if(c === c.toUpperCase()){
//             result += c.toLowerCase();
//         }else{
//             result += c.toUpperCase();
//         }
//     }

//     return result;
// }
// console.log(swapCase("HeLLo"));

// // Question no 36. Mask String Except Last 4
// function maskString(str){
//     let masked = "";

//     for(let i=0;i<str.length-4;i++){
//         masked += "*";
//     }

//     return masked + str.slice(-4);
// }
// console.log(maskString("1234567890"));

// // Question no 37. Check Empty String
// function isEmpty(str){
//     return str.length === 0;
// }
// console.log(isEmpty(""));

// // Question no 38. Convert CSV to Array
// function csvToArray(str){
//     return str.split(",");
// }
// console.log(csvToArray("red,green,blue"));

// // Question no 39. Escape HTML
// function escapeHTML(str){
//     return str.replace("<","&lt;").replace(">","&gt;");
// }
// console.log(escapeHTML("<h1>Hi</h1>"));

// // Question no 40. Detect Palindromes in Sentence
// function palindromeWords(sentence){

//     let words = sentence.toLowerCase().split(" ");
//     let result = [];

//     for(let w of words){

//         let rev = w.split("").reverse().join("");

//         if(w === rev){
//             result.push(w);
//         }

//     }

//     return result;
// }
// console.log(palindromeWords("madam level hello noon"));
