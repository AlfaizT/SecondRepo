var principleAmount = 2000000;
var rateOfIntrest = 8.5;
var months = 120;

console.log("this is a principle amount",principleAmount);
console.log("this is rate of intrest for annualy ",rateOfIntrest ,'%');
console.log("This is a month of Emi calculation ",months);
 function calculateEmi(){
let principleCalculation =(principleAmount*rateOfIntrest*(1+rateOfIntrest)^months);
console.log("Calculation of home loan",+ principleCalculation);

let interestCalculation =([(1+rateOfIntrest)^months]-1);
console.log("interset of loan ",+interestCalculation);

var calculateTotalInterest =(principleCalculation/interestCalculation);
console.log("total annual calculation",calculateTotalInterest);

let monthlyIntrest = (calculateTotalInterest/months);
console.log("monthly interest",monthlyIntrest);

var totalAmount =(principleAmount+calculateTotalInterest);
console.log("total amount",totalAmount);

let monthlyEmi =(totalAmount/months);
console.log ("monthly emi amount is ",monthlyEmi);
 }

 calculateEmi(); 