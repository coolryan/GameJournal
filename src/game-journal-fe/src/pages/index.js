import React, {useState} from 'react';

function Header() {
  return (
    <header>
      <div className="titleHeader">
        <h1><i>Welcome To Game Journal</i></h1>
      </div>
    </header>
  )
}

function GameList({listOfGames}) {

  let gameObjects = listOfGames.map((gameData) => (<Game gameData={gameData}></Game>));

  return <div className="gameList">{gameObjects}</div>;
}

function Game({gameData}) {

  const releaseDateIndex = 0;

  return (
    <div className="gameCard">
      <div className="gamePic">
        <img src={gameData.imageSrc} alt="Game Images" />
      </div>
      <div className="gametext">
        <div>{gameData.name}</div><br/>
        <div>{gameData.release_date[releaseDateIndex]}</div><br/>
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
        {
          gameData.modes.includes("single-player") && 
          <img src="https://seekicon.com/free-icon-download/game-controller-outline_1.png" alt="single-player" />
        }
          <br/>
        {
          gameData.modes.includes("multiplayer") && 
          <img src="https://cdn-icons-png.flaticon.com/512/10069/10069229.png" alt="multiplayer" />
        }
        {/*</div>*/}
      </div> 
      <div className="iconGroup2">
        {/*{gameData.platforms}*/}
      {
        gameData.platforms.includes("windows") && 
        <img src="https://static.vecteezy.com/system/resources/previews/019/638/649/original/microsoft-windows-os-icon-operating-system-free-png.png" alt="windows" />
      }

      {
        gameData.platforms.includes("macos") && 
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Finder_Icon_macOS_Big_Sur.png" alt="macos" />
      }

      {
        gameData.platforms.includes("linux") && 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/1200px-Icons8_flat_linux.svg.png" alt="linux" />
      }
      
      {
        gameData.platforms.includes("ios") && 
        <img src="https://freepngimg.com/download/iphone/68525-apple-network-icons-ios-computer-iphone-graphics.png" alt="ios" />
      }  
      
      {
        gameData.platforms.includes("android") && 
        <img src="https://cdn-icons-png.flaticon.com/512/174/174836.png" alt="android" />
      }   
      
      {
        gameData.platforms.includes("xbox one") && 
        <img src="https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/XBox-512.png" alt="xbox one" />
      }

      {
        gameData.platforms.includes("xbox 360") && 
        <img src="https://www.clipartmax.com/png/small/61-610507_xbox-controller-icons-xbox-360.png" alt="xbox 360" />
      }

      {
        gameData.platforms.includes("xbox series x/s") && 
        <img src="https://assets.xboxservices.com/assets/7d/da/7ddab0fc-f5e7-4bd9-8230-55f9bc51d9f4.jpg?n=Game-Hub_Content-Placement-0_Consoles_740x417_02.jpg" alt="xbox series x/s" />
      }      
       
      {
        gameData.platforms.includes("playstation") && 
        <img src="https://cdn-icons-png.flaticon.com/512/588/588258.png" alt="playstation" />
      }

      {
        gameData.platforms.includes("playstation 3") && 
        <img src="https://cdn2.steamgriddb.com/file/sgdb-cdn/icon_thumb/5de310fd9365cd111d778791085b1eb3.png" alt="playstation 3" />
      }

      {
        gameData.platforms.includes("playstation 4") && 
        <img src="https://icon-library.com/images/ps4-icon/ps4-icon-18.jpg" alt="playstation 4" />
      }

      {
        gameData.platforms.includes("playstation 5") && 
        <img src="https://cdn2.iconfinder.com/data/icons/apple-products-2026/512/melon0-512.png" alt="playstation 5" />
      }   
      
      {
        gameData.platforms.includes("nintendo switch") && 
        <img src="https://cdn2.iconfinder.com/data/icons/electrical-devices-2/60/devices-flat-052-switch-complete-left-512.png" alt="nintendo switch" />
      }   
      
      {
        gameData.platforms.includes("will u") && 
        <img src="https://cdn-icons-png.flaticon.com/512/39/39462.png" alt="will u" />
      }  
      
      {
        gameData.platforms.includes("app store") && 
        <img src="https://www.macworld.com/wp-content/uploads/2023/01/mac-app-store-icon-1.png" alt="app store" />
      }  
      
      {
        gameData.platforms.includes("google play") && 
        <img src="https://logos-world.net/wp-content/uploads/2020/12/Google-Play-icon-logo.png" alt="google play" />
      }  
      
      {
        gameData.platforms.includes("windows phone store") && 
        <img src="https://seeklogo.com/images/M/microsoft-store-new-2022-logo-E0E195EEF5-seeklogo.com.png" alt="windows phone store" />
      }  
      
      {
        gameData.platforms.includes("ports") && 
        <img src="https://cdn-icons-png.flaticon.com/512/68/68802.png" alt="ports" />
      }  
      </div>
    </div>
  )
}
  
