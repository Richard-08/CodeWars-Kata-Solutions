/* Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

    If the user tries to guess WRONG more than the limit the function should throw an error
    If the user guess wrong it should lose a life and return false (if you guess correctly you shouldn't remove a life)
    If the user guess right it should return true

Can you finish the game so all the rules are met?
 */

///////////////////// Solution //////////////////////

class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    guess(n) {
      if(this.lives === 0) {return error}
      if(this.number !== n) {
        this.lives = this.lives - 1;
        return false;
      } else {return true};
    }
  }