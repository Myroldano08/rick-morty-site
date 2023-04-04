import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail, addFavorite, deleteFavorite  } from "../redux/actions";
import { useState, useEffect } from 'react';
import styleDetail from '../styles/Detail.module.css'
import style from '../styles/Home.module.css'


export default function Details(){
    const favorites = useSelector(state => state.favorites);
    const [ isFavorite, setFavorite ] = useState(false);  
    const character = useSelector(state => state.characterDetail);
    const { ID } = useParams();
    const dispatch = useDispatch();

    // const [isClic, setIsClic] = useState();
    // const handleClic = (isClic)=>{
    //     if(isClic){
    //         setIsClic(false);
    //         console.log('CLIC3: ', isClic)
    //     }else{
    //         setIsClic(true);
    //         console.log('NO CLIC3: ', isClic)
    //     }
    // }

    useEffect(() => {
            dispatch(getCharacterDetail(ID))
    }, [ID]);

    const handleFavorite = ()=>{
        let bool = false;
        if(favorites){
            for(let f of favorites){
                if (f.id === character?.id) {
                bool = true;
                }
            }
        }
        if(isFavorite){
            setFavorite(false);
            dispatch(deleteFavorite(character?.id));
            console.log('NO favorito')
        }else{
            if (!bool) {
                setFavorite(true);
                dispatch(addFavorite(character));
                console.log('favorito')
            }else{
                setFavorite(false);
                dispatch(deleteFavorite(character?.id));
                console.log('NO favorito')
            }
            
        }
    }

    return(
        <div className={styleDetail.content}>
            <div className={styleDetail.content__top}>
                <div className={styleDetail.content__back}>
                    {/* <i className={style.icon_arrow_left2}></i> */}
                    <button  className={styleDetail.content__button_name}>
                        <svg className={style.icon_arrow} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="#D1D5DB" />
                        </svg>
                    </button>
                    
                </div>

                <div className={styleDetail.content__img}>
                    <img src={character?.image} alt='' className={styleDetail.content__image}/>
                    <button onClick={handleFavorite} className={styleDetail.content__button}>
                        <Link to={`/favorite/${character?.id}`} className={styleDetail.content__link}>
                            {/* <i className={style.icon_heart}></i> */}
                            <svg className={style.icon_heart} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.31802 2.31802C0.56066 4.07538 0.56066 6.92462 2.31802 8.68198L10.0001 16.364L17.682 8.68198C19.4393 6.92462 19.4393 4.07538 17.682 2.31802C15.9246 0.56066 13.0754 0.56066 11.318 2.31802L10.0001 3.63609L8.68198 2.31802C6.92462 0.56066 4.07538 0.56066 2.31802 2.31802Z" stroke="#D1D5DB" />
                            </svg>
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