import style from '../styles/Home.module.css'
import Favorites from './Favorites'
const Search = () => {
    return (
        <div className={style.search}>
            <h1 className={style.search__title}>Rick and Morty list</h1>
            <div className={style.search__ul}>
                <input className={style.search__input} type="text" placeholder='Search or filter results' />
                <button className={style.search__button}><i className={style.search__icon}>FILTER</i></button>
            </div>
            <Favorites />
        </div>
    )
}

export default Search