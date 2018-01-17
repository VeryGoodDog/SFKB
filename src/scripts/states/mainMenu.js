let mainMenu = {}

let menu
let mouseIcon
let buttons = {}

mainMenu.create = function () {
  menu = this.add.sprite(0,0,'logo')
  menu.anchor.setTo(0.5,0.5)
  buttons.startButton = this.game.make.sprite(0,0,'startButton')
  buttons.startButton.inputEnabled = true
  menu.addChild(buttons.startButton)
  mouseIcon = this.add.sprite(0,0,'pointer')
}

mainMenu.update = function () {
  mouseIcon.position = this.game.input.position

  if (buttons.startButton.input.pointerOver()) {
    if (buttons.startButton.input.pointerDown()) {
      buttons.startButton.frame = 1
    } else {
      buttons.startButton.frame = 0
    }
  } else {
    buttons.startButton.frame = 0
  }
}


module.exports = mainMenu