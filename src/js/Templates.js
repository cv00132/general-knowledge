import $ from 'jquery';

function scoreboard() {
    return `
        <div class="players">
            ${player.name}
        </div>
        <div class="scores">
            ${player.score}
        </div>
    `
}

function gameboard(options) {
    return `
    <div class="results" id="${options.id}">
      <div class="category" >
        ${options.category}
          <div id="pointValue">
              $${options.value}
          </div>
      <div class="question hidden">
          Q: ${options.question}
      </div>
      <div class="answer hidden">
          A: ${options.answer}
      </div>
    </div>

  `
};


export { gameboard, scoreboard };
