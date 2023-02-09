import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FaSignal } from 'react-icons/fa';
import { IoIosWifi } from 'react-icons/io';
import { BsBatteryFull } from 'react-icons/bs';
import { MdSettingsRemote } from 'react-icons/md';
import { AiFillAppstore } from 'react-icons/ai';
import { GiPopcorn } from 'react-icons/gi';
import { BiMessage } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { MdCable } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { FaClosedCaptioning } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { FaKeyboard } from 'react-icons/fa';
import { MdKeyboardVoice } from 'react-icons/md';
import { ImVolumeMute2 } from 'react-icons/im';
import { HiPlus } from 'react-icons/hi';
import { HiMinus } from 'react-icons/hi';
import './App.css'
import MainNavButton from './MainNavButton';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App">
      <header className='h-28 bg-zinc-700'>
        <div className=' overflow-hidden relative h-12 bg-red-400 flex flex-col '>
          <div className='relative h-9 bg-lime-200 flex flex-row '>
            <div className='w-1/2 h-full bg-white flex justify-start'>
              <h2>3:33</h2>
            </div>
            <div className='w-1/2 h-full bg-slate-500 flex flex-row justify-end'>
              <FaSignal color='red' />
              <IoIosWifi color='red' />
              <BsBatteryFull color='red' />
            </div>
          </div>
          <div className='overflow-hidden h-auto bg-orange-200 flex justify-start'>search</div>
        </div>
      </header>

      <body className='flex justify-center flex-col mt-[-140px]'>
        <div className='flex flex-row justify-center gap-8'>
          <div className='flex flex-col gap-3'>
            <button className='w-12 h-12 bg-slate-300'><MdCable/></button>
            <button className='w-12 h-12 bg-slate-300'><AiFillSetting/></button>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='w-12 h-12 bg-slate-300'><FaClosedCaptioning/></button>
            <button className='w-12 h-12 bg-slate-300'><ImHome3/></button>
          </div>
          <div className='flex flex-col gap-3'>
            <button className='w-12 h-12 bg-slate-300'><FaKeyboard/></button>
            <button className='w-12 h-12 bg-slate-300'><MdKeyboardVoice/></button>
          </div>
          <div className='flex flex-col'>
            <button className='w-12 h-10 bg-slate-300'><HiPlus/></button>
            <button className='w-12 h-8 bg-slate-300'><ImVolumeMute2/></button>
            <button className='w-12 h-10 bg-slate-300'><HiMinus/></button>
          </div>
        </div>
        <div className=''>
          <MainNavButton/>
        </div>
      </body>

      <footer className=' h-20 w-[380px] bg-zinc-700 absolute bottom-0 flex flex-col justify-end items-center'>
        <div className='flex flex-row justify-start items-start gap-9 mb-4'>
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
