import style from '../styles/Home.module.css'
import { BrowserRouter as Roter, Routes, Route } from 'react-router-dom'

import Sidebar from './Sidebar'
import SidebarTop from './SidebarTop'
import Content from './Content'
import Search from './Search'
import Favorites from './Favorites'

export default function Home(){
    return(
        <div className={style.home__content}>
            <div className={style.home__left}>
                <Search />
                <Sidebar />
            </div>
            <div className={style.home__right}>
                <Content /> 
            </div>
        </div>
    )
}