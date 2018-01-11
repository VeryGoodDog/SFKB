const electron = require('electron')
const { app, BrowserWindow } = electron

let win

app.on('ready',() => {
  win = new BrowserWindow([500,500])
  win.loadURL(`file://${__dirname}/index.html`)
})

app.on('win-all-closed',() => {
  app.quit()
})