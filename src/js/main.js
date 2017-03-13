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
