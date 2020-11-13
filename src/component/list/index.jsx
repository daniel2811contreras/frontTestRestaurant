import React, { useContext, useEffect } from 'react'
// context 
import { RestaurantContext } from '../../context/restauran'
// api
import { getListRestaurant } from '../../api'
const List = () => {
    const {
        list, setList,
     } = useContext(RestaurantContext)

     useEffect(() => {
        getListRestaurant().then(
            res => setList(res.info)
        )
     })

    return list.lenght > 0 ?(
        <div>
            <button>+ Crear restaurante</button>
            <h1>
                no hay restaurantes creados
            </h1>
        </div>
    ) : (
        <div>
            <button>+ Crear restaurante</button>
            <h1>lista de restaurantes</h1>
            <div className='list'>
                <div className='item'>
                    <div className='th'>Nombre</div>
                    <div className='th'>Dirección</div>
                    <div className='th'>Ciudad</div>
                </div>
                {list.map((rest, i)=><div className='item' key={i}>
                    <div>{rest.Nombre}</div>
                    <div>{rest.Dirección}</div>
                    <div>{rest.Ciudad}</div>
                    <div className='contButton'>
                        <button>ver</button>
                        <button>reservar</button>
                        <button>editar</button>
                        <button>borrar</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default List