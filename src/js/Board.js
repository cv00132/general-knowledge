import { Player } from './Player';
import { Questions } from './Questions';

class Board {
    constructor(player, question) {
        this.player = player;
        this.questions = question;
    };
    // checkAnswer(){
    //     if(player.answer === question.answer) {
    //         player.score += question.value;
    //     }
    // }
}

export { Board } ;
