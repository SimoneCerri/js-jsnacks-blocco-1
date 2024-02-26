let number = Number(prompt("Let me know a number with 4 cifre"));

let sum = 0;

while (number)
{
    sum += number % 10;
    number = Math.floor(number / 10);
}

console.log(sum);