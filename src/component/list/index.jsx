import React, { useContext, useEffect } from 'react'
// context 
import { RestaurantContext } from '../../context/restauran'
// api
import { getListRestaurant, goDeleteRestaurant } from '../../api'
const List = () => {
    const {
        list, setList,
        setForm,
        setRestaurant,
        setNombreR,
        setDescripcionR,
        setDireccionR,
        setCiudadR,
        setUrlFotoR
     } = useContext(RestaurantContext)

    const goEdit = rest => {
        setForm('edit') 
        setRestaurant(rest)
        setNombreR(rest.Nombre)
        setDescripcionR(rest.Descripcion)
        setDireccionR(rest.Direccion)
        setCiudadR(rest.Ciudad)
        setUrlFotoR(rest.Url_foto)
    }

    const goDelete = id => {
        goDeleteRestaurant(id).then(
            res =>alert(res.message)
        )
        .then(()=> getListRestaurant().then(
            res => setList(res.info)
        ))
    }

    useEffect(() => {
        getListRestaurant().then(
            res =>  JSON.stringify(list)!==JSON.stringify(res.info) && setList(res.info)
        )
     })

    return list.lenght > 0 ?(
        <div>
            <button onClick={()=> setForm('create')}>+ Crear restaurante</button>
            <h1>
                no hay restaurantes creados
            </h1>
        </div>
    ) : (
        <div>
            <button onClick={()=> setForm('create')}>+ Crear restaurante</button>
            <h1>lista de restaurantes</h1>
            <div className='list'>
                <div className='item'>
                    <div className='th'>Nombre</div>
                    <div className='th'>Dirección</div>
                    <div className='th'>Ciudad</div>
                </div>
                {list.map((rest, i)=><div className='item' key={i}>
                    <div>{rest.Nombre}</div>
                    <div>{rest.Direccion}</div>
                    <div>{rest.Ciudad}</div>
                    <div className='contButton'>
                        <button onClick={()=> {setForm('show'); setRestaurant(rest) }}>ver</button>
                        <button onClick={()=> {setForm('reservar'); setRestaurant(rest) }}>reservar</button>
                        <button onClick={()=> goEdit(rest) }>editar</button>
                        <button onClick={()=> goDelete(rest.id) }>borrar</button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default List