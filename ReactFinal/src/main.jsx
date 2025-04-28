import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { FlightApp } from './FlightApp';
import { BrowserRouter } from 'react-router-dom'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <FlightApp />
    </StrictMode>,
  </BrowserRouter>
)