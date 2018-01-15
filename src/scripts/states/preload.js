const fs = require('fs')

let preload = {}

preload.preload = function() {
  this.game.state.start('mainMenu')
}

module.exports = preload