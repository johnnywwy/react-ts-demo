import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'normalize.css/normalize.css' // 重置浏览器样式

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
