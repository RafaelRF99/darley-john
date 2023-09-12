import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import AppRouter from './routers/index.tsx'

import MotoProvider from './data/contexts/motoContext.tsx'
import AuthProvider from './data/contexts/authContext.tsx'
import AlertProvider from './data/contexts/alertContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AlertProvider>
            <AuthProvider>
                <MotoProvider>
                    <AppRouter />
                </MotoProvider>
            </AuthProvider>
        </AlertProvider>
    </React.StrictMode>,
)
