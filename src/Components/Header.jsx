import React from 'react'
import "../App.css"
function Header() {
  return (
    <div>
        <header>
            <h1 className='my-title'>Fake Store</h1>
            <nav>
                <ul className='menu-list'>
                    <li><a href="/ " className='list'>Home</a></li>
                    <li><a href="/about" className='list'>About</a></li>
                    <li><a href="/contact" className='list'>Contact</a></li>
                </ul>
            </nav>
                <a href="/basket"><button className='basket-btn'>Basket</button></a>
        </header>
    </div>
  )
}

export default Header