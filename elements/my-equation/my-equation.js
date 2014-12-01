Polymer('my-equation', {
  symbols: {
    ADDITION: {
      text: '+',
      calculate: function(a, b) { return a + b; }
    },
    SUBTRACTION: {
      text: '-',
      calculate: function(a, b) { return a - b; }
    },
    MULTIPLICATION: {
      text: 'x',
      calculate: function(a, b) { return a * b; }
    }
  },
  checkAnswer: function() {
    var expected = this.symbol.calculate(+this.number1, +this.number2);
    this.hasAnswer = true;
    this.correct = expected === +this.$.answer.value;

    if (this.correct) {
      this.fire('correct-answer');
    } else {
      this.refocusAnswer();
    }
  },
  clearAnswer: function() {
    this.$.answer.value = '';
  },
  created: function() {
    this.correct = false;
    this.hasAnswer = false;
  },
  operationChanged: function() {
    this.symbol = this.symbols[this.operation.toUpperCase()];
  },
  quitPractice: function() {
    this.fire('quit-practice');
  },
  refocusAnswer: function() {
    this.$.answer.focus();
    this.$.answer.select();
  }
});