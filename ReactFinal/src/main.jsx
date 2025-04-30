import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { ViajesApp } from './ViajesApp';
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ViajesApp />
    </StrictMode>,
  </BrowserRouter>
)