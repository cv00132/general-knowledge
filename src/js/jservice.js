import $ from 'jquery';

function getQuestions () {
  return $.ajax({
    url: `http://jservice.io/api/clues`,
    dataType: "json",
  });
}

export { getQuestions };
