import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import OpenGraph from './components/OpenGraph'
import content from '../content.json'
// import cover from './img/cover.jpg'

ReactDOM.render(
  <React.StrictMode>
    <OpenGraph title={content.title} description={content.description} image={image} path={content.path} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
