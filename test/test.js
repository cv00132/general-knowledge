// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Board } from '../src/js/Board';
import { Player } from '../src/js/Player';
import { Question } from '../src/js/Questions';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;



describe('Testing the Creation of Something', function () {
    describe('Board creation', function (){
        it('Board exists after we create it', function () {
          let board = new Board();
          assert.instanceOf(board, Board, 'Board created');
            })
    });

    describe('Player creation', function () {
        it('Player exists after we create it', function () {
          let x = new Player();
          assert.instanceOf(x, Player, 'Player created');
            })
    });

    describe('Questions creation', function () {
        it('Questions exists after we create it', function () {
          let question = new Question();
          assert.instanceOf(question, Question, 'Question created');
            })
    });
});

describe('Board', function (){

    describe('Board should contain a player', function () {
        it('Board contains a player', function () {
            let player = new Player();
            let board = new Board(player);
            assert.property(board, 'player', 'Player is on board')
            assert.instanceOf(board.player, Player);
        })
    })
})

describe('Player', function() {

    it('Player should have a name', function (){
        var player1 = new Player ({
            name: "Player1"
        })
        assert.isString('Player1', 'Name is a string')
    })

    // it('Player score should go up if playerAnswer is correct', function (){
    //
    // })
})
