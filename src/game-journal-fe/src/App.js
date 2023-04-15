import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function GameList({value}) {
  return <button className="gamelist">{value}</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  const [games, setGames] = useState(Array(50).fill(null));

  return (
    <div className="populargames">
      <div className="mostpopulargames">
        <GameList value={games[0]}/>
        <GameList value={games[1]}/>
        <GameList value={games[2]}/>
        <GameList value={games[3]}/>
        <GameList value={games[4]}/>
        <GameList value={games[5]}/>
        <GameList value={games[6]}/>
        <GameList value={games[7]}/>
        <GameList value={games[8]}/>
        <GameList value={games[9]}/>
        <GameList value={games[10]}/>
      </div>
      <div className="mostpopulargames">
        <GameList value={games[11]}/>
        <GameList value={games[12]}/>
        <GameList value={games[13]}/>
        <GameList value={games[14]}/>
        <GameList value={games[15]}/>
        <GameList value={games[16]}/>
        <GameList value={games[17]}/>
        <GameList value={games[18]}/>
        <GameList value={games[19]}/>
        <GameList value={games[20]}/>
        <GameList value={games[21]}/>
      </div>
      <div className="mostpopulargames">
        <GameList value={games[22]}/>
        <GameList value={games[23]}/>
        <GameList value={games[24]}/>
        <GameList value={games[25]}/>
        <GameList value={games[26]}/>
        <GameList value={games[26]}/>
        <GameList value={games[27]}/>
        <GameList value={games[28]}/>
        <GameList value={games[29]}/>
        <GameList value={games[30]}/>
        <GameList value={games[31]}/>
      </div>
      <div className="mostpopulargames">
        <GameList value={games[32]}/>
        <GameList value={games[32]}/>
        <GameList value={games[33]}/>
        <GameList value={games[34]}/>
        <GameList value={games[35]}/>
        <GameList value={games[36]}/>
        <GameList value={games[37]}/>
        <GameList value={games[38]}/>
        <GameList value={games[39]}/>
        <GameList value={games[40]}/>
        <GameList value={games[41]}/>
      </div>
      <div className="mostpopulargames">
        <GameList value={games[42]}/>
        <GameList value={games[43]}/>
        <GameList value={games[44]}/>
        <GameList value={games[45]}/>
        <GameList value={games[46]}/>
        <GameList value={games[47]}/>
        <GameList value={games[48]}/>
        <GameList value={games[49]}/>
        <GameList value={games[50]}/>
      </div>
    </div>
  );
}

export default App;
