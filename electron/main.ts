import { app, BrowserWindow } from 'electron'
import path from 'path'
import 'dotenv/config';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  })
  const url = process.env.VITE_DEV_SERVER_URL ||
              `file://${path.join(__dirname, '../dist/index.html')}`
  win.loadURL(url)
}
app.whenReady().then(createWindow)
