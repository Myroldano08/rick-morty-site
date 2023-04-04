import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'


function App () {
  let [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
   useEffect(() => {
   !access && navigate('/home');
   }, [access]);
  
  const onSearch = (character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onFilter = (character)=>{
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }
  
}

export default App
