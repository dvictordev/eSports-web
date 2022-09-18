import {FormEvent, useState, useEffect } from 'react'
import { CaretDown } from 'phosphor-react';
import { Input } from "./form/Input";
import { gameProps } from '../App';
import { Check, GameController } from "phosphor-react";


import axios from 'axios';


import * as Select from '@radix-ui/react-select';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from '@radix-ui/react-toggle-group';



export function CreateAdModal(){
    const [useVoiceChannel, setUseVoiceChannel] = useState(false)
    const [weekDays, setWeekDays] = useState<string[]>([])
    const [games, setGames] = useState<gameProps[]>([]);
    const [gameId, setGameId] = useState('')
    

    useEffect(() => {
        axios.get("http://localhost:3333/games").then((res) => {
        setGames(res.data);
        });
    }, []);



    function handleCreateAd(event : FormEvent){
        
        event.preventDefault()
        
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        console.log(weekDays)

        axios.post(`http://localhost:3333/games/${gameId}/ads`,{
            name: data.name,
            yearsPlaying:Number(data.yearsPlaying),
            discord:data.discord,
            weekDays: weekDays.map(Number),
            hourStart: data.hourStart,
            hourEnd: data.hourEnd,
            useVoiceChannel: useVoiceChannel
        })

        
    }

    return(
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content 
          className="fixed w-[480px] bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg shadow-lg shadow-black/25">
            <Dialog.Title className="text-3xl font-black">Publique um anúncio</Dialog.Title>
            <form onSubmit={handleCreateAd} className="flex flex-col gap-4 mt-8">
              <div className="flex flex-col gap-2">
                <label htmlFor="game">Qual o game?</label>
                <Select.Root onValueChange={setGameId}>
                    <Select.Trigger className='bg-zinc-900 flex justify-between px-2 py-3 rounded'>
                        <Select.Value placeholder="Selecione o Game que voce deseja jogar"/>
                        <CaretDown size={24}/>
                    </Select.Trigger>

                    <Select.Portal>
                        <Select.Content className='w-[400px] bg-zinc-900 fixed shadow-2xl'>
                            <Select.Viewport className='fixed'>
                            {games.map(game => {
                                return(
                                    <Select.Item  key={game.id} value={game.id} className='text-white p-2 hover:bg-zinc-600 cursor-pointer'>
                                        <Select.ItemText >
                                            {game.name}
                                        </Select.ItemText>
                                    </Select.Item>
                                )
                            })}
                            </Select.Viewport>
                        </Select.Content>
                    </Select.Portal>
                </Select.Root>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input name="name" id="name" placeholder="Como te chamam dentro do game?" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input name="yearsPlaying" id="yearsPlaying" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discor">Qual seu Discord?</label>
                  <Input name="discord" id="discord" placeholder="Usuario#0000" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <ToggleGroup.Root 
                    onValueChange={setWeekDays}
                    value={weekDays}
                    type='multiple' 
                    className="grid grid-cols-4 gap-2">
                        <ToggleGroup.Item
                            value="0" 
                            title="Domingo"
                            className={`bg-zinc-900 px-2 py-2 rounded ${weekDays.includes('0') ? 'bg-violet-500' : ''}` }
                        >
                        D
                        </ToggleGroup.Item >
                        <ToggleGroup.Item
                            value="1" 
                            className={`bg-zinc-900 px-2 py-2 rounded ${weekDays.includes('1') ? 'bg-violet-500' : ''}` }
                            title="Segunda"
                        >
                        S
                        </ToggleGroup.Item >
                        <ToggleGroup.Item
                            value="2" 
                            className={`bg-zinc-900 px-2 py-2 rounded ${weekDays.includes('2') ? 'bg-violet-500' : ''}` }
                            title="Terça"
                        >
                        T
                        </ToggleGroup.Item >
                        <ToggleGroup.Item
                            value="3" 
                            className={`bg-zinc-900 px-2 py-2 rounded ${weekDays.includes('3') ? 'bg-violet-500' : ''}` }
                            title="Quarta"
                        >
                        Q
                        </ToggleGroup.Item >
                        <ToggleGroup.Item
                            value="4" 
                            className={`bg-zinc-900 px-2 py-2 rounded ${weekDays.includes('4') ? 'bg-violet-500' : ''}` }
                            title="Quinta"
                        >
                        Q
                        </ToggleGroup.Item >
                        <ToggleGroup.Item
                            value="5" 
                            className={`bg-zinc-900 px-2 py-2 rounded ${weekDays.includes('5') ? 'bg-violet-500' : ''}` }
                            title="Sexta"
                        >
                        S
                        </ToggleGroup.Item >
                        <ToggleGroup.Item
                            value="6" 
                            className={`bg-zinc-900 px-2 py-2 rounded ${weekDays.includes('6') ? 'bg-violet-500' : ''}` }
                            title="Sabado"
                        >
                        S
                        </ToggleGroup.Item >
                    </ToggleGroup.Root>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="flex justify-between gap-2">
                    <Input
                      type="time"
                      className="bg-[#121214] p-2"
                      name="hourStart" id="hourStart"
                      placeholder="De"
                    />
                    <Input
                      type="time"
                      className="bg-[#121214] p-2"
                      name="hourEnd" id="hourEnd"
                      placeholder="Até"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full gap-2 mt-4">
                <Checkbox.Root onCheckedChange={() => setUseVoiceChannel(!useVoiceChannel)} className='w-6 h-6 p-1 bg-zinc-900 rounded'>
                    <Checkbox.Indicator >
                        <Check className='w-4 h-4 text-emerald-500'/>
                    </Checkbox.Indicator>
                </Checkbox.Root>
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
    )
}