// Need 5 linked arrays. One for questions, one for correct answers. and 3 for incorrect answers.
// Functions needed: loadQuestion(), startTimer(), correctAnswer(), incorrectAnswer(), timesUp() gameOver();

$(document).ready(function() {
  const questions = [
    "What does CPU stand for?",
    "What part in a computer allows connections to all other components of a computer?",
    "What year was the first computer invented?",
    "In terms of memory (kilobyte, megabyte, etc), what comes after terabyte",
    "What isn't an advantage of USB 3.0 compared to USB 2.0?"
  ];

  const correctAnswer = [
    "Central Processing Unit",
    "Motherboard",
    "1968",
    "Petabyte",
    "USB 3.0 technology can't find you happiness"
  ];

  const incorrectAnswer1 = [
    "Computer Powering Unit",
    "Power Supply",
    "1952",
    "Gigabyte",
    "USB 3.0 has faster data transfer speeds"
  ];

  const incorrectAnswer2 = [
    "Computer Pushing Unit",
    "CPU",
    "1973",
    "Bit",
    "USB 3.0 are backwards compatible"
  ];
  const incorrectAnswer3 = [
    "Central Powering Unit",
    "Hard Drive",
    "1948",
    "Exabyte",
    "USB 3.0 can allow more power to the port"
  ];
  let time = 30;
  const remaining = "Time remaining: ";
  let interval;
  let questionPicker = 0;
  let correct = 0;
  let incorrect = 0;
  let timesUpCounter = 0;

  function removeStart() {
    $("#start").remove();
  }

  function displayTimer() {
    $("#question-container").prepend(
      "<div id='time-remaining'>" + remaining + time + "</div>"
    );
  }

  function updateTimer() {
    time--;
    $("#time-remaining").text(remaining + time);
    if (time < 1) {
      timesUp();
      time = 30;
      clearInterval(interval);
    }
  }

  function updateQuestion() {
    questionPicker++;
    if (questionPicker > 4) {
      gameOver();
      questionPicker = 0;
    }
  }

  function correctAnswerFunction() {
    $("#questions-container").empty();
    $("#questions-container").prepend("<h1>That is correct!</h2>");
    $("#questions-container").append(
      "The correct answer is: " + correctAnswer[questionPicker]
    );
    updateQuestion();
  }

  function incorrectAnswer() {
    $("#questions-container").empty();
    $("#questions-container").prepend("<h1>Nope, not at all...</h2>");
    $("#questions-container").append(
      "The correct answer is: " + correctAnswer[questionPicker]
    );
    updateQuestion();
  }

  function timesUp() {
    $("#questions-container").empty();
    $("#questions-container").prepend("<h1>Times up</h2>");
    $("#questions-container").append(
      "The correct answer is: " + correctAnswer[questionPicker]
    );
    updateQuestion();
  }

  function gameOver() {}

  function loadQuestion() {
    // Time remaining:
    // Question
    // 4 answers randomized (on hover give it a color)
    $("#questions-container").empty();
    $("#question-container").append(
      "<h1 id='question'>" + questions[questionPicker] + "</h1>"
    );

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      $("#question-container").append(
        "<h2 id='correctAnswer'>" + correctAnswer[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer1[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer2[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer3[questionPicker] + "</h2>"
      );
    } else if (randomNumber === 1) {
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer1[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='correctAnswer'>" + correctAnswer[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer2[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer3[questionPicker] + "</h2>"
      );
    } else if (randomNumber === 2) {
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer1[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer2[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='correctAnswer'>" + correctAnswer[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer3[questionPicker] + "</h2>"
      );
    } else {
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer1[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer2[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrectAnswer'>" + incorrectAnswer3[questionPicker] + "</h2>"
      );
      $("#question-container").append(
        "<h2 id='correctAnswer'>" + correctAnswer[questionPicker] + "</h2>"
      );
    }
  }

  $("#start").click(function() {
    removeStart();
    displayTimer();
    interval = setInterval(updateTimer, 1000);
    loadQuestion();
  });

  $("#incorrectAnswer").click(function() {
    console.log("fuijsehf");
    incorrectAnswer();
  });

  $("#correctAnswer").click(function() {
    console.log("fuijsehf");
    correctAnswerFunction();
  });
});
