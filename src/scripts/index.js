const fs = require('fs')

window.PIXI = require( 'phaser-ce/build/custom/pixi.js' )
window.p2 = require( 'phaser-ce/build/custom/p2.js' )
window.Phaser = require( 'phaser-ce/build/custom/phaser-split.js' )

let game = new window.Phaser.Game({
  width: window.innerWidth,
  height: window.innerHeight,
  renderer: window.Phaser.WEBGL,
  antialias: false,
  parent: 'game-div'
})


let statesDir = `${__dirname}/states`
let states = fs.readdirSync(statesDir)

for (state of states) {
  game.state.add(state, require(`./states/${state}.js`))
}
game.state.start('boot')