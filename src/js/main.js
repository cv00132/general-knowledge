import $ from 'jquery';
import { Board } from './Board';
import { Player } from './Player';
import { Questions } from './Questions';
import { getQuestions, sortData } from './jservice-ajax';
import { generateQuestion, showAnswer } from './Templates';

$('#start').click('keydown', function(event) {
    getQuestions().then(sortData);
    $('#start').addClass('hidden');
});

$('.results').click(function(event){
    $(options.question).toggleClass('fullscreen');
})
