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
            newHtml = modalStuff ....
        } else {
            this.questions.forEach(function (q) {
                var hiddenClass = q.viewed ? "" : "hidden";
                var questionHtml = `
                  <div class="question ${hiddenClass}" id="${q.id}">
                    <span class="points">${q.points}</span>
                    <p>${q.question}</p>
                  </div>`
                  newHtml = newHtml + questionHtml;
            })
        }



        if (this.currentQuestion) {
            // drawModal
        }

        $('.board').html(newHtml);
    }

    renderScoreboard () {}

    checkAnswer (event) {
        event.preventDefault();
        var input = $(".playerName").val();
        var correct = this.currentQuestion.checkAnswer(input);
        if (correct) {
            this.score += this.currentQuestion.points;
        }
        this.currentQuestion = null;
        this.render();
    }

    chooseQuestion (event) {

        // event.target.id is the id of the quesion we want
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
