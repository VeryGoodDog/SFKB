const electron = require('electron')
const { app, BrowserWindow } = electron

let win

app.on('ready',() => {
  win = new BrowserWindow()
  win.maximize()
  win.openDevTools({mode:'undocked'})
  win.loadURL(`file://${__dirname}/src/page/index.html`)
})

app.on('win-all-closed',() => {
  app.quit()
})