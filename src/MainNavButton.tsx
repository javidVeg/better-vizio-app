import React from 'react'
import vizio from "./assets/vizio.png"
import { BiDownArrow } from 'react-icons/bi';
import { IoIosReturnLeft } from 'react-icons/io';
import './App.css'
import 'tw-elements';

const MainNavButton = () => {
    return (
        <main className='flex flex-col justify-center items-center'>
            <div className='shadow-[0px_0px_5px_0px_black] relative w-[280px] h-[280px] bg-white bg-opacity-60 mt-2 rounded-xl'>
                <button type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className='grid bg-slate-200 
                     hover:bg-slate-300 hover:shadow-lg focus:bg-slate-300 focus:shadow-lg 
                    focus:outline-none focus:ring-0 active:bg-slate-400 active:drop-shadow-[0px_0px_20px_#4D4D4D] 
                    transition duration-150 ease-in-out absolute w-[140px] h-[140px]  left-[4.4rem] 
                    bottom-[4.3rem]  place-content-center drop-shadow-[0px_0px_10px_#4D4D4D]'>
                    <img src={vizio} alt="logo" className=' w-20 grid place-content-center'></img>
                </button>
                <button id="btn-left" className='pl-12 pr-12 absolute  bg-transparent rotate-90 bottom-[6.7rem] left-[-2.4rem] '>
                    <BiDownArrow size={40} className=" hover:fill-purple-900 hover:drop-shadow-[0px_0px_10px_#2c1263]" />
                </button>
                <button id="btn-top" className='pl-12 pr-12 absolute  bg-transparent rotate-180 left-[4.5rem]'>
                    <BiDownArrow size={40} className=" hover:fill-purple-900 hover:drop-shadow-[0px_0px_10px_#2c1263]" />
                </button>
                <button id="btn-right" className='pl-12 pr-12  absolute  bg-transparent -rotate-90 bottom-[6.7rem] left-[11.3rem]  '>
                    <BiDownArrow size={40} className=" hover:fill-purple-900 hover:drop-shadow-[0px_0px_10px_#2c1263]" />
                </button>
                <button id="btn-bottom" className='pl-12 pr-12 absolute  bg-transparent left-[4.46rem] bottom-[0rem]'>
                    <BiDownArrow size={40} className=" hover:fill-purple-900 hover:drop-shadow-[0px_0px_10px_#2c1263]" />
                </button>
                <button id="btn-left" className='absolute  bg-transparent bottom-[.015rem] left-[-.01rem] '>
                    <IoIosReturnLeft size={30} className=" hover:fill-purple-900 hover:drop-shadow-[0px_0px_10px_#2c1263]" />
                </button>
            </div>



        </main>
    )
}

export default MainNavButton