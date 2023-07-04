import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from './ConfigProvider'
import App from './App.jsx'
import './index.css'

const application = <React.StrictMode>
  <BrowserRouter>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </BrowserRouter>
</React.StrictMode>;

ReactDOM.createRoot(document.getElementById('root')).render(
  application,
)
