import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function GameList({listOfGames}) {

  let gameObjects = listOfGames.map((gameName) => (<Game name={gameName}></Game>));

  return <div className="gamelist">{gameObjects}</div>;
}

function Game({name}) {
  return <div>{name}</div>
}

function App() {

  const initListOfGames = 
  ["Minecraft", "League of Legends", "Roblox", "Rocket League", "Call of Duty: Modern Warfare",
    "Candy Crush Sage", "Dota2", "Grand Theft Auto V", "Pac-Man", "Resident Evil 4", "Mario Bros.", 
    "Mario Kart 8 Deluxe", "Super Mario Odyssey", "Sper Smash Bros. Ultimate", "Fall Guys", "Overwatch", 
    "Overwatch 2", "Call of duty: Modern Warfare 2", "The Legends of Zelda: Breath of the Wild"];

  const [listOfGames, setlistOfGames] = useState(initListOfGames);

  return (
    <div className="populargames">
      <div className="mostpopulargames">
        <GameList listOfGames={listOfGames}/>
      </div>
    </div>
  );
}

export default App;
