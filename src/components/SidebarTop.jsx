
import { Routes, Route, useLocation, useNavigate, Router } from 'react-router-dom'
import style from '../styles/Home.module.css'
import Favorites from './Favorites'

const SidebarTop = () => {
    return (
        <div className={style.home__right}>
            <Router>
                <Routes>
                    <Route path={'/favorites/:ID'} exact={true} element={<Favorites />} />   
                </Routes>
            </Router>
        </div>
    )
}

export default SidebarTop