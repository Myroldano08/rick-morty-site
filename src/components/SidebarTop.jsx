
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import style from '../styles/Home.module.css'
import Favorites from './Favorites'

const SidebarTop = () => {
    return (
        <div className={style.home__right}>
            <Routes>
                <Route path={'/favorites/:ID'} exact={true} Component={Favorites} />   
            </Routes>
        </div>
    )
}

export default SidebarTop