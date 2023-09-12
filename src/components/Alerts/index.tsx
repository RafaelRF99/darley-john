import { Alert } from '@mui/material'

import { useEffect } from 'react'
import { useAlert } from '../../data/hooks/useAlert'

interface AlertsProps {
    severity: 'success' | 'warning' | 'error'
    msg: string
}

export default function Alerts({ severity, msg }: AlertsProps) {
    const { alert, handleAlert } = useAlert()

    useEffect(() => {
        setTimeout(() => {
            handleAlert(false)
        }, 2000)
    }, [alert])

    return (
        <>
            {alert ? (
                <div className="absolute bottom-10 right-10">
                    <Alert variant="filled" severity={severity}>
                        {msg}
                    </Alert>
                </div>
            ) : (
                ''
            )}
        </>
    )
}
