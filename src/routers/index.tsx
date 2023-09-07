import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../page/App'
import Error from '../page/Error'
import Sell from '../page/Sell'
import Suporte from '../page/Suporte'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/vender" element={<Sell />} />
                <Route path="/suporte" element={<Suporte />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
