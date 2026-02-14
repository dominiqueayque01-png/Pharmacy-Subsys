const { app, BrowserWindow } = require('electron')
const path = require('path') // <--- Add this at the top

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false // often needed for simple migrations
    }
  })

  // This tells Electron: Go up one level (..), into frontend, into html, find index.html
  // Make sure your main html file is actually named 'index.html'
  win.loadFile(path.join(__dirname, '../frontend/html/index.html')) 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})