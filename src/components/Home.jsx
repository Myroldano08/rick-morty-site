import style from '../styles/Home.module.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Search from './Search'
import React, { useState } from 'react'
import { useContext } from 'react';

const ThemeContext = React.createContext();

export default function Home(){
    const [theme, setTheme] = useState(false)

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={style.home__content}>
                <div className={`${style.home__left} ${ false ? style.home__left_active : ''}`}>
                    <Search />
                    <Sidebar />
                </div>
                <div  className={`${style.home__right} ${ false ? style.home__right_active : ''}`}>
                    <Content /> 
                </div>
            </div>
        </ThemeContext.Provider>
    )
}