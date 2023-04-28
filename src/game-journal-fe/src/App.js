import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function GameList({listOfGames}) {

  let gameObjects = listOfGames.map((gameData) => (<Game gameData={gameData}></Game>));

  return <div className="gameList">{gameObjects}</div>;
}

function Game({gameData}) {

  return (
    <div className="gameCard">
      <div className="gamePic">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/d9smalr-af29024f-677d-4420-ab15-fd3d55377042.png/v1/fill/w_512,h_512/call_of_duty_modern_warfare_3___icon_by_blagoicons_d9smalr-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDZiNjNkM2MtYWU2Ny00NjRjLTlhMzctNjcwODI5YjJhMTU3XC9kOXNtYWxyLWFmMjkwMjRmLTY3N2QtNDQyMC1hYjE1LWZkM2Q1NTM3NzA0Mi5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.I8Fm1ItQo5maSBr3sBE0Hsv0nqHGuWUWtfDdM84hnro" alt="call of duty" />
      </div>
      <div className="gametext">
        <div>{gameData.name}</div><br/>
        <div>{gameData.release_date}</div><br/>
        <div>{gameData.genre}</div>
      </div>
      <div className="iconGroup1">
        <div><img id="rating_icon" src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="rating-iconr" />{gameData.rating}</div>
        {/*<div>{gameData.modes}*/}
          <img src="https://seekicon.com/free-icon-download/game-controller-outline_1.png" alt="single-player" /><br/>
          <img src="https://cdn-icons-png.flaticon.com/512/10069/10069229.png" alt="multiplayer" />
        {/*</div>*/}
      </div> 
      <div className="iconGroup2">
        <div>
          {/*{gameData.platforms}*/}
          <img src="https://static.vecteezy.com/system/resources/previews/019/638/649/original/microsoft-windows-os-icon-operating-system-free-png.png" alt="windows-icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" alt="macOS-icon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/1200px-Icons8_flat_linux.svg.png" alt="linuxs-icon" />
        </div>
      </div>
    </div>
  )
}

function App() {

  const initListOfGames = [
    {"name": "Minecraft", 
    "release_date": "11/18/2011",
    "genre": "sandbox surivial",
    "rating": 9.3,
    "platforms": ["windows", "macos", "linux"],
    "modes": ["single-player", "multiplayer"]},

    {"name": "League of Legends", 
    "release_date": ["October 27, 2009", "March 1, 2013"],
    "genre": "MOBA",
    "rating": 2.9,
    "platforms": ["windows", "macos", "ios", "android", "xbox one"],
    "modes": "multiplayer"},

    {"name": "Roblox", 
    "release_date": ["September 1, 2006", "December 11, 2012", "July 16, 2014", "November 20, 2015"],
    "genre": ["game creation system", "massively multiplayer online"],
    "rating": 0.8,
    "platforms": ["windows", "macos", "linux"],
    "modes": ["single-player", "multiplayer"]},

    {"name": "Rocket League", 
    "release_date": "July 7, 2015",
    "genre": "sports",
    "rating": 3.8,
    "platforms": ["windows", "macos", "linux", "playstation 4", "xbox one", "nintendo switch"],
    "modes": ["single-player", "multiplayer"]},

    {"name": "Call of Duty: Modern Warfare", 
    "release_date": "November 5, 2007",
    "genre": "first-person shooter",
    "rating": 3.3,
    "platforms": ["windows", "macos", "playstation 3", "xbox 360", "wii u"],
    "modes": ["single-player", "multiplayer"]},

    {"name": "Candy Crush Sage", 
    "release_date": ["April 12, 2012", "November 14, 2012", "December 14, 2012", "December 11, 2014", "September 6, 2012", "July 29, 2015"],
    "genre": "puzzle",
    "rating": 0.4,
    "platforms": ["windows", "windows phone store", "macos", "lunux", "app store", "google play"],
    "modes": "N/A"},

    {"name": "Dota2", 
    "release_date": ["July 9, 2013", "July 18, 2013"],
    "genre": "MOBA",
    "rating": 4.4,
    "platforms": ["windows", "macos", "lunux"],
    "modes": "multiplayer"},

    {"name": "Grand Theft Auto V", 
    "release_date": "17 September 2013",
    "genre": "action-adventure",
    "rating": 4.4,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox 360", "xbox one", "xbox series x/s"],
    "modes": ["single-player", "multiplayer"]},

    {"name": "Pac-Man/Pac-man World Re-Pac", 
    "release_date": ["May 22, 1980", "August 26, 2022"],
    "genre": "N/A",
    "rating": [5.5, 6.5],
    "platforms": "ports",
    "modes": "N/A"},

    {"name": "Resident Evil 4", 
    "release_date": "March 24, 2023",
    "genre": "survival horror",
    "rating": 9.3,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox series x/s"],
    "modes": "single-player"},

    {"name": "Mario Kart 8", 
    "release_date": ["May 29, 2014", "May 30, 2014", "April 28, 2017"],
    "genre": "kart racing",
    "rating": 4.0,
    "platforms": ["wii u", "nintendo switch"],
    "modes": ["single-player", "multiplayer"]},

    {"name": "Super Mario Odyssey", 
    "release_date": "October 27, 2017",
    "genre": ["platform", "action-adventure"],
    "rating": 4.7,
    "platforms": "nintendo switch",
    "modes": ["single-player", "multiplayer"]},

    {"name": "Super Smash Bros. Ultimate", 
    "release_date": "December 7, 2018",
    "genre": "fighting",
    "rating": 4.3,
    "platforms": "nintendo switch",
    "modes": ["single-player", "multiplayer"]},

    {"name": "Fall Guys", 
    "release_date": ["4 August 2020", "21 June 2022"],
    "genre": ["battle royale", "platform"],
    "rating": 4.2,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox series x/s" , "xbox one", "nintendo switch"],
    "modes": "multiplayer"},

    {"name": "Overwatch",  
    "release_date": ["May 24, 2016", "October 15, 2019"],
    "genre": "first-person shooter",
    "rating": 3.8,
    "platforms": ["windows", "playstation 4", "xbox one", "nintendo switch"],
    "modes": "multiplayer"},

    {"name": "Overwatch 2",  
    "release_date": "October 4, 2022",
    "genre": "first-person shooter",
    "rating": 1.9,
    "platforms": ["windows", "macos", "playstation 4", "playstation 5", "xbox one","xbox series x/s"],
    "modes": "multiplayer"},

    {"name": "Call of duty: Modern Warfare 2", 
    "release_date": ["November 10, 2009", "May 20, 2014", "March 30, 2020", "April 30, 2020"],
    "genre": "first-person shooter",
    "rating": 8.0,
    "platforms": ["windows", "playstation 3","playstation 4", "playstation", "xbox 360", "xbox one"],
    "modes": ["single-player", "multiplayer"]},

    {"name": "The Legends of Zelda: Breath of the Wild", 
    "release_date": "March 3, 2017",
    "genre": "action-adventure",
    "rating": 4.8,
    "platforms": ["nintendo switch", "wii u"],
    "modes": "single-player"
    }];

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
