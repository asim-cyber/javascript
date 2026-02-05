// // // Question no 1. Custom Date Formatter
// function formatDate(date){
//     const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
//     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

//     return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
// }
// console.log(formatDate(new Date()));


// // // Question no 2. Elapsed Time in Minutes
// // function minutesPassed(t1, t2){
// //     let diff = Math.abs(t2 - t1);
// //     return Math.floor(diff / (1000 * 60));
// // }
// // console.log(minutesPassed(Date.now()-600000, Date.now()));


// // // Question no 3. Age Calculator from Full Birthdate
// // function calculateAge(birthdate){
// //     let birth = new Date(birthdate);
// //     let today = new Date();

// //     let years = today.getFullYear() - birth.getFullYear();
// //     let months = today.getMonth() - birth.getMonth();
// //     let days = today.getDate() - birth.getDate();

// //     if(days < 0){
// //         months--;
// //         days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
// //     }

// //     if(months < 0){
// //         years--;
// //         months += 12;
// //     }

// //     return `${years} years ${months} months ${days} days`;
// // }
// // console.log(calculateAge("2000-05-10"));


// // // Question no 4. Get First Day of Current Month
// // function firstDay(){
// //     let today = new Date();
// //     return new Date(today.getFullYear(), today.getMonth(), 1);
// // }
// // console.log(firstDay());


// // // Question no 5. Get Last Day of Current Month
// // function lastDay(){
// //     let today = new Date();
// //     return new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
// // }
// // console.log(lastDay());


// // // Question no 6. Human-Friendly "Time Ago"
// // function timeAgo(past){
// //     let seconds = Math.floor((Date.now() - past)/1000);

// //     if(seconds < 60) return "Just now";
// //     if(seconds < 3600) return `${Math.floor(seconds/60)} minutes ago`;
// //     if(seconds < 86400) return `${Math.floor(seconds/3600)} hours ago`;
// //     return `${Math.floor(seconds/86400)} days ago`;
// // }
// // console.log(timeAgo(Date.now()-7200000));


// // // Question no 7. Countdown Timer
// // function countdown(futureDate){
// //     let diff = futureDate - new Date();

// //     let days = Math.floor(diff/(1000*60*60*24));
// //     let hours = Math.floor((diff/(1000*60*60))%24);
// //     let minutes = Math.floor((diff/(1000*60))%60);
// //     let seconds = Math.floor((diff/1000)%60);

// //     return `${days}d ${hours}h ${minutes}m ${seconds}s`;
// // }
// // console.log(countdown(new Date("2027-01-01")));


// // // Question no 8. Time Difference in Hours and Minutes
// // function timeDiff(d1, d2){
// //     let diff = Math.abs(d2-d1);
// //     let hours = Math.floor(diff/(1000*60*60));
// //     let minutes = Math.floor((diff/(1000*60))%60);
// //     return `${hours} hours ${minutes} minutes`;
// // }
// // console.log(timeDiff(new Date(), new Date(Date.now()+12500000)));


// // // Question no 9. Check if Date is Weekend or Weekday
// // function checkWeekend(dateStr){
// //     let day = new Date(dateStr).getDay();
// //     return (day===0 || day===6) ? "Weekend" : "Weekday";
// // }
// // console.log(checkWeekend("2026-02-07"));


// // // Question no 10. Compare Birthdays
// // function compareBirthdays(d1, d2){
// //     let date1 = new Date(d1);
// //     let date2 = new Date(d2);

// //     let diff = Math.abs(date1-date2);
// //     let years = Math.floor(diff/(1000*60*60*24*365));

// //     return date1 < date2 ? `Person 1 is older by ${years} years` : `Person 2 is older by ${years} years`;
// // }
// // console.log(compareBirthdays("1998-01-01","2002-01-01"));


// // // Question no 11. Recurring Alarm Checker
// // function alarmCheck(day, time){
// //     let now = new Date();
// //     let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// //     let currentDay = days[now.getDay()];
// //     let currentTime = now.toTimeString().slice(0,5);

// //     return (currentDay===day && currentTime===time);
// // }
// // console.log(alarmCheck("Thursday","08:00"));


// // // Question no 12. Date Validator
// // function isValidDate(dateStr){
// //     return !isNaN(new Date(dateStr));
// // }
// // console.log(isValidDate("2025-13-01"));


// // // Question no 13. Custom Relative Date Formatter
// // function relativeDate(date){
// //     let now = new Date();
// //     let diffDays = Math.floor((now-date)/(1000*60*60*24));

// //     if(diffDays===0) return `Today at ${date.toLocaleTimeString()}`;
// //     if(diffDays===1) return `Yesterday at ${date.toLocaleTimeString()}`;
// //     return `${diffDays} days ago`;
// // }
// // console.log(relativeDate(new Date(Date.now()-86400000)));


// // // Question no 14. Generate Dates for the Next 7 Days
// // function next7Days(){
// //     let arr = [];
// //     let today = new Date();

// //     for(let i=0;i<7;i++){
// //         let d = new Date(today);
// //         d.setDate(today.getDate()+i);
// //         arr.push(`${String(d.getDate()).padStart(2,'0')}-${String(d.getMonth()+1).padStart(2,'0')}-${d.getFullYear()}`);
// //     }
// //     return arr;
// // }
// // console.log(next7Days());


// // // Question no 15. Time Slot Generator
// // function timeSlots(){
// //     let slots=[];
// //     for(let h=9; h<17; h++){
// //         slots.push(`${h}:00`);
// //         slots.push(`${h}:30`);
// //     }
// //     return slots;
// // }
// // console.log(timeSlots());


// // // Question no 16. Monthly Calendar Dates
// // function monthDates(){
// //     let today = new Date();
// //     let last = new Date(today.getFullYear(), today.getMonth()+1,0).getDate();

// //     let arr=[];
// //     for(let i=1;i<=last;i++){
// //         arr.push(`${String(i).padStart(2,'0')}-${String(today.getMonth()+1).padStart(2,'0')}-${today.getFullYear()}`);
// //     }
// //     return arr;
// // }
// // console.log(monthDates());


// // // Question no 17. Convert UTC Date to Local Time
// // function utcToLocal(utcStr){
// //     return new Date(utcStr).toLocaleString();
// // }
// // console.log(utcToLocal("2025-08-09T12:00:00Z"));


// // // Question no 18. Measure Function Execution Time
// // function measure(){
// //     let start = Date.now();

// //     for(let i=0;i<1000000;i++){}

// //     let end = Date.now();
// //     return `${end-start} ms`;
// // }
// // console.log(measure());


// // // Question no 19. Format Date as ISO String Without Time
// function isoDate(){
//     let d = new Date();
//     return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
// }
// console.log(isoDate());


// // // Question no 20. Get the Number of Days in Any Month
// // function daysInMonth(month, year){
// //     return new Date(year, month, 0).getDate();
// // }
// // console.log(daysInMonth(2,2024)); // leap year
