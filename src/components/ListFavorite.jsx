import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { addFavorite, deleteFavorite } from '../redux/actions';
import style from '../styles/Home.module.css'
import styleFavorite from '../styles/Favorite.module.css'

export default function List(props) {
    const favorites = useSelector(state => state.favorites);
    const lists = useSelector(state => state.characters);
    const [ isFavorite, setFavorite ] = useState(false);  
    const dispatch = useDispatch();

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
    }, [favorites, lists]
    );

    const handleFavorite = ()=>{
        if(isFavorite){
            setFavorite(false);
            dispatch(deleteFavorite(props.id));
            console.log('NO favorito')
        }else{
            setFavorite(true);
            dispatch(addFavorite(props));
            console.log('favorito')
        }
    }

    return (
        <div className={styleFavorite.list__item}>
            
            <img  src={props.image} alt="" className={styleFavorite.list__image}/>
            
            <div className={styleFavorite.list__data}>
                <Link to={`/detail/${props.id}`} style={{textDecoration: 'none'}}>
                    <span className={styleFavorite.list__name}>{props.name}</span>
                </Link>
                <span className={styleFavorite.list__text}>{props.species}</span>
                {/* <span>{props.gender}</span> */}
            </div>
            <button onClick={handleFavorite} className={styleFavorite.list__button}>
                <Link to={`/favorite/${props.id}`} className={styleFavorite.list__link}>
                    <i className={style.icon_filter}></i>
                </Link>
            </button>
        </div>
    );
}