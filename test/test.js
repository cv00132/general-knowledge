// Import Chai
import chai from 'chai';

// Import Any Files to Test
import { Board } from '../src/js/Board';
import { Player } from '../src/js/Player';
import { Questions } from '../src/js/Questions';
// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;



  describe('Testing the Creation of Something', function () {

    describe('Board creation'), function (){
    it('Board exists after we create it', function () {
      let x = new Board;
      expect(x).to.be.an.instanceOf(Board);
        })
    };

    describe('Player creation'), function () {
    it('Player exists after we create it', function () {
      let x = new Player;
      expect(x).to.be.an.instanceOf(Player);
        })
    };

    describe('Questions creation'), function () {
    it('Questions exists after we create it', function () {
      let x = new Questions;
      expect(x).to.be.an.instanceOf(Questions);
        })
    };
  });
