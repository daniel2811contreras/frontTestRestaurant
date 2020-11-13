import React from 'react'
// compone
import List from './list'
// style
import {ApliStyle} from '../style'
const Apli = () => {
    return (
        <div className={ApliStyle}>
            <div className='cont'>
                <List />
            </div>
            <div className='cont'>
                form
            </div>
        </div>
    )
}

export default Apli