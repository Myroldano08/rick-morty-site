import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'


function App () {
  let [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
 
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  
  const username = 'ejemplo@gmail.com';
  const password = '1password';

function login(userData) {
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
   }
}

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

  

  if(pathname !== '/login'){
    return(
      <div className='App'>
        <Routes>
          <Route exact path={'/home'} element={<Home/>}></Route>
        </Routes>
      </div>
    )
  }

  
}

export default App
