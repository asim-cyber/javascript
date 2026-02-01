//                 Advanced JavaScript
// // Question no 1
// //   let marks = 75;

// //   if (marks < 0 || marks > 100) {
// //     console.log("Invalid Marks");
// //   } else if (marks >= 80) {
// //     console.log("Distinction");
// //   } else if (marks >= 50) {
// //     console.log("Pass");
// //   } else {
// //     console.log("Fail");
// //   }


// //   Question no 2
// //   let age = 65;
// //   let isPremium = true;

// //   if (age >= 60 && isPremium) {
// //     console.log("Senior Premium Discount");
// //   } else if (age >= 60) {
// //     console.log("Senior Discount");
// //   } else if (isPremium) {
// //     console.log("Premium Discount");
// //   } else {
// //     console.log("No Discount");
// //   }


// //   Question no 3
// //   let isLoggedIn = true;
// //   let isVerified = false;

// //   if (isLoggedIn && isVerified) {
// //     console.log("Access granted");
// //   } else if (isLoggedIn && !isVerified) {
// //     console.log("Please verify your email");
// //   } else {
// //     console.log("Please log in");
// //   }


// //   Question no 4
// //   let userAge = 25;
// //   let country = "Pakistan";
// //   let isBanned = false;

// //   if (isBanned) {
// //     console.log("You are banned");
// //   } else if (userAge < 18 || userAge > 35) {
// //     console.log("Age not eligible");
// //   } else if (country !== "Pakistan" && country !== "India") {
// //     console.log("Region not eligible");
// //   } else {
// //     console.log("Eligible for contest");
// //   }


// //  Question no 5
// //   let plan = "premium";
// //   let loggedIn = true;

// //   if (!loggedIn) {
// //     console.log("Please log in to continue");
// //   } else if (plan === "premium") {
// //     console.log("Welcome Premium User");
// //   } else if (plan === "free") {
// //     console.log("Welcome Free User");
// //   } else {
// //     console.log("Invalid subscription");
// //   }


// //   Question no 6
// //   let price = 1500;
// //   let stock = 5;
// //   let isMember = true;

// //   if (price > 1000 && stock > 0 && isMember) {
// //     console.log("Buy now with discount");
// //   } else if (stock > 0) {
// //     console.log("Buy now");
// //   } else if (stock === 0) {
// //     console.log("Out of stock");
// //   } else {
// //     console.log("Invalid product");
// //   }


// //   Question no 7
// //   let hoursWorked = 45;
// //   let isWeekend = false;

// //   if (hoursWorked > 40 && !isWeekend) {
// //     console.log("Overtime");
// //   } else if (hoursWorked > 0 && isWeekend) {
// //     console.log("Weekend work");
// //   } else if (hoursWorked > 0) {
// //     console.log("Regular hours");
// //   } else {
// //     console.log("No work");
// //   }


// //   /Question no 8
// //   let personAge = 16;
// //   let gender = "male";

// //   if (personAge >= 13 && personAge <= 19 && gender === "male") {
// //     console.log("Teen Male");
// //   } else if (personAge >= 13 && personAge <= 19 && gender === "female") {
// //     console.log("Teen Female");
// //   } else if (personAge >= 20) {
// //     console.log("Adult");
// //   } else {
// //     console.log("Child");
// //   }


// //   Question no 9
// //   let temp = 42;
// //   let humidity = 55;

// //   if (temp >= 40 && humidity >= 60) {
// //     console.log("Heatwave Alert");
// //   } else if (temp >= 40 && humidity < 60) {
// //     console.log("Hot and Dry");
// //   } else if (temp <= 20) {
// //     console.log("Cool Weather");
// //   } else {
// //     console.log("Moderate");
// //   }


// //   Question no 10
// //   let score = 85;

// //   if (score < 0 || score > 100) {
// //     console.log("Invalid Score");
// //   } else if (score >= 90) {
// //     console.log("Excellent");
// //   } else if (score >= 70) {
// //     console.log("Good");
// //   } else if (score >= 50) {
// //     console.log("Average");
// //   } else if (score >= 30) {
// //     console.log("Poor");
// //   } else {
// //     console.log("Fail");
// //   }


// //  Question no 11
// //   let login = true;
// //   let enrolled = false;
// //   let banned = false;

// //   if (!login) {
// //     console.log("Please log in");
// //   } else if (banned) {
// //     console.log("User is banned");
// //   } else if (!enrolled) {
// //     console.log("Enroll in course first");
// //   } else {
// //     console.log("Access granted");
// //   }


// //   Question no 12
// //   let speed = 110;
// //   let hasLicense = true;

// //   if (speed > 120) {
// //     console.log("License suspended");
// //   } else if (speed >= 100 && speed <= 120) {
// //     console.log("Warning");
// //   } else if (speed <= 100 && hasLicense) {
// //     console.log("Normal driving");
// //   } else {
// //     console.log("Driving without license");
// //   }


// //     Question no 13
// //   let paymentStatus = "complete";
// //   let shipped = false;

// //   if (paymentStatus === "complete" && shipped) {
// //     console.log("Order on the way");
// //   } else if (paymentStatus === "complete" && !shipped) {
// //     console.log("Preparing your order");
// //   } else if (paymentStatus === "pending") {
// //     console.log("Awaiting payment");
// //   } else {
// //     console.log("Payment failed");
// //   }


// //   Question no 14
// //   let battery = 15;
// //   let charging = false;

// //   if (battery === 100) {
// //     console.log("Fully Charged");
// //   } else if (battery < 100 && charging) {
// //     console.log("Charging...");
// //   } else if (battery < 20 && !charging) {
// //     console.log("Low Battery");
// //   } else {
// //     console.log("Battery OK");
// //   }


// //     Question no 15
// //   let browser = "Chrome";
// //   let device = "Mobile";

// //   if (browser === "Chrome" && device === "Desktop") {
// //     console.log("Full features enabled");
// //   } else if (browser === "Chrome" && device === "Mobile") {
// //     console.log("Limited mobile features");
// //   } else {
// //     console.log("Please switch to Chrome");
// //   }