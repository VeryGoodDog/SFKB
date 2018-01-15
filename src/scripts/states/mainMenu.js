const fs = require('fs')

let mainMenu = {}

let menu
let mouseIcon
let buttons = {}

mainMenu.preload = function () {
  let assetsNames = fs.readdirSync(`${__dirname}/../../assets/packs`)
  this.game.load.baseURL = `${__dirname}/../../assets/packs/`
  for (assetName of assetsNames) {
    this.game.load.pack(assetName.split('.')[0],assetName)
  }
}

mainMenu.create = function () {
  mouseIcon = this.game.add.sprite(0,0,'pointer')
  menu = this.game.add.sprite(0,0,'logo')
  buttons.startButton = this.game.make.sprite(0,0,'startButton')
  buttons.startButton.inputEnabled = true
  buttons.miles = this.game.make.sprite(100,100,'miles')
  menu.addChild(buttons.startButton)
  menu.addChild(buttons.miles)
}

mainMenu.update = function () {
  mouseIcon.bringToTop()
  mouseIcon.position = this.game.input.position
  if (buttons.startButton.input.pointerOver()) {
    buttons.startButton.tint = 0x9e9e9e
  } else {
    buttons.startButton.tint = 0xFFFFFF
  }
}


module.exports = mainMenu