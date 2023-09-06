import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../page/App'
import Error from '../page/Error'
import Sell from '../page/Sell'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/vender" element={<Sell />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
