import { createContext, useState, ReactNode } from 'react'

interface authContextProps {
    alert: boolean
    handleAlert: (value: boolean) => void
}

export const AlertContext = createContext<authContextProps>(null!)

export default function AlertProvider({ children }: { children: ReactNode }) {
    const [alert, setAlert] = useState(false)

    function handleAlert(value: boolean) {
        setAlert(alert !== value ? !alert : false)
    }

    return (
        <AlertContext.Provider value={{ alert, handleAlert }}>
            {children}
        </AlertContext.Provider>
    )
}
