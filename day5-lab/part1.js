const myQuestions = [
  {
    question: "Who invented JavaScript?",
    answers: {
      a: "a.Douglas Crockford",
      b: "b.Sheryl Sandberg",
      c: "c.Brendan Eich",
    },
    correctAnswer: "c",
  },
  {
    question: "Which one of these is a JavaScript package manager?",
    answers: {
      a: "a.Node.js",
      b: "b.TypeScript",
      c: "c.npm",
    },
    correctAnswer: "c",
  },
  {
    question: "Which tool can you use to ensure code quality?",
    answers: {
      a: "a.Angular",
      b: "b.jQuery",
      c: "c.RequireJS",
      d: "d.ESLint",
    },
    correctAnswer: "d",
  },
];
let countTrueAnswer = 0;
for (let i = 0; i < myQuestions.length; i++) {
  let dapan = Object.keys(myQuestions[i].answers);
  alert(dapan);
  alert(myQuestions[i].question);
  alert(myQuestions[i].answers);
  const userAnswer = prompt("which a,b,c,d is your answer?");
  if (userAnswer == myQuestions[i].correctAnswer) {
    countTrueAnswer += 1;
  } else {
    countTrueAnswer += 0;
  }
}
alert(countTrueAnswer);
