let firstString = prompt("Can you give me one word please ?");
let secondString = prompt("Can you give a second word ?");

if (firstString.length < secondString.length)
{
    console.log(firstString);
    console.log(secondString);
}
else
{
    console.log(secondString);
    console.log(firstString);
}