let boot = {}

boot.init = function () {
  this.game.scale.scaleMode = window.Phaser.ScaleManager.USER_SCALE
  this.game.scale.setUserScale(3,3)
  window.Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
}

boot.preload = function() {
  this.game.state.start('preload')
}

module.exports = boot