const Home = () => {
   const initListOfGames = [
    {"name": "Minecraft", 
    "release_date": ["November 18, 2011"],
    "genre": ["sandbox surivial"],
    "rating": 9.3,
    "platforms": ["windows", "macos", "linux"],
    "modes": ["single-player", "multiplayer"],
    "publishers": ["Mojang Studios", "Xbox Game Studios", "Sony Interactive Enterainment"],
    "developers": "Mojang Studios",
    "imageSrc": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/46b63d3c-ae67-464c-9a37-670829b2a157/da35ouh-21db0364-d4c1-423f-b614-6af772335e93.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2YjYzZDNjLWFlNjctNDY0Yy05YTM3LTY3MDgyOWIyYTE1N1wvZGEzNW91aC0yMWRiMDM2NC1kNGMxLTQyM2YtYjYxNC02YWY3NzIzMzVlOTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RVYLERIqm7DZXc_IHCptQc6G3_18TSM7zu4NxZGDZTs"
    },

    {"name": "League of Legends", 
    "release_date": ["October 27, 2009", "March 1, 2013"],
    "genre": ["MOBA"],
    "rating": 2.9,
    "platforms": ["windows", "macos", "ios", "android", "xbox one"],
    "modes": ["multiplayer"],
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
    "release_date": ["July 7, 2015"],
    "genre": ["sports"],
    "rating": 3.8,
    "platforms": ["windows", "macos", "linux", "playstation 4", "xbox one", "nintendo switch"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Psyonix",
    "developers": "Psyonix",
    "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Rocket_League_coverart.jpg/640px-Rocket_League_coverart.jpg"
    },

    {"name": "Call of Duty: Modern Warfare", 
    "release_date": ["November 5, 2007"],
    "genre": ["first-person shooter"],
    "rating": 3.3,
    "platforms": ["windows", "macos", "playstation 3", "xbox 360", "will u"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Activision",
    "developers": "Infinity Ward",
    "imageSrc": "https://icon-library.com/images/modern-warfare-icon/modern-warfare-icon-9.jpg"
    },

    {"name": "Candy Crush Sage", 
    "release_date": ["April 12, 2012", "November 14, 2012", "December 14, 2012", "December 11, 2014", "September 6, 2012", "July 29, 2015"],
    "genre": ["puzzle"],
    "rating": 0.4,
    "platforms": ["windows", "windows phone store", "macos", "linux", "app store", "google play"],
    "modes": ["N/A"],
    "publishers": "King",
    "developers": "King",
    "imageSrc": "https://images.launchbox-app.com/d12f6333-69f7-4ed6-9782-72ac69e47292.png"
    },

    {"name": "Dota2", 
    "release_date": ["July 9, 2013", "July 18, 2013"],
    "genre": ["MOBA"],
    "rating": 4.4,
    "platforms": ["windows", "macos", "linux"],
    "modes": ["multiplayer"],
    "publishers": "Valve",
    "developers": "Valve",
    "imageSrc": "https://i.pinimg.com/originals/2d/cd/80/2dcd80c6f5a21a437313adde93b373d8.png"
    },

    {"name": "Grand Theft Auto V", 
    "release_date": ["17 September 2013"],
    "genre": ["action-adventure"],
    "rating": 4.4,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox 360", "xbox one", "xbox series x/s"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Rockstar Games",
    "developers": "Rockstar North",
    "imageSrc": "https://shared-files.whatpulse.org/app_logos/grand-theft-auto-v.png"
    },

    {"name": "Pac-Man/Pac-man World Re-Pac", 
    "release_date": ["May 22, 1980", "August 26, 2022"],
    "genre": ["N/A"],
    "rating": 6.5,
    "platforms": ["ports"],
    "modes": ["Maze"],
    "publishers": ["Namco", "Bandai Namco Entertainment"],
    "developers": ["Namco", "Bandai Namco Studios"],
    "imageSrc": "https://cdn.wikimg.net/en/strategywiki/images/6/68/PM_flyer_artwork.png"
    },

    {"name": "Resident Evil 4", 
    "release_date": ["March 24, 2023"],
    "genre": ["survival horror"],
    "rating": 9.3,
    "platforms": ["windows", "playstation 3", "playstation 4", "playstation 5", "xbox series x/s"],
    "modes": ["single-player"],
    "publishers": "Capcom",
    "developers": "Capcom Production Studio 4",
    "imageSrc": "https://www.vrbeginnersguide.com/wp-content/uploads/2022/05/VRBG-Featured-Image-Resident-Evil-4-Oculus-Quest-2-Review-2022.png"
    },

    {"name": "Mario Kart 8 Deluxe", 
    "release_date": ["May 29, 2014", "May 30, 2014", "April 28, 2017"],
    "genre": ["kart racing"],
    "rating": 4.0,
    "platforms": ["will u", "nintendo switch"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Nintendo",
    "developers": ["Nintendo EAD", "Nintendo EPD"],
    "imageSrc": "https://assets1.ignimgs.com/2019/05/31/mario-kart-8---button-1559265583134.jpg"
    },

    {"name": "Super Mario Odyssey", 
    "release_date": ["October 27, 2017"],
    "genre": ["platform", "action-adventure"],
    "rating": 4.7,
    "platforms": ["nintendo switch"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Nintendo",
    "developers": "Nintendo EPD",
    "imageSrc": "https://supermario.nintendo.com/assets/img/home/logo.png"
    },

    {"name": "Super Smash Bros. Ultimate", 
    "release_date": ["December 7, 2018"],
    "genre": ["fighting"],
    "rating": 4.3,
    "platforms": ["nintendo switch"],
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
    "modes": ["multiplayer"],
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
    "release_date": ["October 4, 2022"],
    "genre": ["first-person shooter"],
    "rating": 1.9,
    "platforms": ["windows", "macos", "playstation 4", "playstation 5", "xbox one","xbox series x/s"],
    "modes": ["multiplayer"],
    "publishers": "Blizzard Entertainment",
    "developers": "Blizzard Entertainment",
    "imageSrc": "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt2103e5cde877112f/62a27a6a6eb6de7d054a5ae0/Overwatch2_Secondary_DKBKGD.png"
    },

    {"name": "Call of duty: Modern Warfare 2", 
    "release_date": ["November 10, 2009", "May 20, 2014", "March 30, 2020", "April 30, 2020"],
    "genre": ["first-person shooter"],
    "rating": 8.0,
    "platforms": ["windows", "playstation 3","playstation 4", "playstation", "xbox 360", "xbox one"],
    "modes": ["single-player", "multiplayer"],
    "publishers": "Activision",
    "developers": ["Infinity Ward", "Beenox"],
    "imageSrc": "https://icon-library.com/images/modern-warfare-2-icon/modern-warfare-2-icon-23.jpg"
    },

    {"name": "The Legends of Zelda: Breath of the Wild", 
    "release_date": ["March 3, 2017"],
    "genre": "action-adventure",
    "rating": 4.8,
    "platforms": ["nintendo switch", "wii u"],
    "modes": ["single-player"],
    "publishers": "Nintendo",
    "developers": "Nintendo EPD",
    "imageSrc": "https://www.zelda.com/breath-of-the-wild/assets/img/buy/digital-edition.png"
    }];

  const [listOfGames, setlistOfGames] = useState(initListOfGames);

  return (
    <div>
      <Header></Header>
      <div className="populargames">                      
        <div className="mostpopulargames">
          <GameList listOfGames={listOfGames}/>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

function Footer() {
  return (
    <footer>
      Ryan Setaruddin
      Software Developer
    </footer>
  )
}
export default Home;