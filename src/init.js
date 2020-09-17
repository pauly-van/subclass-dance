$(document).ready(function() {
  window.dots = [];

  $('.button.shootingStar').on('click', function(event) {
    var dotMakerFunctionName = $(this).data('dot-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dotMakerFunction = window[dotMakerFunctionName];

    // make a dancer with a random position

    var dot = new dotMakerFunction(
      $('body').height() * Math.random() * (1 - 0.25) + 0.25,
      $('body').width() * Math.random(),
      Math.floor(Math.random() * (4000 - 1000 + 1) + 1000)
    );
    $('body').append(dot.$node);
  });

  $('.button.airplane').on('click', function(event) {
    var dotMakerFunctionName = $(this).data('dot-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dotMakerFunction = window[dotMakerFunctionName];
    const right = $('body').width() - 40;
    var leftRight = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    var secondArg = leftRight === 0 ? 0 : right;
    
    var airplaneDir;
    if (leftRight === 0) {
      airplaneDir = Math.floor(Math.random() * (90 - (-90) + 1) + (-90));
    } else {
      airplaneDir = Math.floor(Math.random() * (270 - 90 + 1) + 90);
    }

    // make a dancer with a random position
    var dot = new dotMakerFunction(
      $('body').height() * Math.random() * (1 - 0.25) + 0.25,
      secondArg,
      1500,
      airplaneDir
    );
    $('body').append(dot.$node);
  });

  $('.button.stars').on('click', function(event) {
    var dotMakerFunctionName = $(this).data('dot-maker-function-name');
    var dotMakerFunction = window[dotMakerFunctionName];

    for (let i = 0; i < 750; i++) {
      var dot = new dotMakerFunction(
        $('body').height() * Math.random() * (1 - 0.25) + 0.25,
        $('body').width() * Math.random(),
        Math.floor(Math.random() * (4000 - 1000 + 1) + 1000)
      );
      $('body').append(dot.$node);
    }
  });
});

