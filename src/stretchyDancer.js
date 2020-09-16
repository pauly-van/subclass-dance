var makeStretchyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeStretchyDancer.prototype = Object.create(makeDancer.prototype);
makeStretchyDancer.prototype.constructor = makeStretchyDancer;

makeStretchyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
  var currentSize = $('.dancer').css('border-width');
  currentSize = Number(String(currentSize).substring(0, 2));
  currentSize++;
  this.$node.css('border-width', currentSize + 'px');
  this.$node.css('border-radius', currentSize + 'px');
};