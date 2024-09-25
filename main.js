let playField = document.getElementById('playfield')
let startView = document.getElementById('start')
let gameOverView = document.getElementById('game-over')
let startButton = document.getElementById('btn-start')
let restartButton = document.getElementById('btn-restart')

let player
let enemies = []

let playerMoveInterval
let enemiesCreateInterval

function startGame() {
  startView.style.display = 'none'
  playField.style.display = 'block'
  gameOverView.style.display = 'none'


  player = new Player(275, 650, playField)
  player.inserPlayer()

  playerMoveInterval = setInterval(playerMove, 50)
  enemiesCreateInterval = setInterval(createEnemies, 2000)
  
}

function playerMove() {

  if(player.isDead === false){
    player.move()
  } else {
    clearInterval(playerMoveInterval)
    playField.removeChild(player.sprite)
    clearInterval(enemiesCreateInterval)
    enemies.forEach(function(enemy){
      clearInterval(enemy.enemyMoveInterval)
      playField.removeChild(enemy.sprite)
    })
    enemies = []
    startView.style.display = 'none'
    playField.style.display = 'none'
    gameOverView.style.display = 'block'
    //window.alert('Game Over!')
  }

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

startButton.addEventListener('click', function(){
  startGame()
})

restartButton.addEventListener('click', function(){
  startGame()
})

window.addEventListener('keydown', function(event) {
  switch (event.key) {
    case 'a':
      player.direcction = -1
      break;
    
    case 'd':
      player.direcction = 1
      break;
a
      case ' ':
        let bulletInitialPos = player.x + player.width / 2
        let bullet = new Bullet(bulletInitialPos, 640, playField, enemies)
        bullet.insertBullet()
        break;
  }
})

window.addEventListener('keyup', function(event) {
  player.direcction = 0
})





