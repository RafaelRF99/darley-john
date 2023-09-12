import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRouter from './routers/index.tsx'

import MotoProvider from './data/contexts/motoContext.tsx'
import AuthProvider from './data/contexts/authContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AuthProvider>
            <MotoProvider>
                <AppRouter />
            </MotoProvider>
        </AuthProvider>
    </React.StrictMode>,
)
