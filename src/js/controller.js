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
    }

    render () {
        var newHtml = '';

        if (this.currentQuestion) {
            newHtml = `<div class="modal">
                            Q: ${q.question}
                        </div>`;
        } else {
            this.questions.forEach(function (q) {
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
              `;
               newHtml = newHtml + questionHtml;
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

        // event.target.id is the id of the question we want
        // _.find(this.questions, { id: event.target.id })
        // look that up in the array using the id
        // q.viewed = true;
        // sets up the currentQuestion
        this.render();
    }

    start () {
      this.render();
      $('.question').click(this.chooseQuestion.bind(this));
      $('.answer').submit(this.checkAnswer.bind(this));
    }
}
