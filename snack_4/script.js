const invitedByGatsby = ["pippo", "pluto", "paperino"]; //still do it for Fabio happyness

let guest = prompt("Let me know your name bruh");
for (let index = 0; index < invitedByGatsby.length; index++) {
    const element = invitedByGatsby[index];

    if(guest === element)
    {
        console.log("Welcome to the big party MAFRIENDO");
        break;
    }
    else
    {
        console.log("I'm sorry you are not invited by the GreatGatsby");
    }
}