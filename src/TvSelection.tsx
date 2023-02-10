import React, { useState, useEffect } from 'react'
import { BsFillTvFill } from 'react-icons/bs';
import { BsCaretDownSquare } from 'react-icons/bs';
import './App.css'

const TvSelection = () => {
    const [menu, setMenu] = useState(false)
    const [selectItem, setSelectItem] = useState("")
    const [shownItem, setShownItem] = useState("tv1")


    const handleMenu = () => {
        if (!menu) {
            setMenu(true)
            console.log("true")
        } else {
            setMenu(false)
            console.log("false")
        }

    }

    const handleItem = (item) => {
        setSelectItem(item)
    }
    useEffect(() => {
        console.log(selectItem)
        setShownItem(selectItem)
        const reSet = () => {
            if (selectItem != "") {
                setMenu(false)
            }
        }
        reSet()

    }, [selectItem])

    const items = ["Living Room TV", "Andrew's Room TV", "Bedroom TV"]

    return (
        <main className='menu-bg relative flex flex-row justify-between w-[200px] h-[50px]  border-white border-l-1 border-opacity-30 border-solid border-[1.5px] rounded-lg'>
            <div className='ml-3 flex flex-row justify-center items-center'>
                {/* <BsFillTvFill color='white' /> */}
                <div className='flex flex-col text-left'>
                    <p className='text-xs font-semibold text-white'>
                        Connected to: 
                    </p>
                    <p className=' text-sm text-white'>
                        {shownItem}
                    </p>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className=' bg-transparent text-white' onClick={handleMenu}><BsCaretDownSquare /></button>
                {menu && <div className='w-[200px] bg-white bg-opacity-90 absolute top-[50px] left-[-1px] rounded'>
                    <ul >
                        {items.map(item => (
                            <li className=' 
                             text-left text-sm font-medium p-1' key={item} onClick={() => handleItem(item)}>
                                <p className=' text-black  hover:bg-slate-800 hover:bg-opacity-20'>{item}</p>
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
        </main>
    )
}

export default TvSelection