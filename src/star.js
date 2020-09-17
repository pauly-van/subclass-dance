var Star = function(top, left, timeBetweenSteps) {
  Dot.call(this, top, left, timeBetweenSteps);
  // genereate a number between 1 and 3
  var borderWidth = Math.random() * (2 - 1) + 1;
  // assign the border size
  this.$node.css('border-width', borderWidth + 'px');
  this.$node.css('border-radius', borderWidth + 'px');
};

Star.prototype = Object.create(Dot.prototype);
Star.prototype.constructor = Star;

Star.prototype.step = function(timeBetweenSteps){
  Dot.prototype.step.call(this, timeBetweenSteps);
  var currentColor = $('.dot').css('border-color');
  if (currentColor === 'rgb(255, 255, 255)') {
    this.$node.css("border-color", "rgb(119, 136, 153)");
  } else if (currentColor === 'rgb(119, 136, 153)') {
    this.$node.css("border-color", "rgb(255, 255, 255)");
  }
};
