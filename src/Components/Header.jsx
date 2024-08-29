import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        <header>
            <h1 className='my-title'>Fake Store</h1>
            <nav>
                <ul className='menu-list'>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/about">About</Link></li>
                   <li><Link to="/contact">Contact</Link></li>
                   <li><Link to="/mybasket">Basket</Link></li>
                </ul>
            </nav>
            <button className='basket-btn' onClick={() => {
              window.location.href = "https://glovoapp.com/am/en/yerevan/?utm_source=google&utm_medium=cpc&utm_campaign=google_Performance_AM_ALL_Search_cpa_All_FirstOrder_0_NewUsers_Russian__DigitalBudget_NoPromo_0_20220331&utm_campaignid=16744620149&utm_adgroupid=140343229612&utm_term=%28_term%29&utm_matchtype=%28_matchtype%29&utm_device=%28_device%29&gad_source=1&gclid=CjwKCAjwuMC2BhA7EiwAmJKRrMQd-NYNqu5d7RbJO0FiPaC9hQpIO6rC7QefEw3hQJb3F4gSKu_ViBoCnx4QAvD_BwE"
            }} >Get Started</button>
        </header>
    </div>
  )
}

export default Header