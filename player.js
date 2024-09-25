function Player(x, y, playField) {
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  //this.direction = 0
  this.direcction = 1 //Check Move
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
    let newX = this.x + this.speed * this.direcction
    // Check playField limits
    // playField width : 600px
    // playField height : 800px
    let xRightLimit = 600 - this.width
    let xLeftLimit = 0
    if(newX <= xRightLimit && newX >= xLeftLimit){
      this.x = newX
      this.sprite.style.left = this.x + 'px'
      }

  }
}