import $ from 'jquery';
import _ from 'lodash';
import { AppController } from './controller';
import { getQuestions } from './jservice';

var app = new AppController();

getQuestions().then(function (data) {
  _.shuffle(data).filter(function(option){
      return option.value != null
  }).forEach(function (q) {
      app.addQuestion(q);
  })
  $(".start").click(function () {
      app.start();
  });
});
