import React from 'react'
import vizio from "./assets/vizio.png"
import { BiDownArrow } from 'react-icons/bi';
import './App.css'

const MainNavButton = () => {
    return (
        <main className='flex flex-col justify-center items-center'>
            <div className=' w-[280px] h-[280px] bg-slate-300 mt-5 rounded-xl'>
                <button className='absolute w-[140px] h-[140px] bg-slate-300 left-[19.05rem] 
                bottom-[14.4rem] grid place-content-center drop-shadow-[0px_0px_10px_#4D4D4D]
                 hover:drop-shadow-[0px_0px_10px_#2c1263]'>
                    <img src={vizio} alt="logo" className=' w-20 grid place-content-center'></img>
                </button>
                <button id="btn-left" className='pl-12 pr-12 absolute bg-transparent rotate-90 bottom-[16.8rem] left-[12.3rem] '>
                    <BiDownArrow size={40} className=" hover:fill-purple-900"/>
                </button>
                <button id="btn-top" className='pl-12 pr-12 absolute bg-transparent rotate-180 left-[19.2rem]'>
                    <BiDownArrow size={40} className=" hover:fill-purple-900"/>
                </button>
                <button id="btn-right" className='pl-12 pr-12  absolute bg-transparent -rotate-90 bottom-[16.8rem] left-[25.9rem]  '>
                    <BiDownArrow size={40} className=" hover:fill-purple-900"/>
                </button>
                <button id="btn-bottom" className='pl-12 pr-12 absolute bg-transparent left-[19.2rem] bottom-[10rem]'>
                    <BiDownArrow size={40} className=" hover:fill-purple-900"/>
                </button>
            </div>



        </main>
    )
}

export default MainNavButton