import React from "react"
import "./NavBar.scss"


const Navbar =  () => {
  return(
  <nav className='NavBarVertical'>
    <h2 className='NavBarTitle'>CF Music 🎵</h2>
    <a href="/" className='NavBarText'>Home 🏠</a>
    <a className='NavBarText'>Search 🔎</a>
    <a href="/Library" className='NavBarText'>Library 📚</a>
  </nav>
  )
  }


  export default Navbar