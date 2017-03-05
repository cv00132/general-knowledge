import $ from 'jquery';

function gameboard(options) {
    return `
    <div class="results">
    <span id="${options.id}"</span>
      <div class="category" >
        ${options.category}
          <div id="pointValue">
              $${options.value}
          </div>
      </div>
      <div class="question">
          Question: ${options.question}
      </div>
      <div class="answer">
          Answer: ${options.answer}
      </div>
    </div>
  `
};


export { gameboard };
