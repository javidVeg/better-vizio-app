import React from 'react'
import { MdCable } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import { FaClosedCaptioning } from 'react-icons/fa';
import { ImHome3 } from 'react-icons/im';
import { FaKeyboard } from 'react-icons/fa';
import { MdKeyboardVoice } from 'react-icons/md';
import { ImVolumeMute2 } from 'react-icons/im';
import { HiPlus } from 'react-icons/hi';
import { HiMinus } from 'react-icons/hi';

const ControlButtons = () => {
    return (
        <main>
            <div className='flex flex-row justify-center gap-7'>
                <div className='flex flex-col gap-3'>
                    <button className='shadow-[0px_0px_5px_0px_black] w-12 h-12 bg-white bg-opacity-60 grid place-content-center'><MdCable size={20} /></button>
                    <button className='shadow-[0px_0px_5px_0px_black] w-12 h-12 bg-white bg-opacity-60 grid place-content-center'><AiFillSetting size={20} /></button>
                </div>
                <div className='flex flex-col gap-3'>
                    <button className='shadow-[0px_0px_5px_0px_black] w-12 h-12 bg-white bg-opacity-60 grid place-content-center'><FaClosedCaptioning size={20} /></button>
                    <button className='shadow-[0px_0px_5px_0px_black] w-12 h-12 bg-white bg-opacity-60 grid place-content-center'><ImHome3 size={20} /></button>
                </div>
                <div className='flex flex-col gap-3'>
                    <button className='shadow-[0px_0px_5px_0px_black] w-12 h-12 bg-white bg-opacity-60 grid place-content-center'><FaKeyboard size={20} /></button>
                    <button className='shadow-[0px_0px_5px_0px_black] w-12 h-12 bg-white bg-opacity-60 grid place-content-center'><MdKeyboardVoice size={25} /></button>
                </div>
                <div className='shadow-[0px_0px_5px_0px_black] flex flex-col rounded-[10.5px] '>
                    <button className='w-12 h-[2.35rem] bg-white bg-opacity-60 grid place-content-center rounded-b-none border-t-0 border-l-0 
                    border-r-0 border-b-[.8px] border-solid border-black'>
                        <HiPlus size={20} />
                    </button>
                    <button className='w-12 h-8 bg-white bg-opacity-60 grid place-content-center rounded-r-none rounded-l-none'>
                        <ImVolumeMute2 size={15} />
                    </button>
                    <button className='w-12 h-[2.35rem] bg-white bg-opacity-60 grid place-content-center rounded-t-none border-t-[.8px] border-l-0 
                    border-r-0 border-b-0 border-solid border-black'>
                        <HiMinus size={20} />
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ControlButtons