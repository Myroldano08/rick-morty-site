import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail, addFavorite, deleteFavorite  } from "../redux/actions";
import { useState, useEffect } from 'react';
import styleDetail from '../styles/Detail.module.css'
import style from '../styles/Home.module.css'


export default function Details(){
    const [ isFavorite, setFavorite ] = useState(false);  
    const character = useSelector(state => state.characterDetail);
    const { ID } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
            dispatch(getCharacterDetail(ID))
    }, [ID]);

    const handleFavorite = ()=>{
        if(isFavorite){
            setFavorite(false);
            dispatch(deleteFavorite(character?.id));
            console.log('NO favorito')
        }else{
            setFavorite(true);
            dispatch(addFavorite(character));
            console.log('favorito')
        }
    }

    return(
        <div className={styleDetail.content}>
            <div className={styleDetail.content__top}>
                <div className={styleDetail.content__back}>
                    <i className={style.icon_arrow_left2}></i>
                </div>
                <div className={styleDetail.content__img}>
                    <img src={character?.image} alt='' className={styleDetail.content__image}/>
                    <button onClick={handleFavorite} className={styleDetail.content__button}>
                        <Link to={`/favorite/${character?.id}`} className={styleDetail.content__link}>
                            <i className={style.icon_filter}></i>
                        </Link>
                    </button>
                </div>
                <span className={styleDetail.content__name}>{character?.name}</span>
            </div>

            <div className={styleDetail.content__bottom}>
                <div className={styleDetail.content__info}>
                    <div className={styleDetail.content__item}>
                        <span className={styleDetail.content__title}>Specie:</span>
                        <span className={styleDetail.content__text}>{character?.species}</span>
                    </div>
                    <hr className={styleDetail.content__hr} />
                    <div className={styleDetail.content__item}>
                        <span className={styleDetail.content__title}>Status:</span>
                        <span className={styleDetail.content__text}>{character?.status}</span>
                    </div>
                    <hr className={styleDetail.content__hr} />
                    <div className={styleDetail.content__item}>
                        <span className={styleDetail.content__title}>Gender:</span> 
                        <span className={styleDetail.content__text}>{character?.gender}</span>
                    </div>
                    <hr className={styleDetail.content__hr} />
                    <div className={styleDetail.content__item}>
                        <span className={styleDetail.content__title}>Origin:</span>
                        <span className={styleDetail.content__text}>{character?.origin?.name}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}