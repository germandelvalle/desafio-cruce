import React from 'react'
import banner from "../styles/images/movile/banner.png"

const Header = ()=>{
    return (
        <header>
            <div>
                <img src={banner} alt='banner'/>
            </div>
        </header>
    )
}

export default Header