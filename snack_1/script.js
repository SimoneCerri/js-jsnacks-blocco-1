let firstNumber = Number(prompt ("Give me one number please"));
let secondNumber = Number(prompt("Give me another number please"));

let bigger;
if (firstNumber > secondNumber) 
{
    bigger = firstNumber;
    console.log("This " + firstNumber + " is bigger" + " than " + secondNumber);
}
else
{
    bigger = secondNumber;
    console.log("This " + secondNumber + " is bigger" + " than " + firstNumber);
}
