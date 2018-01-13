const fs = require('fs')

let preload = {}

let imageAtlasDir = `${__dirname}/../../images`
let imageAtlas = fs.readdirSync(imageAtlasDir)

preload.create = function() {
  for (atlasName of imageAtlas) {
    this.game.load.atlasJSONHash(atlasName,`src/images/${atlasName}.json`,null,this)
  }

  this.game.state.start('main-menu')
}


module.exports = preload