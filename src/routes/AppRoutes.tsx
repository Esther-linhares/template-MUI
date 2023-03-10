import react from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const AppRoutes: react.FC = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='./' element={<h1>home</h1>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes