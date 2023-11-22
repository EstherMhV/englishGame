document.addEventListener('DOMContentLoaded', function () {
  var cube = document.getElementById('cube');

  cube.onclick = function () {
    console.log('cube clicked');
    var min = 5;
    var max = 16;

    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    cube.style.transform = 'rotateX(' + xRand + 'deg) rotateY(' + yRand + 'deg)';


  };

  function getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }
});