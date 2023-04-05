import style from '../styles/Home.module.css'
import Sidebar from './Sidebar'
import Content from './Content'
import Search from './Search'
import React, { useState, useEffect } from 'react'
import Mycontext from '../context/contextActive.jsx'
import { Provider } from 'react-redux';

export default function Home(){
    const [stateValue, setStateValue] = useState(false);

    const updateStateValue = (newValue) => {
        setStateValue(newValue);
    };

    return(
        <Mycontext.Provider value={{ contextValue: stateValue, setContextValue: updateStateValue }}>
            <article title='home__content'></article>
            <div className={style.home__content}>
                <div className={`${style.home__left} ${ stateValue ? style.home__left_active : ''}`}>
                    <Search />
                    <Sidebar />
                </div>
                <div  className={`${style.home__right} ${ stateValue ? style.home__right_active : ''}`}>
                    <Content /> 
                </div>
            </div>
        </Mycontext.Provider>
    )
}