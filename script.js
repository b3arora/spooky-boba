//changing the text within the textbook each 5 second
const textContent = [
  "i'm your spooky tour guide",
  "are you ready <br> for an eerie adventure?",
  "answer these riddles!",
  "...or else",
  "collect candy <br> by answering correctly!",
  "feed it to the skeleton to <br> be let out of the manor",
  "you need 10 pieces <br> to escape...",
  "good luck, buddy!",
];
const greetings = [
  "i'm zombie girl...",
  "i'm zombie girl...",
  "UGH (¬_¬) ok...<br> answer these <br> riddles or whatever...",
  "...no need to use 'a' or 'an <br> in your answers...",
  "...but <br> you'll have to use 'and' in one",
  "no capital letters...",
  "...so lame...",
  "...wait",
  "who are you anyway..?",
];

const riddles = [
  "i am always hungry and must <br> be fed. if i lick your finger, it's <br> sure to turn red. what am i?",
  "i don't have eyes, but once i did see. once i had thoughts, but now i am empty. what am i?",
  "i creep up yours stairs, down the hallways behind you. wherever you are, i'm there beside you. what am i?",
  "look in my face, i am somebody. look in my back, i am nobody. what am i?",
  "i come in the night without being asked, and leave in the morning without being taken. what am i?",
  "you can hear me, feel me and know that i'm there. but you'll never find me...what am i?",
  "which two letters <br> can you spell candy with?",
  "you hear me once, and then once more. but then i die, til you call like before. what am i?",
  "i have 13 hearts, yet no other organs. what am i?"
];

const answers = [
  "fire",
  "skull",
  "shadow",
  "mirror",
  "stars",
  "wind",
  "c and y",
  "echo",
  "deck of cards"
];

const responses = [
  "oh...you got it...<br> lucky guess.",
  "beginners luck.",
  "hmm...how did you know <br> that one?",
  "are you cheating?",
  "maybe...you're actually <br> GOOD at this?",
  "yes...",
  "okay you must be <br> googling the answers",
  "correct.",
  "fine...you win."
];

let answerIndex = 0;
const answerWrong1 = `nope LOL...<br> it was ${answers[answerIndex]}`;
const answerWrong2 = `come on...<br> that one was easy <br> it was ${
  answers[answerIndex + 1]
}`;
const answerWrong3 = `you are NOT getting the <br> hang of this...the <br> answer was ${
  answers[answerIndex + 2]
}`;
const answerWrong4 = `seriously..? even a zombie would've said ${
  answers[answerIndex + 3]
}...<br> and they dont have brains`;
const answerWrong5 = `well...atleast you tried...<br> the answer was <br> ${
  answers[answerIndex + 4]
}`;
const answerWrong6 = `${answers[answerIndex + 5]}...`;
const answerWrong7 = "i'm not even gonna <br> tell you that one.";
const answerWrong8 = `... <br> it was ${
  answers[answerIndex + 7]
}...<br> oh and the last one was ${
  answers[answerIndex + 6]
}<br>if you got both wrong...`;
const answerWrong9 = "bad luck. <br> it was a deck of cards."

// Create the wrongResponses array
const wrongResponses = [
  answerWrong1,
  answerWrong2,
  answerWrong3,
  answerWrong4,
  answerWrong5,
  answerWrong6,
  answerWrong7,
  answerWrong8,
  answerWrong9
];

const highscoreDatabase = [];

let index = -1;
let greetingIndex = -1;
let riddleIndex = 0;
let responseIndex = 0;
let wrongIndex = 0;
let riddleDone = true;
let candyWarning = true;
let riddleAnswered = false;
document.getElementById("zombie-grl").style.display = "none";
document.getElementById("zombie-text-b").style.display = "none";
document.getElementById("zombie-text").style.display = "none";
document.getElementById("input-space").style.display = "none";
document.getElementById("enter-button").style.display = "none";
document.getElementById("riddle-enter").style.display = "none";
document.getElementById("riddle-check").style.display = "none";
document.getElementById("zombieSkipButton").style.display = "none";
document.getElementById("open-door").style.display = "none";
document.getElementById("yes").style.display = "none";
document.getElementById("no").style.display = "none";
document.getElementById("escape").style.display = "none";
function pumpkinText(speed) {
  const IntervalId = setInterval(() => {
    index = index + 1;
    if (index >= textContent.length) {
      clearInterval(IntervalId);
      document.getElementById("pumpkin").style.display = "none";
      document.getElementById("textbox").style.display = "none";
      document.getElementById("text-content").style.display = "none";
      document.getElementById("skipButton").style.display = "none";
      greetingText();
      return;
    }

    document.getElementById("text-content").innerHTML = textContent[index];
  }, speed);
}

//skipping to the final text if the skip button is pressed
document.getElementById("skipButton").addEventListener("click", function () {
  index = textContent.length - 2;
  pumpkinText(1000);
  return;
});

