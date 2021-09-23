import React, { useState } from 'react'
import './ChoiceContainer.css'
import ChoiceContainerItem from './ChoiceContainerItem.jsx'

const { ipcRenderer } = window.require('electron')

function ChoiceContainer({ links }) {

    const [items, setItems] = useState([
        {title: 'Google Meet', link: links.google_meet, preview: 'google_meet', active: false},
        {title: 'VooV Meeting', link: 'voov_meeting', preview: 'voov_meeting', active: false, disabled: true}
    ])

    function handleClick(index) {
        const copyItems = items.slice()
        const item = copyItems[index]
        if (item.active) {
            stop(item.link)
        } else {
            start(item.link)
        }
        item.active = !item.active
        setItems(copyItems)
    }

    async function stop(link) {
        try {
            ipcRenderer.send('stop', link)
        } catch (error) {
            console.error(error)
        }
    }

    async function start(link) {
        try {
            ipcRenderer.send('start', link)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="choice-container">
            {items.map((item, index) =>
                <ChoiceContainerItem key={index} index={index} {...item} onClick={index => handleClick(index)} />
            )}
        </div>
    )
}

export default ChoiceContainer