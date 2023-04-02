import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCharacterDetail } from "../redux/actions";
import { useEffect } from 'react';
import style from '../styles/Home.module.css'

export default function Details(){
    const character = useSelector(state => state.characterDetail);
    const { ID } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
            dispatch(getCharacterDetail(ID))
    }, [ID]);

    return(
        <div className={style.modalContainer}>
            <img src={character?.image} alt='' className={style.imgDetail}/>
            <div className={style.modalElements}>
                <div className={style.text}>
                    <h2 className={style.name}>{character?.name}</h2>
                    <ul className={style.info}>
                        <li><b>Specie:</b> {character?.species}</li>
                        <li><b>Status:</b> {character?.status}</li>
                        <li><b>Gender:</b> {character?.gender}</li>
                        <li><b>Origin:</b> {character?.origin?.name}</li>
                    </ul>
                </div>
                
                </div>
        </div>
    )
}