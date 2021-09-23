import React, { useState } from 'react'
import './MainPage.css'
import ChoiceContainer from '../components/ChoiceContainer.jsx'
import Settings from '../components/Settings.jsx'
import Toast from '../components/Toast.jsx'

function MainPage(props) {

    // const [toastMessage, setToastMessage] = useState('message')
    // const [toastProperties, setToastProperties] = useState({})
    // const [toasts, setToasts] = useState([
    //     {message: 'hello', duration: 2}
    // ])

    // function removeToast(index) {
    //     console.log(index)
    //     console.log(toasts.)
    // }

    return (
        <div className="content">
            <ChoiceContainer links={props.config.links}/>
            {/* <Settings /> */}
            {/* {toasts.map((toast, index) =>
                <Toast key={index} index={index} remove={index => removeToast(index)} {...toast} />
            )} */}
            {/* <Toast message={toastMessage} {...toastProperties} /> */}
        </div>
    )
}

export default MainPage