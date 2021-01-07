import React,{useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MenuBar = () => {
 const [isOpen, setIsOpen] = useState(false)

// const [show, setShow] = useState(true)


const toggle = () =>{
    setIsOpen(!isOpen)
}

    return (
        <>
       
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
            
        </>
    )
}

export default MenuBar
