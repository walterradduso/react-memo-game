import React from 'react'
import ReactDOM from 'react-dom/client'

import { Memo } from './components/Memo'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Memo />
  </React.StrictMode>,
)
