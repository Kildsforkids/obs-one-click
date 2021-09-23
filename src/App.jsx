import React from 'react'
import './App.css'
// import LoginPage from './pages/LoginPage.jsx'
import MainPage from './pages/MainPage.jsx'

function App(props) {
    return (
        <MainPage config={props.config} />
    )
}

export default App
