
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from '../styles/Home.module.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCharacter, getCharacters, getCharactersFilter } from '../redux/actions';
import ListFilter from './ListFilter';
import Favorites from './Favorites';

const Filter = (prop) => {
    const [specie, setSpecie] = useState('');
    const [status, setStatus] = useState('');
    const [gender, setGender] = useState('');
    const [stateValue, setStateValue] = useState(false);

    const updateStateValue = (newValue) => {
        setStateValue(newValue);
    };

    const dispatch = useDispatch();
    let [ idUrl ] = useState(1)

    const handleClick = () => {
        console.log("data: ", {status: status, specie: specie, gender: gender})
        dispatch(filterCharacter({status: status, specie: specie, gender: gender}));
    }
    

    const onOptionsChangeStatus = (e) => {
        setStatus(e.target.value);
    }
    
    const onOptionsChangeSpecie = (e) => {
        setSpecie(e.target.value)
    }

    const onOptionsChangeGender = (e) => {
        setGender(e.target.value);
    }

    const { characters, characterFilter} = useSelector(state => state);
    console.log('characterFilter: ',characterFilter)

    useEffect(()=>{
        if (characterFilter.specie ==  '' && characterFilter.gender == ''  && characterFilter.status == '') {
            updateStateValue(false);
            dispatch(getCharacters());
        }else {
            if ({status} !=  '' && {specie} == ''  && {gender} == '' ){updateStateValue(true);}
            if ({status} !=  '' && {specie} != ''  && {gender} == '' ){updateStateValue(true);}
            if ({status} !=  '' && {specie} != ''  && {gender} !== '' ){updateStateValue(true);}

            // updateStateValue(true);
            dispatch(getCharactersFilter(characterFilter.status,characterFilter.specie,characterFilter.gender));
        }       
        
        
    }, [characterFilter, idUrl]);

    return (prop.trigger) ? (
        <div className={style.filter__popup}>
            <div className={style.filter__content}>
                <div className={style.filter__tilte}>
                    <button onClick={() => prop.setTrigger(false)} className={style.filter__button_name}>
                        <svg className={style.icon_arrow} width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15L1 8M1 8L8 1M1 8L19 8" stroke="#D1D5DB" />
                        </svg>
                    </button>
                    <span className={style.filter__text}>Filters</span>
                    <button onClick={() => prop.setTrigger(false)} className={style.filter__button_name}>
                        <span className={style.filter__done}>Done</span>
                    </button>
                </div>
                <span className={style.filter__text}>Status</span>
                <div className={style.filter__character}>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='status' value="alive" id='alive' onChange={onOptionsChangeStatus} checked={status==="alive"} />
                        <span className={style.filter__label} htmlFor="alive">Alive</span>
                    </label>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='status' value="dead" id='dead' onChange={onOptionsChangeStatus} checked={status==="dead"} />
                        <span className={style.filter__label} htmlFor="dead">Dead</span>
                    </label>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='status' value="unknown" id='unknown' onChange={onOptionsChangeStatus} checked={status==="unknown"} />
                        <span className={style.filter__label} htmlFor="unknown">Unknown</span>
                    </label>         
                </div>
                <span className={style.filter__text}>Specie</span>
                <div className={style.filter__specie}>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='specie' value="alls" id='alls' onChange={onOptionsChangeSpecie} checked={specie==="alls"} />
                        <span className={style.filter__label} htmlFor="alls">All</span>
                    </label>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='specie' value="human" id='human' onChange={onOptionsChangeSpecie} checked={specie==="human"} />
                        <span className={style.filter__label} htmlFor="human">Human</span>
                    </label>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='specie' value="alien" id='alien' onChange={onOptionsChangeSpecie} checked={specie==="alien"} />
                        <span className={style.filter__label} htmlFor="alien">Alien</span>
                    </label>
                </div>

                <span className={style.filter__text}>Gender</span>
                <div className={style.filter__specie}>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='gender' value="female" id='female' onChange={onOptionsChangeGender} checked={gender==="female"} />
                        <span className={style.filter__label} htmlFor="female">female</span>
                    </label>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='gender' value="male" id='male' onChange={onOptionsChangeGender} checked={gender==="male"} />
                        <span className={style.filter__label} htmlFor="male">Male</span>
                    </label>
                    <label className={style.filter__radio}>
                        <input className={style.filter__input}  type='radio' name='gender' value="genderless" id='genderless' onChange={onOptionsChangeGender} checked={gender==="genderless"} />
                        <span className={style.filter__label} htmlFor="genderless">genderless</span>
                    </label>
                </div>
                {/* 
                <span>Select option status is: {status} </span>

                <span>Select option Specie is: {specie} </span>
                <span>Select option Specie is: {gender} </span>
                */}
                {prop.children}
            </div>

            

            <div className={style.filter__list}>
                <Favorites />
                <span className={style.sidebar__character}>Starred Characters <b> : {characters.length}</b></span>
                {
                characters.map((el, key) => {
                    return(
                        <ListFilter id={el.id}
                        name = {el.name}
                        species = {el.species}
                        gender = {el.gender}
                        image = {el.image}
                        />
                        )
                    })
                }
            </div>
            
            {/* stateValue
            `${style.home__left} ${ stateValue ? style.home__left_active : ''}`
            {style.filter__button} */}
            <button className={`${style.filter__button} ${ stateValue ? style.filter__button_active : ''}`} onClick={() => handleClick({status}, {specie},{gender})} >
                <Link to={``} className={style.filter__link}>
                    Filters{/* Filters <i className={style.icon_filter}></i> */}
                </Link>
            </button>
        </div>
    )  : ""; 
}

export default Filter