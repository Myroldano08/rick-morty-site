import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from '../styles/Home.module.css'
import Favorites from './Favorites'
import Filter from './Filter'

export default function Search() {
    const [ isOpen, setIsOpen] = useState(false);

    const handleFilter = (isOpen)=>{
        if(isOpen){
            setIsOpen(true);
        }else{
            setIsOpen(false);
        }
    }

    return (
        <div className={style.search}>
            <h1 className={style.search__title}>Rick and Morty list</h1>
            <div className={style.search__content}>
                {/* <i className={style.icon_search}></i> */}
                <svg className={style.icon_search} version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 768 768">
                    <g id="icomoon-ignore"></g>
                    <path fill="#000" d="M513.312 507.392c-1.088 0.832-2.144 1.76-3.168 2.784s-1.92 2.048-2.784 3.168c-40.256 38.816-95.008 62.656-155.36 62.656-61.856 0-117.824-25.024-158.4-65.6s-65.6-96.544-65.6-158.4 25.024-117.824 65.6-158.4 96.544-65.6 158.4-65.6 117.824 25.024 158.4 65.6 65.6 96.544 65.6 158.4c0 60.352-23.84 115.104-62.688 155.392zM694.624 649.376l-117.6-117.6c39.392-49.28 62.976-111.776 62.976-179.776 0-79.52-32.256-151.552-84.352-203.648s-124.128-84.352-203.648-84.352-151.552 32.256-203.648 84.352-84.352 124.128-84.352 203.648 32.256 151.552 84.352 203.648 124.128 84.352 203.648 84.352c68 0 130.496-23.584 179.776-62.976l117.6 117.6c12.512 12.512 32.768 12.512 45.248 0s12.512-32.768 0-45.248z"></path>
                </svg>

                <input className={style.search__input} type="text" placeholder='Search or filter results' />
                
                <button onClick={() => handleFilter(!isOpen)} className={style.search__button}>
                    <svg className={style.icon_filter} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 3V1M9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7M9 3C10.1046 3 11 3.89543 11 5C11 6.10457 10.1046 7 9 7M3 15C4.10457 15 5 14.1046 5 13C5 11.8954 4.10457 11 3 11M3 15C1.89543 15 1 14.1046 1 13C1 11.8954 1.89543 11 3 11M3 15V17M3 11V1M9 7V17M15 15C16.1046 15 17 14.1046 17 13C17 11.8954 16.1046 11 15 11M15 15C13.8954 15 13 14.1046 13 13C13 11.8954 13.8954 11 15 11M15 15V17M15 11V1" stroke="#8054C7" />
                    </svg>
                    {/* <i className={style.icon_filter}></i> */}
                </button>
                <Filter trigger={isOpen} setTrigger={setIsOpen} />
                    
            </div>
            <Favorites />

        </div>
    )
}