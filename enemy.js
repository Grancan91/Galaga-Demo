function Enemy (x, y, playField) {
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

  this.move = function () {
    let newY = self.y + self.speed * self.direcction
    // Check playField limits
    // playField width : 600py
    // playField height : 800px
    let yBotLimit = 800 - self.width
    let yTopLimit = 0
    if(newY <= yBotLimit && newY >= yTopLimit){
      self.y = newY
      self.sprite.style.top = self.y + 'px'
      }

  }

  this.enemyMoveInterval = setInterval(this.move, 300)
}