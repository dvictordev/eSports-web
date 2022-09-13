import "./styles/main.css";
import logo from "./assets/Logo.svg";
import gameImg from "./assets/fundoCarousel.svg";
import lupa from "./assets/lupa.svg";

function App() {
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
        <a href="" className="relative">
          <img src={gameImg} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-400 block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src={gameImg} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-400 block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src={gameImg} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-400 block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src={gameImg} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-400 block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src={gameImg} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-400 block">4 anuncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src={gameImg} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-gameGradient absolute bottom-0 left-0 right-0">
            <strong className="text-white font-bold block">
              League of Legends
            </strong>
            <span className="text-zinc-400 block">4 anuncios</span>
          </div>
        </a>
      </div>

      <div className="pt-1 self-stretch bg-backgroundGradient mt-8 rounded-lg overflow-hidden">
        <div className=" bg-[#2A2634] px-8 py-8 rounded-b-lg flex justify-between items-center">
          <div className="">
            <strong className="font-black text-white text-2xl block">
              Não encontrou o seu Duo ?
            </strong>
            <span className="text-zinc-400 mt-1 b-4 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className="bg-violet-500 px-4 py-2 flex gap-1 rounded text-white hover:bg-violet-600 transition delay-75">
            <img src={lupa} alt="" />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
