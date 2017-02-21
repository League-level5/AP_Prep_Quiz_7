(function() {    var questions = [{
question: "What factors should be considered when selecting a sorting algorithm?<br><br>I&nbsp;&nbsp;&nbsp;&nbsp; Speed of algorithm<br>II&nbsp;&nbsp;&nbsp;&nbsp;Size of array<br>III&nbsp;&nbsp;Space used by algorithm",
choices: ["I only", "II only", "I and III only", "I, II, and III only", "I, II, III, and IV"],
correctAnswer: 3
}, {
question: "Consider the three temperatures groups along with their given categories:<br><br>Temp:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Category:<br>less than 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;frozen<br>0 to 100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;moderate<br>greater than 100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;burning<br><br>Which of the following code segments will associate the temperature with the appropriate category?<br><br>I<br>if(temp < 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “frozen”;<br>if(temp > 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “moderate”;<br>else<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “burning”;<br><br>II<br>if(temp < 0)<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “frozen”;<br>else if(temp <= 100)<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “moderate”;<br>else<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “burning”;<br><br>III<br>if(temp > 100)<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “burning”;<br>if(0 <= temp <= 100)<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “moderate”;<br>else<br>&nbsp;&nbsp;&nbsp;&nbsp;category = “frozen”;",
choices: ["I only", "II only", "III only", "II and III only", "I, II, and III"],
correctAnswer: 1
}, {
question: "What would be the output produced by the following code?<br><br>System.out.println(“A comment looks like this:\n\\*comment here*\\”);",
choices: ["A comment looks like this:\n\\*comment here*\\", "A comment looks like this:<br>\*comment here*\ ", "A comment looks like this:<br>\\*comment here*\\", "A comment looks like this:<br>comment here", "A comment looks like this: \*comment here*\ "],
correctAnswer: 1
}, {
question: "Below is the partial declaration of a RaceCar class. <br><br>Public class RaceCar<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;private String sponsor;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int horsePower;<br>&nbsp;&nbsp;&nbsp;&nbsp;private double weight;<br>&nbsp;&nbsp;&nbsp;&nbsp;private int racePosition;<br>&nbsp;&nbsp;&nbsp;&nbsp;private boolean needsPitStop;<br>&nbsp;&nbsp;&nbsp;&nbsp;...<br>}<br><br>Which of the following methods in the RaceCar class would be the best candidate to make static?",
choices: ["go //propels the car forward", "makePitStop //changes tires and refuels the car", "getSponsor //returns race car’s sponsor", "brake //slows the car", "getTrackConditions //returns the road conditions of the race track"],
correctAnswer: 4
}, {
question: "Consider the following class declarations:<br><br>public class Building<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;...<br>}<br><br>public class Restaurant extends Building<br>{<br>&nbsp;&nbsp;&nbsp;&nbsp;…<br>}<br><br>Which of the following statements are true?<br><br>I&nbsp;&nbsp;&nbsp;&nbsp; Restaurant inherits Building’s constructors.<br>II&nbsp;&nbsp;&nbsp;&nbsp;Restaurant can add new methods and private instance variables.<br>III&nbsp;&nbsp;Restaurant can override existing private methods of Building.",
choices: ["I only", "II only", "III only", "I and II only", "II and III only"],
correctAnswer: 1
}];
    var questionCounter = 0;   var selections = [];  var quiz = $('#quiz');    displayNext();    $('#next').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {              return false;    }    choose();        if (isNaN(selections[questionCounter])) {      alert('Please make a selection!');    } else {      questionCounter++;      displayNext();    }  });    $('#prev').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {      return false;    }    choose();    questionCounter--;    displayNext();  });    $('#start').on('click', function (e) {    e.preventDefault();        if(quiz.is(':animated')) {      return false;    }    questionCounter = 0;    selections = [];    displayNext();    $('#start').hide();  });    $('.button').on('mouseenter', function () {    $(this).addClass('active');  });  $('.button').on('mouseleave', function () {    $(this).removeClass('active');  });    function createQuestionElement(index) {    var qElement = $('<div>', {      id: 'question'    });        var header = $('<h2>Question ' + (index + 1) + ':</h2>');    qElement.append(header);        var question = $('<p>').append(questions[index].question);    qElement.append(question);        var radioButtons = createRadios(index);    qElement.append(radioButtons);        return qElement;  }    function createRadios(index) {    var radioList = $('<ul>');    var item;    var input = '';    for (var i = 0; i < questions[index].choices.length; i++) {      item = $('<li>');      input = '<input type="radio" name="answer" value=' + i + ' />';	  input += convertToLetter(i) + ':<br>';      input += questions[index].choices[i];      input += '<hr size=2>';      item.append(input);      radioList.append(item);    }    return radioList;  }  function choose() {    selections[questionCounter] = +$('input[name="answer"]:checked').val();  }    function displayNext() {    quiz.fadeOut(function() {      $('#question').remove();            if(questionCounter < questions.length){        var nextQuestion = createQuestionElement(questionCounter);        quiz.append(nextQuestion).fadeIn();        if (!(isNaN(selections[questionCounter]))) {          $('input[value='+selections[questionCounter]+']').prop('checked', true);        }                if(questionCounter === 1){          $('#prev').show();        } else if(questionCounter === 0){                    $('#prev').hide();          $('#next').show();        }      }else {        var scoreElem = displayScore();        quiz.append(scoreElem).fadeIn();        $('#next').hide();        $('#prev').hide();        $('#start').show();      }    });  }  function displayScore() {    var score = $('<p>',{id: 'question'});    var numCorrect = 0;    for (var i = 0; i < selections.length; i++) {      if (selections[i] === questions[i].correctAnswer) {        numCorrect++;      }    }	score.append('<br>You got ' + numCorrect + ' questions out of ' + questions.length + ' correct.<hr size=2>');    	for(var i = 0; i < questions.length; i++){				score.append('<br> Question: ' + (i + 1) + '<br>');		score.append('<br>' + questions[i].question + '<br>');				for(var j = 0; j < questions[i].choices.length; j++){			score.append(convertToLetter(j) + ":<br>" + questions[i].choices[j] + '<br>');		}				score.append('<br> Your Answer: ' + convertToLetter(selections[i]) + '<br>');		score.append('<br> Correct Answer: ' + convertToLetter(questions[i].correctAnswer) + "<hr size=2>");	}    return score;  }})();function convertToLetter(i){		var letter;		switch(i){			case 0: letter = 'A';					break; 			case 1: letter = 'B';					break;			case 2: letter = 'C';					break;			case 3: letter = 'D';					break;			case 4: letter = 'E';					break;		}		return letter;	}
