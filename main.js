let playField = document.getElementById('playfield')
let player = new Player(275, 650, playField)


function startGame() {

  player.inserPlayer()


}

window.addEventListener('keydown', function(event) {
  console.log(event.key)
  switch (event.key) {
    case 'a':
      player.direcction = -1
      player.move()
      break;
    
    case 'd':
      player.direcction = 1
      player.move()
      break;
  }
})


startGame()

