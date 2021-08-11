const readLineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.bold.redBright("-----Welcome to Big Bang Theory Quiz-----"));

let scoreCount = 0;
let name;
const leaderBoard = [
  {
    name: "Abhishek",
    score: 5,
  },
];

askUser();

function showScoreBoard() {
  console.log();
  console.log(chalk.bold.cyan("Your Score:"), scoreCount, "/15");
  console.log(chalk.bold.red("-------------LEADERBOARD--------------"));
  console.log();

  leaderBoard.map((person) => {
    if (person.score < scoreCount) {
      console.log(
        chalk.bold.green(
          "------CONGRATULATIONS!!You have beat the previous highest score----------"
        )
      );
      console.log();
      console.log(chalk.bold.white("Previous leaderboard"));
      console.table(leaderBoard);
    } else {
      console.log(chalk.bold.white("LEADERBOARD"));
      console.table(leaderBoard);
    }
  });
}

function playAgain() {
  showScoreBoard();
  scoreCount = 0;
  let again = readLineSync.keyInYN("Want to play again?(y/n)");
  if (again) levelOne();
  else {
    console.log(chalk.red("Game Ended!"));
    process.exit();
  }
}

function askUser() {
  name = readLineSync.question(chalk.bold.red("What is your name?"));
  var ready = readLineSync.keyInYN(
    chalk.green("Are you ready to play Big Bang Theory QUiz?")
  );
  if (ready) levelOne();
  else return;
}

function askQuestion(options, question, answer) {
  console.log();
  console.log(chalk.yellow(question));
  let index = readLineSync.keyInSelect(
    options,
    "Choose option:(0 is to cancel playing the game)"
  );
  if (index === answer) {
    console.log(chalk.green("Right Answer!"));
    scoreCount += 1;
    console.log("Your Current Score is: " + scoreCount);
    console.log("---------------------");
  } else {
    console.log(chalk.red("Wrong Answer!"));
    console.log("Correct answer is: " + options[answer]);
    playAgain();
  }
}

function levelOne() {
  let allQuestions = [
    {
      options: [
        "Caltech",
        "MIT",
        "Pharmaceutical Company",
        "A private research facility",
      ],
      question: "Where do the guys in TBBT work??",
      answer: 0,
    },
    {
      options: ["Glendale", "Pasadena", "Downtown LA", "Burbank"],
      question: "Where is the gang's apartment?",
      answer: 1,
    },
    {
      options: ["Caltech", "Stanford", "MIT", "Cambridge"],
      question: "Where did Howard go to school?",
      answer: 2,
    },
    {
      options: [
        "Through friends of Amy",
        "Thought Work",
        "A chance meeting",
        "Through a dating site",
      ],
      question: "How did Sheldon and Amy meet?",
      answer: 3,
    },
    {
      options: [
        "Penny's hometown",
        "Pasadena",
        "Las Vegas",
        "Leonard's hometown",
      ],
      question: "Where did Penny and Leonard get married?",
      answer: 2,
    },
  ];
  console.log(chalk.bold.red("--------------Level-1------------------"));
  console.log(
    chalk.bold.white(
      "You will have to answer all these correctly to move to the next question"
    )
  );

  allQuestions.map(({ options, question, answer }) => {
    askQuestion(options, question, answer);
  });
  levelTwo();
}
function levelTwo() {
  let allQuestions = [
    {
      options: ["John", "Peter", "Bert", "Barry"],
      question: "What is the name of their geologist friend?",
      answer: 2,
    },
    {
      options: [
        "The Kripke Killer",
        "The Fighting Kripke",
        "The Kripke Crippler",
        "The Battlin' Kripke Bot",
      ],
      question: "What was the name of Kripke's robot?",
      answer: 2,
    },
    {
      options: [
        "At a comic convention",
        "At a comic book store game tournamemt",
        "At the Cheesecake Factory",
        "At work, where Wil was studying for a role",
      ],
      question: "How did Sheldon meet Wil Wheaton?",
      answer: 1,
    },
    {
      options: [
        "His mother had him tested",
        "He's too smart to be crazy",
        "He doesn't believe in crazy",
        "Crazy is for other people",
      ],
      question: "How does Sheldon know he's not crazy?",
      answer: 0,
    },
    {
      options: [
        "Words With Nerds",
        "Sheldon explains trains",
        "Science for sillies",
        "Fun With Flags",
      ],
      question: "What is the name of Sheldon's webseries?",
      answer: 3,
    },
    {
      options: ["Rebecca", "Emily", "Jeniffer", "Claire"],
      question: "What was the name of Raj's dermatologist girlfriend?",
      answer: 1,
    },
    {
      options: ["Charmander", "Cinnamon", "Chocolate", "Charming"],
      question: "What is the name of Raj's dog?",
      answer: 1,
    },
    {
      options: [2005, 2007, 2009, 2011],
      question: "What year did the show first air?",
      answer: 1,
    },
    {
      options: [
        "With an exploding canister of rocket feul",
        "With a too-heavy Batman statue",
        "With overuse moving in one item at a time",
        "With overuse holding the button too long to wait for Sheldon",
      ],
      question: "How did they break the elevator?",
      answer: 0,
    },
    {
      options: ["Twinkle", "Moon Pie", "Cupcake", "HoHo"],
      question: "What does Sheldon's grandma call him?",
      answer: 1,
    },
  ];
  console.log();
  console.log();
  console.log(chalk.bold.red("----------------Level-2--------------------"));
  console.log(
    chalk.bold.white("Answer all 10 questions to move to next level")
  );

  allQuestions.map(({ options, question, answer }) => {
    askQuestion(options, question, answer);
  });

  console.log(
    chalk.bold.green(
      "------CONGRATULATIONS YOU ANSWERED ALL QUESTIONS CORRECTLY!!------"
    )
  );
  console.log(chalk.bold.green("Thank you for playing the game!!"));
  console.log(chalk.bold.green(`Your score is:${scoreCount}/15`));
  playAgain();
}
