// Game variables
let player;           // Player sprite
let football;         // Football sprite
let goalLine;         // Goal line sprite for scoring
let playerSpeed = 5;  // Speed at which the player moves
let footballSpeed = 7; // Speed at which the football moves when thrown
let score = 0;        // The player's score
let isFootballThrown = false; // Boolean to track if the football has been thrown
let throwDirection = 0; // Direction of football throw (0 means no throw, 1 means pass to the right)

// Setup function: Initializes the game, sprites, and game state
function setup() {
  createCanvas(600, 400);  // Create the canvas (600x400 px)
  
  // Initialize player sprite at the bottom center of the canvas
  player = createSprite(width / 2, height - 30, 40, 40); 
  
  // Initialize football sprite, initially placed just above the player
  football = createSprite(player.position.x, player.position.y - 20, 20, 20);
  football.visible = false; // Make the football invisible until thrown
  
  // Initialize goal line on the right side of the field
  goalLine = createSprite(width - 30, height / 2, 10, height); // Goal line is at the right edge
  
  // Reset the game (score, position)
  resetGame();
}

// Draw function: This is the main game loop that updates every frame
function draw() {
  background(34, 139, 34); // Grass color for the field
  
  // Handle player movement based on arrow keys
  handlePlayerMovement();
  
  // If the football has been thrown, update its position
  if (isFootballThrown) {
    moveFootball();
  }
  
  // Check if the football has crossed the goal line (scoring)
  checkGoal();
  
  // Display the current score
  displayScore();
  
  // Draw all sprites (player, football, goal line)
  drawSprites();
}

// Function to handle player movement (left/right)
function handlePlayerMovement() {
  // Move player left with the left arrow key
  if (keyIsDown(LEFT_ARROW)) {
    player.position.x -= playerSpeed;
  }
  
  // Move player right with the right arrow key
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x += playerSpeed;
  }
}

// Function to move the football when it is thrown
function moveFootball() {
  football.visible = true; // Make football visible once thrown
  football.position.x += throwDirection * footballSpeed; // Move the football to the right or left based on throw direction
  
  // Stop football when it goes off the screen (left or right)
  if (football.position.x > width || football.position.x < 0) {
    resetFootball(); // Reset the football if it goes out of bounds
  }
}

// Function to check if the football has crossed the goal line to score
function checkGoal() {
  // Check if the football collides with the goal line on the right
  if (football.collide(goalLine)) {
    score++; // Increment the score
    resetFootball(); // Reset the football and its position after scoring
  }
}

// Function to reset the football position after scoring or going out of bounds
function resetFootball() {
  isFootballThrown = false;  // Set football thrown flag to false
  football.visible = false;  // Make the football invisible
  football.position.x = player.position.x;  // Position the football above the player
  football.position.y = player.position.y - 20;
}

// Function to handle key press events, specifically throwing the football
function keyPressed() {
  // If spacebar is pressed and football hasn't been thrown yet
  if (keyCode === 32 && !isFootballThrown) {
    isFootballThrown = true;  // Mark the football as thrown
    throwDirection = 1;       // Throw the football to the right
  }
}

// Function to display the current score on the screen
function displayScore() {
  textSize(32);  // Set text size to 32px
  fill(255);     // Set text color to white
  textAlign(RIGHT); // Align the text to the right
  text("Score: " + score, width - 20, 40); // Display the score in the top-right corner
}

// Function to reset the game state (score, player position, football)
function resetGame() {
  score = 0;  // Reset score to 0
  player.position.x = width / 2;  // Reset player position to the center
  player.position.y = height - 30;  // Reset player vertical position
  
  resetFootball();  // Reset the football
}
