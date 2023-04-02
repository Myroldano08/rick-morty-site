import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import style from '../styles/Home.module.css'
import List from "./List"

export default function Favorites(){
   const { ID } = useParams();
   const { favorites } = useSelector(state => state)
   useEffect(() => {
      console.log(ID);
   }, [ID]);
    return(
        <div className={style.favorites}>
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
                  : <p className={style.noFavs}>Oops! no favorites yet. Add your favorites characters!</p>
               }
         </div>
    )
    
}