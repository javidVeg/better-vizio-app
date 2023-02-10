import { useState, useRef, useEffect } from 'react'
import { FaSignal } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';
import { BsBatteryFull } from 'react-icons/bs';
import { MdSettingsRemote } from 'react-icons/md';
import { AiFillAppstore } from 'react-icons/ai';
import { GiPopcorn } from 'react-icons/gi';
import { BiMessage } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { FiPower } from 'react-icons/fi';
import './App.css'
import MainNavButton from './MainNavButton';
import ControlButtons from './ControlButtons';
import TvSelection from './TvSelection';
import movie1 from "./assets/avengers.png"


function App() {
  
  return (
    <main className="App">

      <header className='relative h-[5.5rem] bg-zinc-700 z-50'>
        <div className=' overflow-hidden relative h-8 bg-zinc-700 flex flex-col '>
          <div className='relative h-9 bg-zinc-700 flex flex-row '>
            <div className='w-1/2 h-full bg-zinc-700 flex justify-start'>
              <h2 className=' font-semibold ml-10 text-white mt-1'>13:33</h2>
            </div>
            <div className='w-1/2 h-full bg-zinc-700 flex flex-row justify-end mr-5 gap-2 mt-2'>
              <FaSignal color='white' />
              <IoIosWifi color='white' />
              <BsBatteryFull color='white' />
            </div>
          </div>
        </div>
        <div className=' ml-5 flex flex-row gap-20 items-center '>
        <TvSelection/>
        <FiPower size={30} color='red'/>
        </div>
      </header>
      <div  className=' absolute w-[360px] top-[3rem] z-0'>
        <img src={movie1} alt="movie-poster" className='' />
        <div className=' z-10 fade-gradient absolute top-20 w-[360px] h-20'></div>
      </div>


      <div className='flex justify-center flex-col mt-[115px]'>
        <div className=' z-20'>
          <ControlButtons />
        </div>
        <div className='z-20'>
          <MainNavButton />
        </div>
        <div className='gradient-1 z-[0]'></div>
      </div>

      <footer className=' h-18 w-[360px] bg-zinc-700 absolute bottom-0 flex flex-col justify-end items-center'>
        <div className='flex flex-row justify-start items-start gap-9 p-2'>
          <div className=' flex flex-col justify-center items-center gap-1'>
            <MdSettingsRemote size={20} color='white' />
            <p className=' text-white  text-[.6rem] font-[800]'>Remote</p>
          </div>
          <div className=' flex flex-col justify-center items-center gap-1'>
            <AiFillAppstore size={20} color='white' />
            <p className=' text-white  text-[.6rem] font-[800]'>Apps</p>
          </div>
          <div className=' flex flex-col justify-center items-center gap-1'>
            <GiPopcorn size={20} color='white' />
            <p className=' text-white  text-[.6rem] font-[800]'>Browse</p>
          </div>
          <div className=' flex flex-col justify-center items-center gap-1'>
            <BiMessage size={20} color='white' />
            <p className=' text-white  text-[.6rem] font-[800]'>VIZIOGram</p>
          </div>
          <div className=' flex flex-col justify-center items-center gap-1'>
            <FiUser size={20} color='white' />
            <p className=' text-white  text-[.6rem] font-[800]'>User</p>
          </div>
        </div>
        <div className='mb-[.35rem] h-2 bg-white w-40 rounded-xl' ></div>
      </footer>
    </main>
  )
}

export default App
