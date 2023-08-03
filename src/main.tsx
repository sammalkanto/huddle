import React from 'react'
import ReactDOM from 'react-dom/client'
import Huddle from "./components/Huddle.tsx";
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Huddle />
  </React.StrictMode>,
)
