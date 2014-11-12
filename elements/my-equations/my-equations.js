(function() {
  var operations = {
    addition: function(number1, number2) {
      this.number1 = number1;
      this.number2 = number2;
    },
    subtraction: function(number1, number2) {
      this.number1 = Math.max(number1, number2);
      this.number2 = Math.min(number1, number2);
    }
  };
  Polymer('my-equations', {
    generateEquation: function() {
      var number1 = this.randomNumber(this.min, this.max),
          number2 = this.randomNumber(this.min, this.max);
      this.operation = this.randomOperation();
      operations[this.operation].call(this, number1, number2);
    },
    nextEquation: function() {
      this.$.equation.clearAnswer();
      this.generateEquation();
    },
    publish: {
      min: 1,
      max: 20,
      operations: []
    },
    randomNumber: function(min, max) {
      return Math.floor(Math.random() * (max + 1 - min)) + min;
    },
    randomOperation: function() {
      return this.operations[this.randomNumber(0, this.operations.length - 1)];
    },
    ready: function() {
      this.generateEquation();
    }
  });
})();
