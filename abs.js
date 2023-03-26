// function Person()
// {
// throw new Error("The Person is an abstract constructor function and can't be instantiated.")
// }
// Person.prototype.personName = "Venkat";
// Person.prototype.age = 30;
// Person.prototype.getDetails = function() {
// return `Person Name: ${this.personName}, Age: ${this.age}`;
// };
// //child constructor function
// function Teacher()
// {
// }
// Teacher.prototype = Object.create(Person.prototype); //inheritance
// // Teacher.prototype.mainSubject = "Medical Sciences";
// Teacher.prototype.getDetails = function() {
// return `${this.__proto__.getDetails()}, Main subject:
// ${this.mainSubject}`; //optionally invoke the parent method
// };
// //new object of child function
// var teacher1 = new Teacher();
// console.log(teacher1.getDetails());


// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// console.log(palindrome("noon"))
// var isPalindrome = function (string) {
//     if (string == string.split('').reverse().join('')) {
//         console.log(string + ' is palindrome.');
//     }
//     else {
//         console.log(string + ' is not palindrome.');
//     }
// }
// console.log(isPalindrome ("nodn"))
// var string = "Welcome to this Javascript Guide!";
// var separator = ""
// // Output becomes !ediuG tpircsavaJ siht ot emocleW
// var reverseEntireSentence = reverseBySeparator(string, "");

// // Output becomes emocleW ot siht tpircsavaJ !ediuG
// var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// console.log(reverseBySeparator(string, separator))
// var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
// var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// // arrayList = []; // Empty the array
// console.log(anotherArrayList);
// function isInt(num) {
//     return num % 1 === 0;
//   }
  
//   console.log(isInt(4)); // true
//   console.log(isInt(12.2)); // false
//   console.log(isInt(0.3)); // false

// function duplicate(arr){
// return arr.concat(arr)
// }
// console.log(duplicate([1,2,3,4]))

// 3
// (function() {
//     var a = b = 5;
//   })();
  
//   console.log(b);

const person = [
    {
    name: "vinod",
    age:22
    },
    {
     name:"klkl",
     age:44
    },
    {
        name:"klkl",
        age:32
       }
   
]
// const newperson=person.map(({name, age})=>{
//      return `${name} : ${age}`
// })
// console.log(newperson)
    
    // {
    //     name:ksfls,
    //     age:55
    // }
//  const newperson = person.map(myfunction)
//   function myfunction({name, age}){
//     return `${name} : ${age}`;
//   }
const newperson = person.map(myfunction)
 function myfunction({age}){
    return age <38
 }
  console.log(newperson)
