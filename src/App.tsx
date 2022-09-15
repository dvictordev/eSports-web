import "./styles/main.css";
import { useEffect, useState } from "react";
import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { Input } from "./components/form/Input";
import { GameController, X } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import logo from "./assets/Logo.svg";

function App() {
  interface gameProps {
    id: string;
    name: string;
    bannerUrl: string;
    _count: {
      ads: number;
    };
  }

  const [games, setGames] = useState<gameProps[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3333/games").then((res) => {
      setGames(res.data);
    });
  }, []);

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
        {games.map((game) => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.name}
              adsCount={game._count.ads}
            />
          );
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed w-[480px] bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg shadow-black/25">
            <div className="flex justify-between">
              <Dialog.Title className="text-3xl font-black">
                Publique um anúncio
              </Dialog.Title>
            </div>

            <form className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game">Qual o game?</label>
                <Input
                  id="game"
                  placeholder="Selecione o game que deseja jogar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input id="name" placeholder="Como te chamam dentro do game?" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discor">Qual seu Discord?</label>
                  <Input id="discord" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      className="bg-zinc-900 px-2 py-2 rounder"
                      title="Domingo"
                    >
                      0
                    </button>
                    <button
                      className="bg-zinc-900 px-2 py-2 rounder"
                      title="Segunda"
                    >
                      1
                    </button>
                    <button
                      className="bg-zinc-900 px-2 py-2 rounder"
                      title="Terça"
                    >
                      2
                    </button>
                    <button
                      className="bg-zinc-900 px-2 py-2 rounder"
                      title="Quarta"
                    >
                      3
                    </button>
                    <button
                      className="bg-zinc-900 px-2 py-2 rounder"
                      title="Quinta"
                    >
                      4
                    </button>
                    <button
                      className="bg-zinc-900 px-2 py-2 rounder"
                      title="Sexta"
                    >
                      5
                    </button>
                    <button
                      className="bg-zinc-900 px-2 py-2 rounder"
                      title="Sabado"
                    >
                      6
                    </button>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="flex justify-between gap-2">
                    <Input
                      type="time"
                      className="bg-[#121214] p-2"
                      id="hourStart"
                      placeholder="De"
                    />
                    <Input
                      type="time"
                      className="bg-[#121214] p-2"
                      id="hourEnd"
                      placeholder="Até"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-2 mt-4">
                <Input type={"checkbox"} name="voiceChannel" className="" />
                <label htmlFor="voiceChannel">
                  Costumo me conectar ao chat de voz
                </label>
              </div>

              <footer className="flex justify-end gap-4 mt-4">
                <Dialog.Close className="px-5 py-3 bg-zinc-500 hover:bg-zinc-700 rounded-md">
                  Cancelar
                </Dialog.Close>

                <button className="flex items-center justify-between gap-3 px-5 py-3 bg-violet-500 hover:bg-violet-700 rounded-md">
                  <GameController size={24} weight="bold" />
                  Encontrar duo
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
