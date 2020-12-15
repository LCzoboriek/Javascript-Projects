let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// This function here will generate a random number between 0 and 9 and then assign it to a variable, this will be the target number
// for the user to guess
const generateTarget = number => {
    return Math.floor(Math.random() * 10);
}

//Next up is a compare function that will determine which guess is closest to the target number
/*  
 - Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
 - Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
 - Return true if the human player wins, and false if the computer player wins.
*/

const compareGuesses = (userNumber, computerNumber, targetNumber) => {
    if (Math.abs(userNumber - targetNumber) < Math.abs(computerNumber - targetNumber)) {
        return true
    } else if 
        (Math.abs(userNumber - targetNumber) > Math.abs(computerNumber - targetNumber)) {
            return false
        }
        else {
            return true
        }
}
// This next function will update the score and will only take in one argument, which is a string either as human or computer, itll also increase the score
const updateScore = winner => {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    } else {
        return humanScore += 1;
    }
};
//This just advances the counter for rounds
const advanceRound = () => {
    currentRoundNumber += 1
}