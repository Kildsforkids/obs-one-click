import React from 'react'
import './Toast.css'

function Toast({ message, duration, ...props }) {

    setTimeout(() => {
        props.remove(props.index)
    }, duration * 1000)

    return (
        <div className="toast fade-out">
            <div className="toast__close">
                <button>Close</button>
            </div>
            <div className="toast__message">
                {message}
            </div>
        </div>
    )
}

export default Toast