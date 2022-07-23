console.log("Fuck human beings");
let myName='McA'; // use keyword let for varaibles in Javascript
const favnum=7; //read-only value
//when you are certain you won't assign another value to it
//you can however, reassign value to elements of an array that is declared
//using const s=[2,3,4];
let isKind=true;
let age=21; //number literal
let firstName; //undefined
firstName='shinrann';
let lastName=null; //like when the user does not select any color
console.log(myName);
console.log(favnum);
let me={
    myName:'McA',
    age:21
};
//ways to access object properties:
//dot notation
me.myName='xrl';
//bracket notation
me['age']=99;
console.log(me);
let selectedNames=['diandian','ruru'];
selectedNames[2]=17;
console.log(selectedNames);
console.log(selectedNames.length);

function askMost(characteristics){
    console.log(characteristics);
}
askMost('hypocrisy');


//start of 3-hour javascript course
var a=2;
a=a+10;
console.log(a);
// escape a " by adding a \ before it
// or use ' such as 
var str='who the fuck are "you"';
console.log(str);
//nested array
var array1=[["whoAreYou",2],["IAmMe",7]];
array1.push(["noNumber"]);
console.log(array1);
//use .pop to retrieve and remove the last element
//use .shift to retrieve and remove the first element
//use .unshift to add element to the first position

//if no var keyword for a local variable, it becomes a global variable automatically
//global variable will be override by local variable if same name

//if we use the strict equality operator: ===, then 10!="10"

var i=0;
var hahaArray=[];
while(i<6){
    hahaArray.push(i);
    i++;
}
for(var j=0;j<6;j++){
    hahaArray.push(Math.floor(Math.random()*10));
}
console.log(hahaArray);
//parseInt(str)

function convertToBase10(str){
    return parseInt(str,2);
}
console.log(convertToBase10("100111"));

//var vs let: ppl use let when they don't want a variable to
//be able to be declared twice/ when they only want it to be 
//accessible within the scope they want

//for example, if it is defined in a if-else block, u won't be able to 
//access it outside it, but var on the other hand, allow you to access
//it globally

//use object.freeze(objectName) when you don't want am object 
//to be able to be changed

//arrow functions
var myConcat =(arr1,arr2)=>arr1.concat(arr2);
console.log(myConcat([1,3,5],[2,4,6]));
//default parameters
//rest operator
const sum=(function(){
    return function sum2(...args){
        return args.reduce((a,b)=>a+b,0);
    };
})();
console.log(sum(1,2,3,4,5,6));

//spread operator: so that the array equals to the contents of an array
//instead of the array itself
const again1=[1,2,3,4,5];
let again2;
(function(){
    again2=[...again1];
    again1[2]="who are you"
})();
console.log(again1);
console.log(again2);
//destructing assignmenr
const [,,x,y]=[0,1,2,3];
console.log(x,y);

const original=[0,1,2];
function removeFirstElement(list){
    const[,...arr]=list;
    return arr;
}
const arr=removeFirstElement(original);
console.log(arr);

const personInfo={
    name:"laglesas",
    age:21
};
const greeting=`hello, I am ${personInfo.name}! and ${personInfo.age} years old`;
console.log(greeting);

//simple fields
//create an object
const createPerson=(name,age,gender)=>({name,age,gender});
console.log(createPerson("gratimate",77,"non-binary"));

class SpaceShuttle{
    constructor(planet){
        this.planet=planet;
    }
}
var newobject=new SpaceShuttle('mars');
console.log(newobject.planet);

//getter and setter

//export and import
//use * to import everything from a file
//import * as objectName(you are creating a new object) from fileName;