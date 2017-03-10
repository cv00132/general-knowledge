// import $ from 'jquery';
// import { Player } from './Player';
// import { Questions } from './Questions';
// import { getQuestions, sortData } from './jservice-ajax';
// import { generateQuestion, showAnswer } from './Templates';
// $('#start').on('click', function(event) {
//     getQuestions().then(sortData);
//     $('#start').addClass('hidden');
// });
// $(document).on('click', '.results', function(event){
//     $(this).find('.question').removeClass('hidden')});

import $ from 'jquery';
import { AppController } from './controller';
import { getQuestions } from './jservice';

var app = new AppController();

getQuestions().then(function (data) {
  data.forEach(function (question) {
    app.addQuestion(question);
  })
  $("#start").click(function () { app.start(); });
  // app.start();
});

// app.start();
