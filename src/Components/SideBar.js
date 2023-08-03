import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'

const SideBar = ({ Option }) => {


    const [chnageValue, setChangeValue] = useState(0);

    const renderOptions = Option.map((option, index) => {
        const handleActive = () => {
            setChangeValue(index);
        };
        let activeClass = ''
        if (index === chnageValue) {
            activeClass = 'activeOption'
        }
        else {
            activeClass = ''
        }

        return (
            <>
                <li className='sideOption' onClick={handleActive}>
                    <Link key={option.id} className={`${activeClass}`} to={option.path}>{option.label}</Link>
                </li>
            </>
        )
    })

    return (
        <div>
            <ul className='sideBarBox'>
                {renderOptions}
            </ul>
        </div>
    )
}

export default SideBar
