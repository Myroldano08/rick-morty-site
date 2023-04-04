
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Details from './Details'
import style from '../styles/Home.module.css'
import Favorites from './Favorites'

const Content = () => {
    return (
        // <div className={style.home__right}>
            <Routes>
                <Route path={'/detail/:ID'} exact={true} Component={Details} />   
            </Routes>
        // </div>
    )
}

export default Content