/*console.log('Hi ');
// variables
let x=2;
let y=3
let z= x+y;
let d = x-y;
let p=x*y;
let q=x/y;
/*console.log(z);
console.log(d);
console.log(p);
console.log(q);*/
/*num1 = 5;
num2 = "5";
if(num1===num2){
    console.log("yes");
}else{
    console.log("no");
}
//object
p={ age:{yrs:38,months:6} , name:"P"}

p.name="Princy"
//console.log(p.name)
arr=[1,2]
//console.log(arr.length)
arr.first = 20
//console.log(arr[0])

arrObjects=[{n1:2,n2:2},{m1:4,m2:6}]
//console.log(arrObjects[1].m1)


//function
function sq(a){
    s= a*a
    return s
}

squ = sq(5);
//console.log(squ);

greet("Princy ")
function greet(m){
    console.log("Hello "+ m)
    //document.write("Hello ",m,"\n")
    /*document.write("Hello ",m)
    document.write("<br>")
}*/

/*function convert(c){
    f= (c*(9/5))+32
    return f
}
f= convert(100)
//console.log(f);*/
//----------------------------------------------
// val=20;
// (val<10)?Result="pass":Result="fail"
// console.log(Result)

//array1 = ['a','b','c','d','e']
//array1.forEach(element => {
//    console.log(element)
//});
// for (x of array1) {
//     console.log(x)
// }
// person= {
//     name:"P",
//     age:10
// }
// j=0;
// while (j<array1.length) {
//     console.log(array1[j])
//     j++;
// }
//console.log("Enter the number:")
//a = window.prompt("Enter the first number:")
//console.log("First number is: ")


// Total of squares
//----------------------------------
myArray = [4,2,3,4,5,0,6];
var totalOfSquares = 0;
myArray.forEach(element => {
    totalOfSquares = totalOfSquares + (element * element);
});
console.log("Total of squares of the array = ", totalOfSquares);


// Whether Prime or not
//----------------------------------
var flag = 0;
for (let index = 2; index <= (myArray[0]/2); index++) {
    valMode = myArray[0]%index;
    if(valMode == 0){
        flag = 1;
        break;
    } 
}
if(flag == 1){
    console.log("First number of the array,",myArray[0],", is not prime.");
}else{
    console.log("First number of the array,",myArray[0],", is prime.");   
}