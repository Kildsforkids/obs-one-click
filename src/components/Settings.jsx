import React, { useState } from 'react'
import './Settings.css'

function Settings() {

    const [hide, setHide] = useState(true)

    function showSettings() {
        setHide(false)
    }

    function hideSettings() {
        setHide(true)
    }

    return (
        <div className="settings">
            <div className={'settings__show ' + (hide ? '' : 'hide')}>
                <button onClick={showSettings}>Settings</button>
            </div>
            <div className={'settings__panel ' + (hide ? 'hide' : '')}>
                <div className="settings__close">
                    <button onClick={hideSettings}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Settings