import { NavLink } from "react-router-dom"
import logo from './images/logo.svg'
import { useEffect, useState } from "react"
import menu from './images/icon-hamburger.svg'
import close from './images/icon-close.svg'
import gsap from "gsap"
function Navbar(){
    const [width, setWidth]=useState(window.innerWidth)
    const [menus, setClose]=useState(false)
    const [drop, setDrop]=useState(false)
    function handleWidth(){
        setWidth(window.innerWidth)
    }
    function handleMenu(){
        if(!drop && width <=700){
        gsap.to(document.querySelector('.links'),{
            duration: 1,
            y: '-170%',
            ease: "power1.inOut",
            stagger:'0.2'
        })
    }
    else if(drop && width<=700){
            gsap.to(document.querySelector('.links'),{
                duration: 1,
                y: '60%',
                ease: "power1.inOut",
                stagger:'0.2'
            })
        }
    }
    function handleimg(){
        if(menus){
            setDrop(!drop)
            console.log(menus)
            setTimeout(()=>setClose(!menus),1200)
        }
        else if (!menus){
            setDrop(!drop)
            console.log(menus)
            setClose(!menus)
            document.querySelector('.links').focus()
        }
    }
    useEffect(()=>{
            handleMenu()
    },[drop])
    useEffect(()=>{
        window.addEventListener('resize',handleWidth)
        return ()=>{
            window.removeEventListener('resize',handleWidth)
        }
    },[])
    function CloseMenu(){
        handleMenu()
        handleimg()
    }
    console.log(width)
    return(
        <div className="navbar" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:'center'}}>
            <div>
            <NavLink to="/">
                <img src={logo}  alt="logo"/>
            </NavLink>
            </div>
            <div className="links" style={{display:width<=700 && !menus? 'none': 'flex'  ,flexDirection:width<=700 ? "column": 'row', justifyContent:'center', position:width<=700 && 'absolute', marginLeft: width<=700 && '10px', marginRight: width<=700 && '10px'}}>
                <NavLink onClick={CloseMenu} to="/Pricing">Pricing</NavLink>
                <NavLink onClick={CloseMenu} to="/Product">Product</NavLink>
                <NavLink onClick={CloseMenu} to="/About">About us</NavLink>
                <NavLink onClick={CloseMenu} to="/Careers">Careers</NavLink>
                <NavLink onClick={CloseMenu} to="/Community">Community</NavLink>
            </div>
            <div>
                <button style={{display:width<=700 && "none" }}>Get Started</button>
                <img src={drop? close :menu} onClick={handleimg} style={{cursor:"pointer",display:width>700 && "none" }} alt="menu"/>
            </div>
        </div>
    )
}
export default Navbar