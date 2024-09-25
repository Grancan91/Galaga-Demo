function Enemy (x, y, playField) {
  let self = this
  this.x = x
  this.y = y
  this.width = 50
  this.height = 50
  this.direcction = 0
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
}