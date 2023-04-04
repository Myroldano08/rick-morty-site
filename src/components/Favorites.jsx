import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import style from '../styles/Home.module.css'
import List from "./ListFavorite"


export default function Favorites(){
   const { ID } = useParams();
   const { favorites } = useSelector(state => state)
   // const [isClic, setIsClic] = useState(false);
   useEffect(() => {
      console.log(ID);
   }, [ID]);
    return(
        <div className={style.favorites}>
            <span className={style.list__character}>Starred Characters <b> :</b></span>
            {  (favorites.length > 0)?
               favorites.map((el, key) => {
                  return(
                     <List id={el.id}
                     name = {el.name}
                     species = {el.species}
                     gender = {el.gender}
                     image = {el.image}
                     />
                     )
                  })
                  : ""
               }
         </div>
    )
    
}