const fs = require('fs')

let boot = {}

boot.init = function () {
  this.scale.scaleMode = window.Phaser.ScaleManager.RESIZE
  this.stage.smoothing = false
  this.game.renderer.roundPixels = true
  window.Phaser.Canvas.setImageRenderingCrisp(this.game.canvas)
}

boot.preload = function() {
  let assetsNames = fs.readdirSync(`${__dirname}/../../assets/packs`)
  this.load.baseURL = `${__dirname}/../../assets/packs/`
  this.load.spritesheet('loading',)
  this.game.state.start('preload')
}

module.exports = boot