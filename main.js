
console.log("=============================JS 1=============================");

// write a number and print it

// var num = window.prompt ("enter a number");
// console.log(num);



// numebr devided by 3,4


// var num = window.prompt ("enter a number");
// if(num%3==0 & num%4==0){
//     console.log("yes");
// }else{
//     console.log("no");
//   }




// 2 integrs and print the max 


// var num1 = window.prompt ("enter a number one");
// var num2 = window.prompt ("enter a number two");
// if(num1>num2){
//     console.log(num1);
// }else{
//     console.log(num2);
// }



// negative or not


// var num = window.prompt ("enter a number");
// if(num>0){
//     console.log("positive");
// }else{
//     console.log("negative");
// }



// max&min number in 3 numbers 
// var num1 = window.prompt ("enter a number 1");
// var num2 = window.prompt ("enter a number 2");
// var num3 = window.prompt ("enter a number 3");
// if(num1>num2 & num2>num3){
//     console.log("max num =",num1);
//     console.log("min num =",num3);
// }else if(num1>num3 & num3>num2){
//     console.log("max num =",num1);
//     console.log("min num =",num2);
// }else if(num2>num1 & num1>num3){
//     console.log("max num =",num2);
//     console.log("min num =",num3);
// }else if(num2>num3 & num3>num1){
//     console.log("max num =",num2);
//     console.log("min num =",num1);
// }else if(num3>num2 & num2>num1){
//     console.log("max num =",num3);
//     console.log("min num =",num1);
// }else if(num3>num1 & num1>num2){
//     console.log("max num =",num3);
//     console.log("min num =",num2);
// }



// number oven or odd

// var num = window.prompt ("enter a number ");
// if(num%2==0){
//     console.log("even");
// }else{
//     console.log("odd");
// }





// var char = window.prompt ("enter a letter");

// if(char == 'a'  char == 'e'  char == 'i'  char == 'o'  char == 'u'){
//     console.log("vowel");
// }else{
//     console.log("consonant");
// }



// from 1 to N

// var num = window.prompt ("enter a number");

// for(i=1;i<=num;i=i+1 ) 
// {
//   console.log(i)
// }




// multi of number

// var num = window.prompt ("enter a number");

 
// for (x=num; x <=num*12; x++){
//     if( x % num == 0 ){
//         console.log(x);
//     }
// }




// var num = window.prompt ("enter a number");

 
// for (x=1; x <=num; x++){
//     if( x % 2 == 0 ){
//         console.log(x);
//     }
// }



// power of number

// var num1 = window.prompt ("enter a number");
// var num2 = window.prompt ("enter a power");

   
   
//   {
    
//     counter = 1;
//     for(i = 1;i <= num2;++i) 
//     counter =counter * num1;
//     console.log(counter);
//  }



// var sub1 = window.prompt ("enter ur grade");
// var sub2 = window.prompt ("enter ur grade");
// var sub3 = window.prompt ("enter ur grade");
// var sub4 = window.prompt ("enter ur grade");
// var sub5 = window.prompt ("enter ur grade");
// var total = +sub1+ +sub2+ +sub3+ +sub4+ +sub5;
// var average = total/5;
// var percantage = average;
// console.log("total marks = ",total);
// console.log("average marks = ",average);
// console.log("percantage = ",percantage);





// var month = window.prompt ("enter a month")
// if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
//     console.log("days in month: 31");
// }else if (month==2||month==4||month==7||month==9||month==11 ){
//     console.log("days in month: 30");
// }else{
//     console.log("invalid number");
// }



// ******************************** Using switch case*******************************
//15 -Write a program to print total number of days in month
// var monthNumber = window.prompt("Enter month number");
// switch (monthNumber) {
//   case "1":
//   case "3":
//   case "5":
//   case "7":
//   case "8":
//   case "10":
//   case "12":
//     window.alert("31");
//     break;
//   case "2":
//     window.alert("28 days in a common year and 29 days in leap years");
//     break;
//   case "4":
//   case "6":
//   case "9":
//   case "11":
//     window.alert("30");
//     break;
// }

//16-Write a program to check whether an alphabet is vowel or consonant

// var char = window.prompt("Enter your char");
// if(char=='a' || char=='e' || char =='o' ||char=='u'||char=='i'){
//     window.alert("vowel");
// }else {
//     window.alert("consonant");
// }

//17-Write a program to find maximum between two numbers

// var number1 = window.prompt("Enter first number");
// var number2 = window.prompt("Enter sec number");

// switch (number1 > number2) {
//   case true:
//     window.alert(number1);
//     break;
//   case false:
//     window.alert(number2);
//     break;
// }

//18-Write a program to check whether a number is even or odd
// var number = window.prompt("Enter number");
// switch (number % 2 == 0) {
//   case true:
//     window.alert("Even");
//     break;
//   case false:
//     window.alert("odd");
//     break;
// }

//19-Write a program to check whether a number is positive or negative or zero
// var number = Number(window.prompt("Enter number"));
// switch (number > 0) {
//   case true:
//     window.alert("Number is positive");
//     break;
//   case false:
//     switch (number == 0) {
//       case true:
//         window.alert("Zero");
//         break;
//       case false:
//         window.alert("negative");
//         break;
//     }
//     break;
// }

//20- Write a program to create Simple Calculator
// var number1 = Number(window.prompt("Enter first number"));
// var sign = window.prompt("Enter your sign");
// var number2 = Number(window.prompt("Enter sec number"));

// switch (sign) {
//   case "+":
//     window.alert(number1 + number2);
//     break;
//   case "-":
//     window.alert(number1 - number2);
//     break;
//   case "*":
//     window.alert(number1 * number2);
//     break;
//   case "/":
//     window.alert(number1 / number2);
//     break;
// }
