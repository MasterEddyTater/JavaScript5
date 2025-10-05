quiz_questions = ["11 + 4", "9 - 7", "13 * 6", "81,300 / 1,084"];
quiz_answers = ["15", "2", "78", "75"];

function quiz() {
    var points = 0;
    for (i = 0; i <= 3; i++) {
        var attempts = 3;
        while (attempts > 0) {
            answer = prompt("Good Day! What is " + quiz_questions[i]);
            if (answer == quiz_answers[i]) {
                points += attempts;
                alert("Ding! Ding! Ding! Correct!");
                attempts = 0;
            } else {
                alert("BZZZZZ! Incorrect!");
                attempts -= 1;
            }
        }
    }
    return points
}