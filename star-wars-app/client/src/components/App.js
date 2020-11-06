import '../style/App.css';
import React, { useState } from 'react';
import StarWars from './StarWars';
import Planets from './Planets';
import AllCharacters from './AllCharacters';
import Character from './Character';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartPage from './StartPage';

function App() {

  const [state, setstate] = useState('STE');
  const [planet, setPlanet] = useState();
  const [character, setCharacter] = useState();

  const getResponse = async () => {
    const response = await fetch('http://localhost:5000/express');
    const body = await response.json();
    if (response.status !== 200) throw new Error(body.message);

    setstate(body.express);
    return body.express;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

        <Route path="/StartPage">
          <StartPage />
        </Route>

          <Route exact path="/" >
            <Planets setPlanet={setPlanet}/>
          </Route>

          <Route exact path="/AllCharacters/Tatooine" >
            <AllCharacters planet={planet} setCharacter={setCharacter}/>
          </Route>
          <Route exact path="/AllCharacters/Alderaan" >
            <AllCharacters planet={planet} setCharacter={setCharacter}/>
          </Route>
          <Route exact path="/AllCharacters/Naboo" >
            <AllCharacters planet={planet} setCharacter={setCharacter}/>
          </Route>
          <Route exact path="/AllCharacters/Coruscant" >
            <AllCharacters planet={planet} setCharacter={setCharacter}/>
          </Route>
          <Route exact path="/AllCharacters/Kamino" >
            <AllCharacters planet={planet} setCharacter={setCharacter}/>
          </Route>

          <Route exact path="/:uid" >
            <Character character={character} planet={planet}/>
          </Route>

        
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
