//--------------------------------------------------------------------------------------

myArray = [1,2,1,1,5,0,0,0,0];

// Whether Prime or not
//--------------------------------------------------------------------------------------
var flag = 0;
for (let index = 2; index <= (myArray[0]/2); index++) {
    valMode = myArray[0]%index;
    if(valMode == 0){
        flag = 1;
        break;
    } 
}
if(myArray[0]==0 || myArray[0]==1){
    console.log("First number of the array,",myArray[0],", is neither prime nor composite.");
}else if(flag == 1){
    console.log("First number of the array,",myArray[0],", is not prime, it is composite.");
}else{
    console.log("First number of the array,",myArray[0],", is prime.");   
}
//--------------------------------------------------------------------------------------

// Most frequent item
//--------------------------------------------------------------------------------------

flagArray = [];
//flagArray.fill(0);
for (f = 0; f < myArray.length; f++) {
    flagArray[f] = 1;   
}

var largest = 1;
var largestIndex = 0;
for (i = 0; i < myArray.length; i++) {
    element = myArray[i];
    for (j = i+1; j < myArray.length; j++) {
        if(myArray[j]==element){
            flagArray[i] = flagArray[i] + 1;
        }
        //console.log("FlagArray",i," = ",flagArray[i]);
    }
    if(flagArray[i]>largest){
        largest = flagArray[i];
        largestIndex = i;
        //console.log("largest = ",largest);
    }  
}
console.log("Most frequent item of the array is ",myArray[largestIndex], "and the frequency of occurrence is ",largest);
//--------------------------------------------------------------------------------------


// Odd or Even
//----------------------------------
arrayOfNumbers = [3,5,7,1,6,9,4,65,87,98,11,23,12,34,56];
for (let index = 0; index < 15; index++) {
    if(arrayOfNumbers[index]%2 == 0){
        console.log(arrayOfNumbers[index]," is even.");
    }else{
        console.log(arrayOfNumbers[index]," is odd.");
    }  
}
//--------------------------------------------------------------------------------------


// Sum of squares
//--------------------------------------------------------------------------------------

var totalOfSquares = 0;
myArray.forEach(element => {
    totalOfSquares = totalOfSquares + (element * element);
});
console.log("Total of squares of the array = ", totalOfSquares);
//--------------------------------------------------------------------------------------