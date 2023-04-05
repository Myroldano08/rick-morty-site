import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useContext } from 'react';
import { addFavorite, deleteFavorite } from '../redux/actions';
import style from '../styles/Home.module.css'
import styleList from '../styles/List.module.css'
import Mycontext from '../context/contextActive';

// import { clicContext } from './Home';

export default function List(props) {
    const favorites = useSelector(state => state.favorites);
    const lists = useSelector(state => state.characters);
    const [ isFavorite, setFavorite ] = useState(false);  
    const dispatch = useDispatch();
    const { contextValue, setContextValue } = useContext(Mycontext);

    const handleClick = () => {
        setContextValue(true)
    }

    const checkFavs = ()=>{
        let bool = false;
        if(favorites){
            for(let f of favorites){
                if (f.id === props.id) {
                bool = true;
                }
            }
        }
        setFavorite(bool)
    }
    useEffect(() => {
        checkFavs();
        return () =>{
            checkFavs();
        }
    }, [favorites, lists]);

    const handleFavorite = ()=>{
        let bool = false;
        if(favorites){
            for(let f of favorites){
                if (f.id === props.id) {
                bool = true;
                }
            }
        }
        if(isFavorite){
            setFavorite(false);
            dispatch(deleteFavorite(props.id));
            console.log('NO favorito')
        }else{
            if (!bool) {
                setFavorite(true);
                dispatch(addFavorite(props));
                console.log('favorito')   
            }
        }
    }

    return (
        <div className={styleList.list__content}>
            <hr className={styleList.list__hr} />
            <div className={styleList.list__item}>
                <img  src={props.image} alt="" className={styleList.list__image}/>
                
                <div className={styleList.list__data}>
                    <button onClick={handleClick} className={styleList.list__button_name}>
                        <Link to={`/detail/${props.id}`} className={styleList.list__link}>
                            <span className={styleList.list__name}>{props.name}</span>
                        </Link>
                    </button>
                    
                    <span className={styleList.list__text}>{props.species}</span>
                    {/* <span>{props.gender}</span> */}
                </div>

                <button onClick={handleFavorite} className={styleList.list__button}>
                    <Link to={`/favorite/${props.id}`} className={styleList.list__link}>
                        {/* <i className={style.icon_filter}></i> */}
                        <svg className={style.icon_filter}width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#D1D5DB" />
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    );
}