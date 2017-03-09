import $ from 'jquery';
// import { Player } from './Player';
// import { Questions } from './Questions';
import { getQuestions, sortData } from './jservice-ajax';
// import { generateQuestion, showAnswer } from './Templates';

$('#start').on('click', function(event) {
    getQuestions().then(sortData);
    $('#start').addClass('hidden');
});

$(document).on('click', '.results', function(event){
    $(this).find('.question').removeClass('hidden')});

$(document).on('click', '#submitPlayer', function(event){
    var playerName = $(this).val('.playerName');
    scoreboard(playerName)}
);

/*
import $ from jquery;
import {appcontroller} from app;
import {getQuestions} from './jservice';

var app = new AppController();

getData.then(function (data) {
  data.forEach(function (question) {
    app.addQuestion(question);
  }
});

app.start();

*/
