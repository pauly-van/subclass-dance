var Airplane = function(top, left, timeBetweenSteps, airplaneDir) {
  Dot.call(this, top, left, timeBetweenSteps);
  this.airplaneDir = airplaneDir;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // call the old version of step at the beginning of any call to this new version of step
  this.$node.addClass('airplane');
  $(".airplane").css('border-color', 'rgb(255, 0, 0)');
};

Airplane.prototype = Object.create(Dot.prototype);
Airplane.prototype.constructor = Airplane;

Airplane.prototype.step = function(timeBetweenSteps) {
  Dot.prototype.step.call(this, timeBetweenSteps);
  var dirRadian = this.airplaneDir * Math.PI/180;
  var xIncrement = 30 * Math.cos(dirRadian);
  var yIncrement = 30 * Math.sin(dirRadian);

  var currentX = this.$node.css('left');
  currentX = Number(String(currentX).slice(0, -2));
  var newX = currentX + xIncrement;
  var currentY = this.$node.css('top');
  currentY = Number(String(currentY).slice(0, -2));
  var newY = currentY + yIncrement;
  $('.dot.airplane').css('transition-duration', '1s');
  $('.dot.airplane').css('transform', 'translate(1500px, 0)');
  console.log(newX);
  Dot.prototype.setPosition.call(this, newX, newY);
  // this.$node.toggle();
};