import List from './List';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import { getCharacters, getCharactersFilter } from '../redux/actions/index'
import style from '../styles/Home.module.css'
import styleList from '../styles/List.module.css'

export default function Sidebar({onClose, onSearch}) {
    const { characters, characterFilter} = useSelector(state => state);
    // const [isClic, setIsClic] = useState(false);
    let [ idUrl ] = useState(1)
    const dispatch = useDispatch();

    console.log('characterFilter: ',characterFilter)

    useEffect(()=>{
        if (characterFilter.specie ==  ''
            && characterFilter.gender == '' 
            && characterFilter.status == ''
        ) {
            dispatch(getCharacters(idUrl));
        }else {
            dispatch(getCharactersFilter(characterFilter.status,characterFilter.specie,characterFilter.gender));
        }       
        
        
    }, [characterFilter, idUrl]);
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