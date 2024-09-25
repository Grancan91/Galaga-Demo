function Player(x, y, playField) {
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.direcction = 0
  this.speed
  this.sprite = document.createElement('div')

  this.inserPlayer = function () {
    this.sprite.setAttribute('id', 'player')
    this.sprite.style.top = this.y + 'px'
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.width = this.width + 'px'
    this.sprite.style.height = this.height + 'px'

    playField.appendChild(this.sprite)
  }
}