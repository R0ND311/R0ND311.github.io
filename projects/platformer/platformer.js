$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(150, 700, 50, 10);
createPlatform(250, 580, 50, 10);
createPlatform(150, 460, 50, 10);
createPlatform(250,360, 50, 10);
createPlatform(150, 260, 50, 10);
createPlatform(550, 400, 50, 10);
createPlatform(360, 300, 50, 10);
createPlatform(700, 400, 50, 10);
createPlatform(900, 200, 50, 10);
createPlatform(800, 100, 50, 10);
createPlatform(1000,455, 50, 10);
createPlatform(1050, 300, 50, 10);
createPlatform(1080, 500, 50, 10);
createPlatform(353, 300, 50, 10);
createPlatform(800, 550, 50, 10);
createPlatform(850, 450, 50, 10);
createPlatform(1100, 645, 50, 10);
createPlatform(975, 245, 50, 10);
createPlatform(1300, 300 , 50 ,10);


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)


createCollectable('diamond', 150, 410, 5, 1); 
createCollectable('grace', 700, 300, 5, 1);
createCollectable('max', 800, 70, 5, 1);
createCollectable('kennedi', 1060, 30, 5, 1)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

createCannon('bottom', 300, 600)
createCannon('right', 750, 1000)
createCannon('top', 750, 899)


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
}

  registerSetup(setup);
});
