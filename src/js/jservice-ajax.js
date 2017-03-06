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
        if(dataPulled.value === null) {
            continue
        }
    var options = {
        id: i,
        category: dataPulled.category.title,
        value: dataPulled.value,
        question: dataPulled.question,
        answer: dataPulled.answer,
    }
    var question = new Question(options);
    $('.board').append(gameboard(question));
  }
}

export { getQuestions, sortData };
