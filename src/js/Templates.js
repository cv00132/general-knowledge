import $ from 'jquery';

function gameboard(options) {
    return `
    <div class = "results">
      <div class = "category" >
        Category is "${options.category}"
      </div>
        <div>
            <div id = "pointValue">
                ${options.value}
            </div>
            <div class="question">
                Question: ${options.question}
            </div>
            <div class="answer">
                Answer: ${options.answer}
            </div>
        </div>
    </div>
  `
};


export { gameboard };
