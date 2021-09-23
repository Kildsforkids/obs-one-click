const { app, BrowserWindow, ipcMain } = require('electron')
const config = require('./config.json')

const OBS = require('./OBS')
const obs = new OBS(config.path.obs_path)

const windows = new Map()

if (require('electron-squirrel-startup')) {
    app.quit();
}

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: false
        },
        autoHideMenuBar: true,
        icon: './icon.png'
    })

    mainWindow.on('close', () => {
        if (process.platform !== 'darwin') {
            obs.close()
            app.quit()
        }
    })

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)

    windows.set('main', mainWindow)
}

const createGoogleWindow = (parent, link) => {
    const googleWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            devTools: false
        },
        autoHideMenuBar: true
    })

    googleWindow.loadURL(link)

    googleWindow.on('close', () => {
        windows.delete(link)
        parent.show()
    })

    windows.set(link, googleWindow)
}

const createControlPanel = (parent) => {
    // const x = Math.floor(screenres.get()[0] / 2)
    // const y = screenres.get()[1] - 50
    const controlPanel = new BrowserWindow({
        width: 800,
        height: 50,
        webPreferences: {
            devTools: false
        },
        frame: false,
        alwaysOnTop: true,
        opacity: 0.8,
        backgroundColor: '#353535'
    })

    controlPanel.show()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        obs.close()
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

ipcMain.on('start', async (event, arg) => {
    const mainWindow = windows.get('main')
    obs.run()
    mainWindow.hide()
    createGoogleWindow(mainWindow, arg)
})

ipcMain.on('stop', (event, arg) => {
    windows.get(arg)?.close()
    obs.close()
})
