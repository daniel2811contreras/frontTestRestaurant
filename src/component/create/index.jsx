import React, { useContext } from 'react'
// context 
import { RestaurantContext } from '../../context/restauran'
// api
import { getListRestaurant, createRestaurant } from '../../api'
const Create = () => {
    const {
        setList,
        form,
        NombreR, setNombreR,
        DescripcionR, setDescripcionR,
        DireccionR, setDireccionR,
        CiudadR, setCiudadR,
        UrlFotoR, setUrlFotoR
     } = useContext(RestaurantContext)


    const goCreate = () => {
        createRestaurant(NombreR, DescripcionR, DireccionR, CiudadR, UrlFotoR).then(
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
        <div style={{display: form==='create'?'flex':'none'}} className='create'>
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
            <button onClick={()=>goCreate()} >Crear</button>
        </div>
    )
}

export default Create