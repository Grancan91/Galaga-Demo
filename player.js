function Player(x, y, playField) {
  let self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.direcction = 0
  this.speed = 10
  this.sprite = document.createElement('div')

  this.inserPlayer = function () {
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.top = this.y + 'px'
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.width = this.width + 'px'
    this.sprite.style.height = this.height + 'px'

    playField.appendChild(this.sprite)
  }

  this.move = function () {
    let newX = self.x + self.speed * self.direcction
    // Check playField limits
    // playField width : 600px
    // playField height : 800px
    let xRightLimit = 600 - self.width
    let xLeftLimit = 0
    if(newX <= xRightLimit && newX >= xLeftLimit){
      self.x = newX
      self.sprite.style.left = self.x + 'px'
      }

  }
}