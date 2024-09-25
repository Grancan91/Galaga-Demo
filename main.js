let playField = document.getElementById('playfield')
let player = new Player(275, 650, playField)
let enemies = []

let playerMoveInterval
let enemiesCreateInterval

function startGame() {

  player.inserPlayer()

  playerMoveInterval = setInterval(player.move, 50)

  enemiesCreateInterval = setInterval(createEnemies, 2000)
  
}

function createEnemies() {
  // Math.random -> create number between 0 and 0.99
  // with * 10 -> number between 0 and 9.9
  // with floor -> round -> 0 and 9
  // with * 50 we have X coords.
  let randomX = Math.floor(Math.random() * 10) * 50
  let enemy = new Enemy(randomX, 20, playField, enemies)
  enemy.inserEnemy()
  //Logic for multy Enemies
  enemies.push(enemy)
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

