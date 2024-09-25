let playField = document.getElementById('playfield')
let player = new Player(275, 650, playField)
let playerMoveInterval

function startGame() {

  player.inserPlayer()
  
  playerMoveInterval = setInterval(player.move, 50)

}

window.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'a':
      player.direcction = -1
      break;
    
    case 'd':
      player.direcction = 1
      break;
  }
})

window.addEventListener('keyup', function(event) {
  player.direcction = 0
})


startGame()

