var gameState = 0;
var contestantCount, contestant;
var database;
var quiz, question;

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 20);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw() {
  background("pink");
  
  if(playerCount === 4){
    game.update(1);
  }

}
