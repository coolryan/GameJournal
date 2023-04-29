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
        <img src={gameData.imageSrc} alt="Game Images" />
      </div>
      <div className="gametext">
        <div>{gameData.name}</div><br/>
        <div>{gameData.release_date}</div><br/>
        <div>{gameData.genre}</div><br/>
        <div>{gameData.publishers}</div><br/>
        <div>{gameData.developers}</div>
      </div>
      <div className="iconGroup1">
        <div className="ratingGroup">
          <div className="ratingtext">{gameData.rating}</div>
          <img className="rating_icon" src="https://pixlok.com/wp-content/uploads/2021/07/Rating-SVG-Icon-s9fd.png" alt="rating-iconr" />
        </div>
        {/*<div>{gameData.modes}*/}
          <img src="https://seekicon.com/free-icon-download/game-controller-outline_1.png" alt="single-player" /><br/>
          <img src="https://cdn-icons-png.flaticon.com/512/10069/10069229.png" alt="multiplayer" />
        {/*</div>*/}
      </div> 
      <div className="iconGroup2">
        {/*{gameData.platforms}*/}
        <img src="https://static.vecteezy.com/system/resources/previews/019/638/649/original/microsoft-windows-os-icon-operating-system-free-png.png" alt="windows-icon" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" alt="macOS-icon" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/1200px-Icons8_flat_linux.svg.png" alt="linuxs-icon" />
      </div>
    </div>
  )
}

