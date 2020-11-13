import React, { useContext } from 'react'
// context 
import { RestaurantContext } from '../../context/restauran'

const Show = () => {
    const {
        form,
        restaurant
     } = useContext(RestaurantContext)

    return restaurant ? (
        <div style={{display: form==='show'?'flex':'none'}} className='create'>
            <div className='groupInput'>
                <div>Nombre</div>
                <input value={restaurant.Nombre} disabled/>
            </div>
            <div className='groupInput'>
                <div>Descripcion</div>
                <input value={restaurant.Descripcion} disabled />
            </div>
            <div className='groupInput'>
                <div>Direccion</div>
                <input value={restaurant.Direccion} disabled />
            </div>
            <div className='groupInput'>
                <div>Ciudad</div>
                <input value={restaurant.Ciudad} disabled />
            </div>
            <div className='groupInput'>
                <div>Url Foto</div>
                <input value={restaurant.Url_foto} disabled />
            </div>
        </div>
    ) : <div></div>
}

export default Show