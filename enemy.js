function Enemy (x, y, playField, enemies) {
  let self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.direcction = 1
  this.speed = 10
  this.sprite = document.createElement('div')

  this.inserEnemy = function () {
    this.sprite.setAttribute('class', 'enemy')
    this.sprite.style.top = this.y + 'px'
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.width = this.width + 'px'
    this.sprite.style.height = this.height + 'px'

    playField.appendChild(this.sprite)
  }

  this.removeEnemy = function (index) {
    if(self.y >= 700 ){
      enemies.shift()
    } else {
      enemies.splice(index, 1)
    }
    clearInterval(this.enemyMoveInterval)
    playField.removeChild(this.sprite)
  }

  this.checkPlayerCollision = function () {
    if ( self.x < player.x + player.width &&
      self.y < player.y + player.height &&
      self.x + self.width > player.x &&
      self.y + self.height > player.y) {
      // collision detected!
      console.log('Catampum!')
      //self.removeEnemy()
      player.isDead = true
      }
  }

  this.move = function () {
    self.checkPlayerCollision()
    let newY = self.y + self.speed * self.direcction
    // Check playField limits
    // playField width : 600px
    // playField height : 700px
    let yBotLimit = 700 - self.height
    let yTopLimit = 0
    if(newY <= yBotLimit && newY >= yTopLimit){
      self.y = newY
      self.sprite.style.top = self.y + 'px'
      } else {
      self.removeEnemy()
      enemies.shift()  //Fix enemy remove on collisión with player
      }
  }

  this.enemyMoveInterval = setInterval(this.move, 100)

}