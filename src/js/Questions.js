import $ from 'jquery';

class Question {
    constructor (options) {
        options = options || {};
        this.id = options.id;
        this.answer = options.answer;
        this.value = options.value;
        this.category = options.category;
        this.question = options.question;
        this.viewed = false;
    }

    toggleViewed () {
    this.viewed = viewed;
    if (viewed) {
            viewed = false;
        } else {
            viewed = true;
        }
    };

   //  checkAnswer (answer) {
   //     if ()
   // }
}

export { Question };
