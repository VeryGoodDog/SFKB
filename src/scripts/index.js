const fs = require('fs')
const electron = require('electron')
const { webFrame } = electron

webFrame.setLayoutZoomLevelLimits(1,1)
webFrame.setVisualZoomLevelLimits(1,1)
webFrame.setZoomFactor(1)

window.PIXI = require('phaser-ce/build/custom/pixi.js')
window.p2 = require('phaser-ce/build/custom/p2.js')
window.Phaser = require('phaser-ce/build/custom/phaser-split.js')

let game = new window.Phaser.Game({
  width: window.innerWidth,
  height: window.innerHeight,
  renderer: window.Phaser.WEBGL,
  parent: 'game-div',
  antialias: false
})

let statesDir = `${__dirname}/states`
let states = fs.readdirSync(statesDir)

for (state of states) {
  state = state.split('.')[0]
  game.state.add(state, require(`./states/${state}.js`))
}

game.state.start('boot')