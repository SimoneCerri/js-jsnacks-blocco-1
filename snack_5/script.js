let container = [];

let i = 0;
while (i < 6)
{
    let number = prompt("Give a number");
    console.log(number);
    if ((number % 2) !== 0)
    {
        container.push(number);
    }
    else
    {
        
    }
    console.log(container);
}