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

  function gameOver() {
    questionPicker = 0;
    $("#question-container").empty();
    $("#question-container").append("<h1>The game is over</h1>");
    $("#question-container").append(
      "<h1>You got " + correct + " answers right.</h1>"
    );
    $("#question-container").append(
      "<h1>You got " + incorrect + " answers wrong.</h1>"
    );
    $("#question-container").append(
      "<h1>You got timed out " + timesUpCounter + " times.</h1>"
    );
    $("#question-container").append("<h2 id='start-over'>Start Over?</h2>");
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
      time = 30;
      clearInterval(interval);
      timesUp();
    }
  }

  function updateQuestion() {
    questionPicker++;
    if (questionPicker > 4) {
      gameOver();
    } else {
      loadQuestion();
      displayTimer();
      interval = setInterval(updateTimer, 1000);
    }
  }

  function correctAnswerFunction() {
    correct++;
    time = 30;
    clearInterval(interval);
    $("#question-container").empty();
    $("#question-container").prepend("<h1>That is correct!</h2>");
    $("#question-container").append(
      "<h2 id='correct-answer'>The correct answer is: " +
        correctAnswer[questionPicker] +
        "</h2>"
    );
    setTimeout(function() {
      updateQuestion();
    }, 5000);
  }

  function incorrectAnswer() {
    incorrect++;
    time = 30;
    clearInterval(interval);
    $("#question-container").empty();
    $("#question-container").prepend("<h1>Nope, not at all...</h2>");
    $("#question-container").append(
      "<h2 id='correct-answer'>The correct answer is: " +
        correctAnswer[questionPicker] +
        "</h2>"
    );
    setTimeout(function() {
      updateQuestion();
    }, 5000);
  }

  function timesUp() {
    timesUpCounter++;
    $("#question-container").empty();
    $("#question-container").prepend("<h1>You ruined it. Times up...</h2>");
    $("#question-container").append(
      "<h2 id='correct-answer'>The correct answer is: " +
        correctAnswer[questionPicker] +
        "</h2>"
    );
    setTimeout(function() {
      updateQuestion();
    }, 5000);
  }

  function loadQuestion() {
    $("#question-container").empty();
    $("#question-container").append(
      "<h1 id='question'>" + questions[questionPicker] + "</h1>"
    );

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
      $("#question-container").append(
        "<h2 id='correct-answer-question'>" +
          correctAnswer[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer1[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer2[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer3[questionPicker] +
          "</h2>"
      );
    } else if (randomNumber === 1) {
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer1[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='correct-answer-question'>" +
          correctAnswer[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer2[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer3[questionPicker] +
          "</h2>"
      );
    } else if (randomNumber === 2) {
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer1[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer2[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='correct-answer-question'>" +
          correctAnswer[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer3[questionPicker] +
          "</h2>"
      );
    } else {
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer1[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer2[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='incorrect-answer-question'>" +
          incorrectAnswer3[questionPicker] +
          "</h2>"
      );
      $("#question-container").append(
        "<h2 id='correct-answer-question'>" +
          correctAnswer[questionPicker] +
          "</h2>"
      );
    }

    $("#incorrect-answer-question").click(function() {
      incorrectAnswer();
    });

    $("#correct-answer-question").click(function() {
      correctAnswerFunction();
    });
  }

  $("#start").click(function() {
    removeStart();
    loadQuestion();
    displayTimer();
    interval = setInterval(updateTimer, 1000);
  });
});