function App() {

  const initListOfGames = [
    {"name": "Minecraft", 
    "release_date": "November 18, 2011",
    "genre": "sandbox surivial",
    "rating": 9.3,
    "platforms": ["windows", "macos", "linux"],
    "modes": ["single-player", "multiplayer"],
    "publishers": ["Mojang Studios", "Xbox Game Studios", "Sony Interactive Enterainment"],
    "developers": "Mojang Studios",
    "imageSrc": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/da35ouh-21db0364-d4c1-423f-b614-6af772335e93.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGEzNW91aC0yMWRiMDM2NC1kNGMxLTQyM2YtYjYxNC02YWY3NzIzMzVlOTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RVYLERIqm7DZXc_IHCptQc6G3_18TSM7zu4NxZGDZTs"
    },

    {"name": "League of Legends", 
    "release_date": ["October 27, 2009", "March 1, 2013"],
    "genre": "MOBA",
    "rating": 2.9,
    "platforms": ["windows", "macos", "ios", "android", "xbox one"],
    "modes": "multiplayer",
    "publishers": "Riot Games",
    "developers": "Riot Games",
    "imageSrc": "https://i.pinimg.com/originals/ce/19/25/ce19251d6b0fc80e7964da087254f79e.png"
    },

    {"name": "Roblox", 
    "release_date": ["September 1, 2006", "December 11, 2012", "July 16, 2014", "November 20, 2015"],
    "genre": ["game creation system", "massively multiplayer online"],
    "rating": 0.8,
    "platforms": ["windows", "macos", "linux"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Roblox Corporation",
    "developers": "Roblox Corporation",
    "imageSrc": "https://pbs.twimg.com/media/FHiElmVXsAIydl8.png"
    },

    {"name": "Rocket League", 
    "release_date": "July 7, 2015",
    "genre": "sports",
    "rating": 3.8,
    "platforms": ["windows", "macos", "linux", "playstation 4", "xbox one", "nintendo switch"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Psyonix",
    "developers": "Psyonix",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/640px-Rocket_League_coverart.jpg"
    },

    {"name": "Call of Duty: Modern Warfare", 
    "release_date": "November 5, 2007",
    "genre": "first-person shooter",
    "rating": 3.3,
    "platforms": ["windows", "macos", "playstation 3", "xbox 360", "wii u"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Activision",
    "developers": "Infinity Ward",
    "imageSrc": "https://icon-library.com/images/modern-warfare-icon/modern-warfare-icon-9.jpg"
    },

    {"name": "Candy Crush Sage", 
    "release_date": ["April 12, 2012", "November 14, 2012", "December 14, 2012", "December 11, 2014", "September 6, 2012", "July 29, 2015"],
    "genre": "puzzle",
    "rating": 0.4,
    "platforms": ["windows", "windows phone store", "macos", "lunux", "app store", "google play"],
    "modes": "N/A",
    "publishers": "King",
    "developers": "King",
    "imageSrc": "https://s3.eu-west-2.amazonaws.com/img.creativepool.com/files/candidate/portfolio/full/617146.png"
    },

    {"name": "Dota2", 
    "release_date": ["July 9, 2013", "July 18, 2013"],
    "genre": "MOBA",
    "rating": 4.4,
    "platforms": ["windows", "macos", "lunux"],
    "modes": "multiplayer",
    "publishers": "Valve",
    "developers": "Valve",
    "imageSrc": "https://i.pinimg.com/originals/2d/cd/80/2dcd80c6f5a21a437313adde93b373d8.png"
    },

    {"name": "Grand Theft Auto V", 
    "release_date": "17 September 2013",
    "genre": "action-adventure",
    "rating": 4.4,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox 360", "xbox one", "xbox series x/s"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Rockstar Games",
    "developers": "Rockstar North",
    "imageSrc": "https://shared-files.whatpulse.org/app_logos/grand-theft-auto-v.png"
    },

    {"name": "Pac-Man/Pac-man World Re-Pac", 
    "release_date": ["May 22, 1980", "August 26, 2022"],
    "genre": "N/A",
    "rating": [5.5, 6.5],
    "platforms": "ports",
    "modes": "Maze",
    "publishers": ["Namco", "Bandai Namco Entertainment"],
    "developers": ["Namco", "Bandai Namco Studios"],
    "imageSrc": "https://cdn.wikimg.net/en/strategywiki/images/6/68/PM_flyer_artwork.png"
    },

    {"name": "Resident Evil 4", 
    "release_date": "March 24, 2023",
    "genre": "survival horror",
    "rating": 9.3,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox series x/s"],
    "modes": "single-player",
    "publishers": "Capcom",
    "developers": "Capcom Production Studio 4",
    "imageSrc": "https://www.vrbeginnersguide.com/wp-content/uploads/2022/05/VRBG-Featured-Image-Resident-Evil-4-Oculus-Quest-2-Review-2022.png"
    },

    {"name": "Mario Kart 8 Deluxe", 
    "release_date": ["May 29, 2014", "May 30, 2014", "April 28, 2017"],
    "genre": "kart racing",
    "rating": 4.0,
    "platforms": ["wii u", "nintendo switch"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Nintendo",
    "developers": ["Nintendo EAD", "Nintendo EPD"],
    "imageSrc": "https://assets1.ignimgs.com/2019/05/31/mario-kart-8---button-1559265583134.jpg"
    },

    {"name": "Super Mario Odyssey", 
    "release_date": "October 27, 2017",
    "genre": ["platform", "action-adventure"],
    "rating": 4.7,
    "platforms": "nintendo switch",
    "modes": ["single-player", "multiplayer"],
    "publishers": "Nintendo",
    "developers": "Nintendo EPD",
    "imageSrc": "https://supermario.nintendo.com/assets/img/home/logo.png"
    },

    {"name": "Super Smash Bros. Ultimate", 
    "release_date": "December 7, 2018",
    "genre": "fighting",
    "rating": 4.3,
    "platforms": "nintendo switch",
    "modes": ["single-player", "multiplayer"],
    "publishers": "Nintendo",
    "developers": ["Bandai Namco Studios", "Sora Ltd."],
    "imageSrc": "https://seasonedgaming.com/wp-content/uploads/2018/12/ReviewMedal.png"
    },

    {"name": "Fall Guys", 
    "release_date": ["4 August 2020", "21 June 2022"],
    "genre": ["battle royale", "platform"],
    "rating": 4.2,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox series x/s" , "xbox one", "nintendo switch"],
    "modes": "multiplayer",
    "publishers": ["Devolver Digital", "Epic Games"],
    "developers": "Mediatonic",
    "imageSrc": "https://cdn2.unrealengine.com/fallguys-ss2-primary-1909x1189-4c9d6a0f3f3c.png"
    },

    {"name": "Overwatch",  
    "release_date": ["May 24, 2016", "October 15, 2019"],
    "genre": "first-person shooter",
    "rating": 3.8,
    "platforms": ["windows", "playstation 4", "xbox one", "nintendo switch"],
    "modes": "multiplayer",
    "publishers": "Blizzard Entertainment",
    "developers": ["Blizzard Entertainment", "Iron Galaxy"],
    "imageSrc": "https://www.pngmart.com/files/22/Overwatch-Logo-PNG-Image.png"
    },

    {"name": "Overwatch 2",  
    "release_date": "October 4, 2022",
    "genre": "first-person shooter",
    "rating": 1.9,
    "platforms": ["windows", "macos", "playstation 4", "playstation 5", "xbox one","xbox series x/s"],
    "modes": "multiplayer",
    "publishers": "Blizzard Entertainment",
    "developers": "Blizzard Entertainment",
    "imageSrc": "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt2103e5cde877112f/62a27a6a6eb6de7d054a5ae0/Overwatch2_Secondary_DKBKGD.png"
    },

    {"name": "Call of duty: Modern Warfare 2", 
    "release_date": ["November 10, 2009", "May 20, 2014", "March 30, 2020", "April 30, 2020"],
    "genre": "first-person shooter",
    "rating": 8.0,
    "platforms": ["windows", "playstation 3","playstation 4", "playstation", "xbox 360", "xbox one"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Activision",
    "developers": ["Infinity Ward", "Beenox"],
    "imageSrc": "https://icon-library.com/images/modern-warfare-2-icon/modern-warfare-2-icon-23.jpg"
    },

    {"name": "The Legends of Zelda: Breath of the Wild", 
    "release_date": "March 3, 2017",
    "genre": "action-adventure",
    "rating": 4.8,
    "platforms": ["nintendo switch", "wii u"],
    "modes": "single-player",
    "publishers": "Nintendo",
    "developers": "Nintendo EPD",
    "imageSrc": "https://www.zelda.com/breath-of-the-wild/assets/img/buy/digital-edition.png"
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
