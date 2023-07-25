import './App.css';

// import useEffect
import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

function App() {
  /**
   * Set up state and make AJAX requests here
   */
  const [characters, setCharacters] = useState([]);

  const [image, setImage] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character/").then((resp) => {
      setCharacters(resp.data.results);
      // console.log(resp.data);
    });
  }, []);

  const getCharacter = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then((resp) => {
      setImage(resp.data.image);
      setName(resp.data.name);
    });
  };
  return (
    <div className="container">
      <div className="row text-center" id="body">
        <h1 id="title-head">{name}</h1>
        <div id="main-img">
          <a href="http://rickandmorty.wikia.com/wiki/Rick_Sanchez">
            <img alt={name} src={image} height="250" />
          </a>
          <div className="linkfooter">
            <p>Select your favorite character</p>
            <select
              id="dropdown"
              type="text"
              onChange={(e) => getCharacter(e.target.value)}
            >
              <option></option>
              {characters.map((character) => (
                <option value={character.id} key={character.id}>
                  {character.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
