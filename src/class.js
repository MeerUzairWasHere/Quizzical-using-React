import { decode } from 'he' // Importing the decode function from the 'he' library
import { v4 as uuidv4 } from 'uuid' // Importing the uuidv4 function from the 'uuid' library

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

class Quiz {
    constructor(data){
        // Assign a unique id using uuidv4 to each quiz object
        this.id = uuidv4()

        // Use decode function from 'he' library to decode HTML encoded text
        this.question = decode(data.question)

        // Map over the array of incorrect answers and decode them
        this.incorrectAnswers = data.incorrect_answers.map(answer => decode(answer))

        // Decode the correct answer
        this.correctAnswer = decode(data.correct_answer)

        // Combine the array of incorrect and correct answers and shuffle them
        this.allAnswers = shuffle(this.incorrectAnswers.concat(this.correctAnswer))

        // Set selectedAnswer property to an empty string
        this.selectedAnswer = ''
    }
}

export default Quiz // Exporting the Quiz class
