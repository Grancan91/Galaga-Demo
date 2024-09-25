function Bullet (x, y, playField, enemies) {
  let self = this
  this.x = x
  this.y = y
  this.width = 5
  this.height = 5
  this.direcction = 1
  this.speed = 10
  this.sprite = document.createElement('div')

  this.insertBullet = function () {
    this.sprite.setAttribute('class', 'bullet')
    this.sprite.style.top = this.y + 'px'
    this.sprite.style.left = this.x + 'px'
    this.sprite.style.width = this.width + 'px'
    this.sprite.style.height = this.height + 'px'

    playField.appendChild(this.sprite)
  }

}
