class GuessingGame {
    constructor() {
        this.guessing = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessing = Math.round((this.min + this.max) / 2);
        return this.guessing;
    }

    lower() {
        this.max = this.guessing;
        return this.max;
    }

    greater() {
        this.min = this.guessing;
        return this.min;
    }

}

module.exports = GuessingGame;
