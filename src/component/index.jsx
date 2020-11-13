import React from 'react'
// compone
import List from './list'
import Create from './create'
import Edit from './edit'
import Show from './show'
import Reserva from './reserva'
// style
import {ApliStyle} from '../style'
const Apli = () => {
    return (
        <div className={ApliStyle}>
            <div className='cont'>
                <List />
            </div>
            <div className='cont'>
                <Create />
                <Edit />
                <Show />
                <Reserva />
            </div>
        </div>
    )
}

export default Apli