//running introductory text
pumpkinText(2000);

//creating code to run the greeting portion
function greetingText() {
  document.getElementById("zombie-grl").style.display = "block";
  document.getElementById("zombie-text-b").style.display = "block";
  document.getElementById("zombie-text").style.display = "block";
  document.getElementById("zombieSkipButton").style.display = "block";

  const greetingInterval = setInterval(() => {
    greetingIndex++;
    if (greetingIndex >= greetings.length) {
      clearInterval(greetingInterval); // Stop interval when done with greetings
      document.getElementById("zombieSkipButton").style.display = "none";
      document.getElementById("input-space").style.display = "block";
      document.getElementById("enter-button").style.display = "block";
      document.getElementById("zombie-text").innerHTML = "...";
      // Show ellipsis at the end
    } else {
      document.getElementById("zombie-text").innerHTML =
        greetings[greetingIndex];
    }
  }, 2000);

  document
    .getElementById("enter-button")
    .addEventListener("click", function () {
      document.getElementById("zombieSkipButton").style.display = "none";
      const userInput = document.getElementById("input-space").value;
      const nameGreeting = `whatever...${userInput}... <br> ...pretty basic name...`;
      document.getElementById("input-space").style.display = "none";
      document.getElementById("enter-button").style.display = "none";
      document.getElementById("zombie-text").innerHTML = nameGreeting;
      setTimeout(() => {
        document.getElementById("zombie-text").innerHTML =
          "ready to play...? <br> ...not that i care";
        document.getElementById("yes").style.display = "block";
        document.getElementById("no").style.display = "block";
      }, 2000);

      clearInterval(greetingInterval);
    });
}

document
  .getElementById("zombieSkipButton")
  .addEventListener("click", function () {
    greetingIndex = greetings.length - 2;
    greetingText();
    return;
  });

document.getElementById("yes").addEventListener("click", function () {
  riddleText();
});

function riddleText() {
  document.getElementById("yes").style.display = "none";
  document.getElementById("no").style.display = "none";
  document.getElementById("riddle-enter").style.display = "block";
  document.getElementById("riddle-check").style.display = "block";

  
  document.getElementById("zombie-text").innerHTML = riddles[riddleIndex];

  document.getElementById("riddle-check").addEventListener("click", function () {
    
    let riddleAnswer = document.getElementById("riddle-enter").value;

    
    if (riddleAnswer === answers[answerIndex]) {
      document.getElementById("zombie-text").innerHTML = responses[responseIndex];
      responseIndex++;
      wrongIndex++;
      let textNumber = document.getElementById("score");
      let intNumber = parseInt(textNumber.textContent);
      intNumber = intNumber + 2;
      textNumber.textContent = intNumber;
    } else {
      document.getElementById("zombie-text").innerHTML = wrongResponses[wrongIndex];
      wrongIndex++;
      responseIndex++;
    }

    
    document.getElementById("riddle-enter").value = "";

    
    riddleIndex++;
    answerIndex++;
    
    
    if (riddleIndex <= 8) {
      setTimeout(() => {
        
        document.getElementById("zombie-text").innerHTML = riddles[riddleIndex];
      }, 3000);
    } else {
      document.getElementById("zombie-text").innerHTML =
      "that was the last riddle...<br> let's see if you made it out...";
      finale(); 
    }
  });
}

function finale() {
  const textNumber = document.getElementById("score");
  const intNumber = parseInt(textNumber.textContent);
  if (intNumber >= 10) {
    setInterval(() => {
      document.getElementById("skeleton-guard").style.display = "none";
      document.getElementById("closed-door").style.display = "none";
      document.getElementById("riddle-enter").style.display = "none";
      document.getElementById("riddle-check").style.display = "none";
      document.getElementById("open-door").style.display = "block";
      document.getElementById("escape").style.display = "block";
      document.getElementById("zombie-text").innerHTML =
        "you...<br> you did it... you're free <br> WAIT! take me with you!";
  }, 1500);
  } else if (intNumber < 10) {
    document.getElementById("riddle-enter").style.display = "none";
    document.getElementById("riddle-check").style.display = "none";
    setInterval (() => {
      const finalGoodbye = `you...didn't do it...i'm...<br> i'm sorry...you only got ${intNumber} sweets <br> you're stuck here...like me`;    
      document.getElementById("zombie-text").innerHTML =
        finalGoodbye;
    }, 2000)
    setInterval(() => {
      document.getElementById("pumpkin").style.display = "block";
        document.getElementById("textbox").style.display = "block";
        document.getElementById("text-content").style.display = "block";
        document.getElementById("text-content").innerHTML = " ";
      setInterval(() => {
        document.getElementById("text-content").innerHTML = "...and me...";
      }, 2000)
    }, 4000)
  }
}
