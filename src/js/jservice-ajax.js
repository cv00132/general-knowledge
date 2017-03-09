import $ from 'jquery';
import { Question } from './Questions';
import { gameboard } from './Templates';

function getQuestions (questions) {
  return $.ajax({
    url: `http://jservice.io/api/clues`,
    dataType: "json",
    success: questions
  });
}

function sortData (data) {
  for (var i = 0; i < 28; i++) {
    var dataPulled = data[i];
    console.log(dataPulled)
        if(dataPulled.value === null) {
            continue
        }
     var options = {
        id: dataPulled.id,
        category: dataPulled.category.title,
        value: dataPulled.value,
        question: dataPulled.question,
        answer: dataPulled.answer,
    }
    var question = new Question(options);
    // it feels weird for sortData to "hold" the board object but it's not off limits
    // game.addQuestion(question);
    // game.render();
    $('.board').append(gameboard(question));
  }
}

export { getQuestions, sortData };
