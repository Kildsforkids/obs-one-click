import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

const config = require('./config.json')

ReactDOM.render(
    <App config={config} />,
    document.getElementById('App')
)
