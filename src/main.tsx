import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRouter from './routers/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
)
