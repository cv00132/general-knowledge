import $ from 'jquery';
import _ from 'lodash';
import { Question } from './Questions';

class AppController {
    constructor () {
        this.score = 0;
        this.questions = [];
        this.currentQuestion = null;
    }

    addQuestion (data) {
        var question = new Question({
            id: data.id,
            category: data.category.title,
            value: data.value,
            question: data.question,
            answer: data.answer
        })
        this.questions.push(question);
    };

    render () {
        var newHtml = '';

        if (this.currentQuestion) {
            newHtml = `<div class="modal">
                            Q: ${q.question}
                        </div>`;
        } else {
            this.questions
                .forEach(function (q) {
                    var hiddenClass = q.viewed ? "" : "hidden";
                    var questionHtml = `
                    <div class="results ${q.viewed}" id="${q.id}">
                      <div class="category" id="${q.id}">
                        ${q.category}
                          <div class="pointValue" id="${q.id}">
                              $${q.value}
                          </div>
                          <div class="answer ${hiddenClass}">
                            A: ${q.answer}
                          </div>
                      </div>
                    </div>
                  `;
                   newHtml += questionHtml;
            })
        }

        $('.board').html(newHtml);
    }

    chooseQuestion (event) {
        var currentId = event.target.id;
        _.find(this.questions, { 'id': currentId} );
        this.currentQuestion = _.get(Question[currentId], 'question');
        console.log(this.currentQuestion)
        this.viewed = true;

        //question.viewed = true;


        // event.target.id is the id of the question we want
        // _.find(this.questions, { id: event.target.id })
        // look that up in the array using the id
        // q.viewed = true;
        // sets up the currentQuestion
    }

    checkAnswer (event) {
        event.preventDefault();
        var input = $(".answer").val();
        var correct = this.currentQuestion.checkAnswer(input);
        if (correct) {
            this.score += this.currentQuestion.value;
        }
        this.currentQuestion = null;
        this.render();
    }

    start () {
      this.render();
      $('.results').click(this.chooseQuestion.bind(this));
    }
}

export { AppController };
