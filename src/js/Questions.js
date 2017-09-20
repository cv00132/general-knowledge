import $ from 'jquery';
import { AppController } from "./controller.js";

class Question {
    constructor (options) {
        options = options || {};
        this.id = options.id;
        this.answer = options.answer.toLowerCase().split(" ");
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

    checkAnswer (guess) {
        console.log(this.answer);
        var correct = false;
        guess.forEach((input) => {
            //console.log(this.answer.includes(input));
            if (!this.answer.includes(input)) {
            } else {
                //console.log('from true');
                return correct = true;
            };
        });
        return correct;
        guess = ""
    }
}

export { Question };
