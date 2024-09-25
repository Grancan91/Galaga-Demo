function Bullet (x, y, playField, enemies) {
  let self = this
  this.x = x
  this.y = y
  this.width = 5
  this.height = 5
  this.direcction = -1
  this.speed = 30
  this.sprite = document.createElement('div')

  this.insertBullet = function () {
    this.sprite.setAttribute('class', 'bullet')
    this.sprite.style.top = this.y + 'px'
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.width = this.width + 'px'
    this.sprite.style.height = this.height + 'px'

    playField.appendChild(this.sprite)
  }

  this.move = function () {
    //self.checkPlayerCollision()
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
        self.removeBullet()
      }
  }

  this.removeBullet = function() {
    clearInterval(self.bulletMoveInterval)
    playField.removeChild(self.sprite)
  }

  this.bulletMoveInterval = setInterval(this.move, 100)
}
