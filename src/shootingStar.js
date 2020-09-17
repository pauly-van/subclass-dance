var ShootingStar = function(top, left, timeBetweenSteps) {
  Dot.call(this, top, left, timeBetweenSteps);
};

ShootingStar.prototype = Object.create(Dot.prototype);
ShootingStar.prototype.constructor = ShootingStar;

ShootingStar.prototype.step = function(timeBetweenSteps) {
  Dot.prototype.step.call(this, timeBetweenSteps);
  var currentSize = $('.dot').css('border-width');
  currentSize = Number(String(currentSize).substring(0, 2));
  currentSize++;
  this.$node.css('border-width', currentSize + 'px');
  this.$node.css('border-radius', currentSize + 'px');
  // $('.dot.airplane').css('transition-duration', '1s');
  // $('.dot.airplane').css('transform', 'translate(1500px, 0)');
};