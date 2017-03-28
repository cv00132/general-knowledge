import $ from 'jquery';
import _ from 'lodash';
import { Question } from './Questions';

class AppController {
    constructor () {
        this.score = 0;
        this.questions = [];
        this.currentQuestion = "";
    }

    addQuestion (data) {
        var question = new Question({
            id: data.id,
            category: data.category.title,
            value: data.value,
            question: data.question,
            answer: data.answer.toLowerCase()
        })
        this.questions.push(question);
    };

    render () {
        var newHtml = ``;

        if (this.currentQuestion != "") {
            this.currentQuestion.viewed = true;
            newHtml = `<div id="modal" class="modal is-active">
                          <div class="modal-background"></div>
                              <div class="modal-content">
                                <p class="question">
                                  ${this.currentQuestion.question}
                                </p>
                                    <input type="text" placeholder="Enter Your Answer" class="answerBox"></input>
                                    <button id="submitAnswer">
                                        Submit Answer
                                    </button>
                                <div class="timer"></div>
                              </div>
                        </div>`;
                        this.reRender();
                    } else {
                        this.questions
                        .forEach(function (q) {
                            var showAnswer = q.viewed ? "answered" : "hidden";
                            var hideCategory = q.viewed ? "hidden" : "";
                            var questionHtml = `
                            <div class="results ${q.viewed} ${hideCategory}" id="${q.id}">
                                <div class="category" id="${q.id}">
                                        ${q.category}
                                    <div class="pointValue" id="${q.id}">
                                        $${q.value}
                                    </div>
                                    <div class="answer ${showAnswer}">
                                        ${q.answer}
                                    </div>
                                </div>
                            </div>`;
                            newHtml += questionHtml;
                        })
                    }
                    $('.board').html(newHtml);
                    this.submitAnswer();
                }

    chooseQuestion (event) {
        var currentId = Number(event.target.id);
        this.currentQuestion = _.find(this.questions, { id: currentId });
        this.viewed = true;
        this.render();
    }

    checkAnswer () {
        var input = $('.answerBox').val().split(" ");
        var correct = this.currentQuestion.checkAnswer(input);
        if (correct) {
            this.score += this.currentQuestion.value;
            //WE HAVE ID HERE OF THE SELECTED QUESTION
            // this.updateBoard(this.currentQuestion);
        }
        $('#score').html(this.score);
        this.currentQuestion = "";
    }

    submitAnswer () {
        $("#submitAnswer").click(() => {
            this.checkAnswer();
        })
        //$('#modal').removeClass('is-active');
        //this.render();

    }

    reRender() {
        var count = 15;
        var timer = setInterval(() => {
            count -= 1;
            $('.timer').html(count);
        }, 1000);
        count = 15;
        var timeout = setTimeout (() => {
            this.currentQuestion = '';
            clearInterval(timer);
            this.render();
        }, 15000);
        clearTimeout();
    }

    start () {
      this.render();
      $(document).on('click','.results', this.chooseQuestion.bind(this));
      $('.scoreboard').removeClass('hidden');
     }
}

export { AppController };
