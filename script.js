function getUser() 
{
    let a = prompt("Rock, Paper or Scissors?")
    a=a[0].toUpperCase()+a.slice(1).toLowerCase()
    return a
}

function getComputer() 
{
    let b=Math.floor(Math.random() * 3) + 1
    switch(b)
    {
        case 1:
            return "Rock"
        case 2:
            return "Paper"
        case 3:
            return "Scissors"
    }
}

let n = 0
let c = 0
let k = 0

function Game(n, c, k) 
{
    if (n == 5) {
        console.log(`Final Score - You: ${c}, Computer: ${k}`);
        if (c > k) console.log("You win!");
        else if (k > c) console.log("Computer wins!");
        else console.log("It's a tie!");
        return;
    }
    let user = getUser()
    let comp = getComputer()
    switch (user) {
        case "Rock":
            if (comp == "Paper") k++
            if (comp == "Scissors") c++
            break
        case "Scissors":
            if (comp == "Rock") k++
            if (comp == "Paper") c++
            break
        case "Paper":
            if (comp == "Rock") c++
            if (comp == "Scissors") k++
            break
        default:
            console.log("Invalid input! Try again.");
            return Game(n, c, k);
    }
    console.log(`Round ${n + 1}: You chose ${user}, Computer chose ${comp}`);
    if(user==comp) console.log("TIE")
    console.log(`Your Score: ${c} | Computer's Score: ${k}`)
    return Game(n + 1, c, k)
}

Game(n, c, k)
