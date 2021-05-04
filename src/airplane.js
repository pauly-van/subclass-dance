var Airplane = function(top, left, timeBetweenSteps, airplaneDir) {
  Dot.call(this, top, left, timeBetweenSteps);
  this.airplaneDir = airplaneDir;
  this.$node.addClass('airplane');
  this.step();
  setInterval(()=>this.step(), timeBetweenSteps);
};

Airplane.prototype = Object.create(Dot.prototype);
Airplane.prototype.constructor = Airplane;

Airplane.prototype.step = function() {
  // Dot.prototype.step.call(this, timeBetweenSteps);
  var dirRadian = this.airplaneDir * Math.PI / 180;
  var xIncrement = 10 * Math.cos(dirRadian);
  var yIncrement = 10 * Math.sin(dirRadian);

  var currentX = this.$node.css('left');
  currentX = Number(String(currentX).slice(0, -2));
  var newX = currentX + xIncrement;
  var currentY = this.$node.css('top');
  currentY = Number(String(currentY).slice(0, -2));
  var newY = currentY + yIncrement;

  Dot.prototype.setPosition.call(this, newY, newX);
  this.$node.toggle();
};