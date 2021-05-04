var ShootingStar = function(top, left) {
  var shootingStarDir = Math.floor(Math.random() * (350 - (190) + 1) + (190)) * Math.PI / 180;
  // var timeBetweenSteps Math.floor(Math.random() * (4000 - 1000 + 1) + 1000);
  var trails = [];
  var xIncrement = 6 * Math.cos(shootingStarDir);
  var yIncrement = 6 * Math.sin(shootingStarDir);
    
  (function myLoop(i) {
    setTimeout(function() {
      top = top - yIncrement;
      left = left - xIncrement;
      var dot = new Dot(top, left);
      trails.unshift(dot);
      if (trails.length === 300) {
        trails.pop().$node.remove();
      }

      for (let j = 1; j < trails.length; j++) {
        var currentSize = trails[j].$node.css('border-width');
        currentSize = Number(String(currentSize).slice(0, -2));
        var newSize = currentSize * (1 - j / 600);
        trails[j].$node.css('border-width', newSize + 'px');
        trails[j].$node.css('border-radius', newSize + 'px');
      }

      $('body').append(dot.$node);
      if (--i) { myLoop(i); }
    }, 5);
  })(500);
  

  // define the distance/length of longest traveling point 
  // create a container to hold shooting star trail
  // store all positions into container
  // once length is at max
  // remove first item in container in 'queue' structure FIFO

};

ShootingStar.prototype = Object.create(Dot.prototype);
ShootingStar.prototype.constructor = ShootingStar;

ShootingStar.prototype.step = function(timeBetweenSteps) {
  // Dot.prototype.step.call(this, timeBetweenSteps);
  // var currentSize = $('.dot').css('border-width');
  // currentSize = Number(String(currentSize).substring(0, 2));
  // currentSize++;
  // this.$node.css('border-width', currentSize + 'px');
  // this.$node.css('border-radius', currentSize + 'px');
};