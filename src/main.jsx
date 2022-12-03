import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import OpenGraph from './components/OpenGraph'
ReactDOM.render(
  <React.StrictMode>
    <OpenGraph />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
