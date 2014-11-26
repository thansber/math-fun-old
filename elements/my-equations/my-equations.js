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
    clear: function() {
      this.setAttribute('hidden', true);
    },
    generateEquation: function() {
      var number1 = this.randomNumber(this.minNumber, this.maxNumber),
          number2 = this.randomNumber(this.minNumber, this.maxNumber);
      this.operation = this.randomOperation();
      operations[this.operation].call(this, number1, number2);
    },
    maxChanged: function() {
      this.maxNumber = +this.max;
    },
    minChanged: function() {
      this.minNumber = +this.min;
    },
    nextEquation: function() {
      this.$.equation.clearAnswer();
      this.$.equation.refocusAnswer();
      this.generateEquation();
    },
    operationsChanged: function() {
      this.operationsArray = Array.isArray(this.operations) ? this.operations : [this.operations];
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
      return this.operationsArray[this.randomNumber(0, this.operationsArray.length - 1)];
    },
    start: function() {
      this.nextEquation();
      this.removeAttribute('hidden');
    }
  });
})();
