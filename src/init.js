$(document).ready(function() {
  window.dots = [];
  $(document).on('click', '.stars', function(event) {
    var startTop = event.clientY;
    var startLeft = event.clientX;  
    new ShootingStar(startTop, startLeft);
  });

  $('.button-shootingStar').on('click', function(event) {
    var dotMakerFunctionName = $(this).data('dot-maker-function-name');
    var dotMakerFunction = window[dotMakerFunctionName];
    
    var startTop = $('body').height() * Math.random() * (0.8 - 0.6) + 0.6;
    var startLeft = $('body').width() * Math.random();  
    new dotMakerFunction(startTop, startLeft);
  });

  $('.button-airplane').on('click', function(event) {
    var dotMakerFunctionName = $(this).data('dot-maker-function-name');
    var dotMakerFunction = window[dotMakerFunctionName];
    const right = $('body').width() - 6;
    var leftRight = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    var secondArg = leftRight === 0 ? 0 : right;
    
    var airplaneDir;
    if (leftRight === 0) {
      airplaneDir = Math.floor(Math.random() * (90 - (-90) + 1) + (-90));
    } else {
      airplaneDir = Math.floor(Math.random() * (270 - 90 + 1) + 90);
    }

    var dot = new dotMakerFunction(
      $('body').height() * Math.random() * (1 - 0.25) + 0.25,
      secondArg,
      1000,
      airplaneDir
    );
    $('body').append(dot.$node);
  });

  $('.button-stars').on('click', function(event) {
    var dotMakerFunctionName = $(this).data('dot-maker-function-name');
    var dotMakerFunction = window[dotMakerFunctionName];

    for (let i = 0; i < 750; i++) {
      var dot = new dotMakerFunction(
        $('body').height() * Math.random() * (1 - 0.2) + 0.2,
        $('body').width() * Math.random(),
        Math.floor(Math.random() * (4000 - 1000 + 1) + 1000)
      );
      window.dots.push(dot.$node);
      $('body').append(dot.$node);
    }
    for (let i = 0; i < window.dots.length; i++) {
      var height = window.dots[i].css('top');
      height = Number(String(height).slice(0, -2));
      if (height > 750) {
        window.dots[i].addClass('lowStars');
      }
    }
  });
});

