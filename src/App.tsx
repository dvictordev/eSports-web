import "./styles/main.css";
import { useEffect, useState } from "react";
import { GameBanner } from "./components/GameBanner";
import axios from 'axios'
import { CreateAdBanner } from "./components/CreateAdBanner";

import logo from "./assets/Logo.svg";


function App() {

  interface gameProps{
    id:string,
    name: string,
    bannerUrl:string,
    _count:{
      ads:number
    }
  }

  const [games, setGames] = useState<gameProps[]>([]);


  useEffect(()=> {
    axios.get('http://localhost:3333/games').then(res => {
      setGames(res.data)
    })
  },[])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center">
      <img src={logo} alt="" className="my-20" />

      <h1 className="text-white text-6xl font-black">
        Seu{" "}
        <span className="bg-backgroundGradient text-transparent bg-clip-text">
          Duo
        </span>{" "}
        esta aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6  my-16">
       {games.map(game => {
        return(
          <GameBanner bannerUrl={game.bannerUrl} title={game.name} adsCount={game._count.ads}/>
        )
       } )}
      </div>

      <CreateAdBanner />
    </div>
  );
}

export default App;
