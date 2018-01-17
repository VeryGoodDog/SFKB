let preload = {}

preload.preload = function() {
  this.load.onFileComplete.add(function () {

  })
  this.load.enableParallel = false
  this.load.pack('everything','everything.json')
}

preload.create = function () {
  this.state.start('mainMenu')
}

module.exports = preload