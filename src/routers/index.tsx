import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../page/App'
import Error from '../page/Error'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}
