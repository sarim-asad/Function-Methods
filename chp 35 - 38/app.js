
// //Q1
// function newDate() {
//    var now = new Date()
//    return now
// }
// document.write("<h2>Date</h2>" + "<br>")
// document.write(newDate() + "<br>") 



// // Q2
// function greet(firstName , lastName){
//     firstName = prompt( "Enter your first name")
//     lastName = prompt( "Enter your last name")
//     alert(  "Greetings!" + " " + firstName + " " + lastName)
// } 

// greet()

// // Q3
// var num1 = +prompt("Enter 1st number")
// var num2 = +prompt("Enter 2nd number")
// function addNum(num1 , num2){
//     var add = num1 + num2
//     return document.write(  "<br><br><br>"  + "Sum of " +     num1 + " and " +  num2 + " is " + add)

// }
// addNum(num1 , num2)


// // Q4
// var num1 = +prompt("Enter a 1st number")
// var num2 = +prompt("Enter a 2nd number")
// var opt = prompt("Enter any mathematical operator..")
// function myCalc(num1 , opt , num2){
//     if(opt === "+"){
//         var add = num1 + num2
//         document.write( num1 + " + " + num2 + " = "+ add) 
//     }else if(opt === "-"){
//         var sub = num1 - num2
//         document.write(num1 + " - " + num2 + " = "+ sub) 
//     }else if(opt === "*"){
//         var mul = num1 * num2
//         document.write( num1 + " x " + num2 + " = "+ mul) 
//     }else if(opt === "/"){
//         var div = num1 / num2
//         document.write( num1 + " / " + num2 + " = "+ div) 
//     }
    
// }
// var calc = myCalc(num1 , opt , num2)
// // Q5 

// function numSqr(num){
//     num = +prompt("Enter a number..")
//     var sqr = num * num
//     document.write( "<br><br><br>"  +"Square of "  + "(" + num +  ")" +  " is "  + sqr )
// }
// numSqr()
// // Q6
// function fact(){
//      inputNumber = +prompt("Enter a number..")
//      numbr = 1;
//      for(i = inputNumber ; i >= 1; i--){
//         numbr = numbr * i
//      }
//      document.write( "<br><br><br>"    +"Factorial of " + inputNumber + " " + "=" + " " + numbr) 
// }
// fact();


// // Q7
// var  start_num = +prompt("Enter starting number")
// end_num = +prompt("Enter ending number")

// function count(start_num , end_num){

//    for(i = start_num ; i <= end_num ; i++){
//          document.write(  "<br>"+ i + "<br>" + "<br>")
//    } 
   
// }

// count(start_num , end_num)

// // Q8

// var perp =  +prompt("Find Perpendicular Value") * 2;
// var hyp;
// function calculateHypo(perp) {
//     function calculateSqr(perp){
//         return perp * 2
//     } 
//     return hyp = 10 + perp;
//     calculateSqr()
// }
// document.write( "<br><br><br>"  + "Hypoteneous is:" + " " + calculateHypo(perp))

//Q9

// var height = 25;
// var area;
// function calcArea(width, height) {
//     return area = width * height;

// }
// document.write(  "<br><br><br>"   + "The Area is" + " " + calcArea(29, height) + "<br><br>");

//Q10 
//Palindrome
var palindrome = prompt("Enter A Palindrome letter");
var length = palindrome.length;
function palin_drome() {
    for (var i = 0; i < length / 2; i++) {
        if (palindrome[i] != palindrome[length - 1 - i]) {
            document.write("Its not a palindrome")
            break
        }
        else if (palindrome[i] == palindrome[length - 1 - i]) {
            document.write('Its a Palindrome <br><br><br>')
            break
        }
    }
}
palin_drome()

//Q11
function titleCase(str) {
    var arr = str.split(" ");
    var result = arr.map(
        function (val) {
            return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
        }
    )
    return result;
}

var string = titleCase("the quick brown fox").join(" ");
document.write("Example Output:" + " " + "the quick brown fox" + "<br>")
document.write("Expected Output:" + " " + string + "<br><br><br>")


//Q12
function longestString(str) {
    var arr = str.split(" ");
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        var currenItem = arr[i];
        if (currenItem.length > result.length) {
            result = arr[i]
        }
    }
    return result;
}
var string1 = longestString('Web Development Tutorial');
document.write("Example Output:" + " " + "Web Development Tutorial" + "<br>")
document.write("Expected Output:" + " " + string1 + "<br><br><br>")




//Q14
var radius = +prompt("Enter The Radius")
function calculateCircum(radius) {
    var circum = 2 * 3.14 * radius;
    return circum;
}
var cirCumference = calculateCircum(radius)
document.write( "<br><br><br>"  +"The Circumferences is:" + "  " + cirCumference+"<br>")

var radius = +prompt("Enter The Radius")
function calculateArea(radius) {
    var a = 3.14 * radius*radius;
    return a;
}
var area = calculateArea(radius)
document.write(  "<br><br><br>"  +"The Area is:" + "  " +area+"<br>")