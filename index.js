const number = Math.floor(Math.random() * 10)
let guess = null;

while (guess !== number) {
    console.log(`Number: ${number} Guess: ${guess}`);
    guess = parseFloat(prompt("Guess the number!"));
    
if (guess < number) {
    alert("the number is to low")

} if(guess > number) {
    alert("the number is too high")

    
}
else {
    console.log(`Number: ${number} Guess: ${guess}`); 
};
};
alert("You got it!")
