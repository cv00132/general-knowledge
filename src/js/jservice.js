import $ from 'jquery';

function getQuestions (questions) {
  return $.ajax({
    url: `http://jservice.io/api/clues`,
    dataType: "json",
    success: questions
  });
}

function sortData (data) {
  for (var i = 0; i < 28; i++) {
    var dataPulled = data[i];
    console.log(dataPulled)
        if(dataPulled.value === null) {
            continue
        }
     var options = {
        id: dataPulled.id,
        category: dataPulled.category.title,
        value: dataPulled.value,
        question: dataPulled.question,
        answer: dataPulled.answer,
    }
  }
}

export { getQuestions, sortData };
