import React, { useContext, useEffect } from 'react'
import DatePicker from 'react-date-picker'
import moment from 'moment'
// context 
import { RestaurantContext } from '../../context/restauran'
// api
import { getListReservation, createRessrvation, goDeleteReservation } from '../../api'
const Reservar = () => {
    const {
        listRes, setListRes,
        form,
        restaurant,
        NombreRes, setNombreRes,
        FechaRes, setFechaRes
     } = useContext(RestaurantContext)


    const goCreate = () => {
        createRessrvation(restaurant.id, NombreRes, moment(FechaRes).format('YYYY-MM-DD')).then(
            res =>alert(res.message)
        )
        .then(()=> getListReservation().then(
            res => {
                setListRes(res.info)
                setNombreRes('')
                setFechaRes('')
            }
        ))
        .catch(e=>alert(e.message))
    }

    const goDelete = id => {
        goDeleteReservation(id).then(
            res =>alert(res.message)
        )
        .then(()=> getListReservation().then(
            res => setListRes(res.info)
        ))
    }

    useEffect(() => {
        getListReservation().then(
            res =>  JSON.stringify(listRes)!==JSON.stringify(res.info) && setListRes(res.info)
        )
     })

    return (
        <div style={{display: form==='reservar'?'flex':'none'}} className='create'>
            <h1>lista de reservas <br/>{restaurant?restaurant.Nombre: ''}</h1>
            <div className='list reservation'>
                <div className='item'>
                    <div className='th'>Nombre</div>
                    <div className='th'>Fecha</div>
                </div>
                {restaurant && listRes.map((rest, i)=> restaurant.id===rest.Restaurant_id && <div className='item' key={i}>
                    <div>{rest.Cliente}</div>
                    <div>{rest.Fecha_reserva}</div>
                    <div className='contButton'>
                        <button onClick={()=> goDelete(rest.id) }>borrar</button>
                    </div>
                </div>)}
            </div>
            <div className='groupInput'>
                <div>Nombre de quien reserva</div>
                <input value={NombreRes} onChange={e => setNombreRes(e.target.value)} />
            </div>
            <div className='groupDate'>
                <div className='div'>fecha de reseracion</div>
                <DatePicker value={FechaRes} onChange={e => setFechaRes(e)} />
            </div>
            <button onClick={()=>goCreate()} >reservar</button>
        </div>
    )
}

export default Reservar