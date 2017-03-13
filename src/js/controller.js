import $ from 'jquery';
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
            answer: data.question
        })
        this.questions.push(question);
    };

    render () {
        var newHtml = '';


        function shuffle(array) {
          var m = array.length, t, i;

          // While there remain elements to shuffle…
          while (m) {

            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = array[m];
            array[m] = array[i];
            array[i] = t;
          }

          return array;
        }

        if (this.currentQuestion) {
            newHtml = `<div class="modal">
                            Q: ${q.question}
                        </div>`;
        } else {
            shuffle(this.questions)
                .filter(function(option){ return option.value != null })
                    .forEach(function (q) {
                        var hiddenClass = q.viewed ? "" : "hidden";
                        var questionHtml = `
                        <div class="results" id="${q.id}">
                          <div class="category" >
                            ${q.category}
                              <div id="pointValue">
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

    chooseQuestion (event) {
        $('.question').click(this.chooseQuestion.bind(this));
        console.log("click worked");

        // event.target.id is the id of the question we want
        // _.find(this.questions, { id: event.target.id })
        // look that up in the array using the id
        // q.viewed = true;
        // sets up the currentQuestion
        this.render();
    }

    start () {
      this.render();
    }
}

export { AppController };
