class Question {
    constructor (options) {
        this.id = options.id;
        this.answer = options.answer;
        this.value = options.value;
        this.category = options.category.toUpperCase();
        this.question = options.question;
    }
}

export { Question };
