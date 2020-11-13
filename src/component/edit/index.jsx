import React, { useContext } from 'react'
// context 
import { RestaurantContext } from '../../context/restauran'
// api
import { getListRestaurant, editRestaurant } from '../../api'
const Edit = () => {
    const {
        setList,
        form,
        restaurant,
        NombreR, setNombreR,
        DescripcionR, setDescripcionR,
        DireccionR, setDireccionR,
        CiudadR, setCiudadR,
        UrlFotoR, setUrlFotoR
     } = useContext(RestaurantContext)


    const goEdit = id => {
        editRestaurant(id, NombreR, DescripcionR, DireccionR, CiudadR, UrlFotoR).then(
            res =>alert(res.message)
        )
        .then(()=> getListRestaurant().then(
            res => {
                setList(res.info)
                setNombreR('')
                setDescripcionR('')
                setDireccionR('')
                setCiudadR('')
                setUrlFotoR('')
            }
        ))
        .catch(e=>alert(e.message))
    }

    return (
        <div style={{display: form==='edit'?'flex':'none'}} className='create'>
            <div className='groupInput'>
                <div>Nombre</div>
                <input value={NombreR} onChange={e => setNombreR(e.target.value)} />
            </div>
            <div className='groupInput'>
                <div>Descripcion</div>
                <input value={DescripcionR} onChange={e => setDescripcionR(e.target.value)} />
            </div>
            <div className='groupInput'>
                <div>Direccion</div>
                <input value={DireccionR} onChange={e => setDireccionR(e.target.value)} />
            </div>
            <div className='groupInput'>
                <div>Ciudad</div>
                <input value={CiudadR} onChange={e => setCiudadR(e.target.value)} />
            </div>
            <div className='groupInput'>
                <div>Url Foto</div>
                <input value={UrlFotoR} onChange={e => setUrlFotoR(e.target.value)} />
            </div>
            <button onClick={()=>goEdit(restaurant.id)} >editar</button>
        </div>
    )
}

export default Edit