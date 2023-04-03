import List from './List';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { getCharacters } from '../redux/actions/index'
import style from '../styles/Home.module.css'
import styleList from '../styles/List.module.css'

export default function Sidebar({onClose, onSearch}) {
    const { characters } = useSelector(state => state);
    let [ idUrl ] = useState(1)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCharacters(idUrl));
        
    }, [idUrl]);
    return (
        <div className={style.sidebar}>
            <span className={style.sidebar__character}>Starred Characters <b> : {characters.length}</b></span>
            <ul className={style.sidebar__ul}>
                <>                
                    <div className={styleList.list}>
                        {
                        characters.map((el, key) => {
                            return(
                                <List id={el.id}
                                name = {el.name}
                                species = {el.species}
                                gender = {el.gender}
                                image = {el.image}
                                onClose={onClose}
                                />
                                )
                            })
                        }
                    </div>
                </>
            </ul>
        </div>
    )
}