var makeDiscoDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeDiscoDancer.prototype = Object.create(makeDancer.prototype);
makeDiscoDancer.prototype.constructor = makeDiscoDancer;

makeDiscoDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var currentColor = $('.dancer').css('border-color');
  if (currentColor === 'rgb(255, 0, 0)') {
    this.$node.css('border-color', 'blue');
  } else if (currentColor === 'rgb(0, 0, 255)') {
    this.$node.css('border-color', 'red');
  }
};