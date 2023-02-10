import React, { useState, useEffect } from 'react'

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
        <main className='flex flex-row justify-center '>
            <div>
                <p className=' text-white'>
                    You are connected to {shownItem}
                </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <button className=' bg-transparent text-white' onClick={handleMenu}>V</button>
                {menu && <div>
                    <ul >
                        {items.map(item => (
                            <li key={item} onClick={() => handleItem(item)}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>}
            </div>
        </main>
    )
}

export default TvSelection