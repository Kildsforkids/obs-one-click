const { exec } = require('child_process')

class OBS {
    constructor(path = '') {
        this.path = path
    }

    setPath(path) {
        this.path = path
    }

    async run() {
        await exec(`start /d "${this.path}" obs64.exe --startvirtualcam --minimize-to-tray`)
    }

    close() {
        exec('taskkill /im obs64.exe /f')
    }
}

module.exports = OBS