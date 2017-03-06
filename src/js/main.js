import $ from 'jquery';
// import { Board } from './Board';
// import { Player } from './Player';
// import { Questions } from './Questions';
import { getQuestions, sortData } from './jservice-ajax';
// import { generateQuestion, showAnswer } from './Templates';

$('#start').on('click', function(event) {
    getQuestions().then(sortData);
    $('#start').addClass('hidden');
});

$('.results').on('click', '.category', function() {
    console.log(this.question);
    $('.question').removeClass('hidden').addClass('fullscreen');
});
