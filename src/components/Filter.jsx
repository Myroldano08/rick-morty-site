
import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from '../styles/Home.module.css'
import React from 'react';
import { getCharacters, getCharactersFilter } from '../redux/actions/index'

const Filter = (prop) => {
    const [specie, setSpecie] = useState("All");
    const [character, setCharacter] = useState("All");

    const onOptionsChangeCharacter = (e) => {
        setCharacter(e.target.value);
    }
    
    const onOptionsChangeSpecie = (e) => {
        setSpecie(e.target.value)
    }

    return (prop.trigger) ? (
        <div className={style.filter__popup}>
            <span className={style.filter__text}>Character</span>
            <div className={style.filter__character}>
                <div className={style.filter__radio}>
                    <input className={style.filter__input} type='radio' name='character' value="All" id='all' onChange={onOptionsChangeCharacter} checked={character==="All"} />
                    <label className={style.filter__label} htmlFor="all">All</label>
                </div>
                <div className={style.filter__radio}>
                    <input className={style.filter__input} type='radio' name='character' value="Starred" id='starred' onChange={onOptionsChangeCharacter} checked={character==="Starred"} />
                    <label className={style.filter__label} htmlFor="starred">Starred</label>
                </div>
                <div className={style.filter__radio}>
                    <input className={style.filter__input} type='radio' name='character' value="Others" id='others' onChange={onOptionsChangeCharacter} checked={character==="Others"} />
                    <label className={style.filter__label} htmlFor="others">Others</label>
                </div>         
            </div>
            <span className={style.filter__text}>Specie</span>
            <div className={style.filter__specie}>
                <div className={style.filter__radio}>
                    <input className={style.filter__input} type='radio' name='specie' value="All" id='alls' onChange={onOptionsChangeSpecie} checked={specie==="All"} />
                    <label className={style.filter__label} htmlFor="alls">All</label>
                </div>
                <div className={style.filter__radio}>
                    <input className={style.filter__input} type='radio' name='specie' value="Human" id='human' onChange={onOptionsChangeSpecie} checked={specie==="Human"} />
                    <label className={style.filter__label} htmlFor="human">Human</label>
                </div>
                <div className={style.filter__radio}>
                    <input className={style.filter__input}type='radio' name='specie' value="Alien" id='alien' onChange={onOptionsChangeSpecie} checked={specie==="Alien"} />
                    <label className={style.filter__label} htmlFor="alien">Alien</label>
                </div>
            </div>

            <span>Select option Character is: {character} </span>

            <span>Select option Specie is: {specie} </span>
            
            {prop.children}

            <button className={style.filter__button} onClick={() => prop.setTrigger(false)}>
                <Link to={``} className={style.filter__link}>
                    Filters <i className={style.icon_filter}></i>
                </Link>
            </button>
        </div>
    )  : ""; 
}

export default Filter