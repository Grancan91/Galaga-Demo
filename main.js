let playField = document.getElementById('playfield')
let player = new Player(275, 650, playField)


function startGame() {

  player.inserPlayer()

  //Check Move function
  player.move()

}

startGame()