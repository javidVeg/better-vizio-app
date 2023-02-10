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
            if(selectItem != ""){
                setMenu(false)
            }
        }
        reSet()

    }, [selectItem])

    const items = ["tv1", "tv2", "tv3"]

    return (
        <main className='menu-bg relative flex flex-row justify-center w-[250px] h-[50px] border-white border-opacity-30 border-solid border-[1.5px] rounded-lg'>  
            <div className='flex flex-row justify-center items-center gap-3'>
            <BsFillTvFill color='white'/>
                <p className='text-sm text-white'>
                   Connected to: {shownItem}
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className=' bg-transparent text-white' onClick={handleMenu}><BsCaretDownSquare/></button>
                {menu && <div className='w-[250px] bg-white bg-opacity-60 absolute top-[50px] left-[-1px] rounded'>
                    <ul >
                        {items.map(item => (
                            <li className='border-[1.5px] border-black border-opacity-30 border-t-0 border-l-0 border-r-0 border-b-2 border-solid' key={item} onClick={() => handleItem(item)}>
                               <p className=''>{item}</p> 
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
        </main>
    )
}

export default TvSelection