import React, {createContext, useState}  from 'react'
const RestaurantContext = createContext()
const { Provider, Consumer } = RestaurantContext

const RestaurantProvider = ({children}) =>  {
    const [list, setList] = useState([])
    const [listRes, setListRes] = useState([])
    const [form, setForm] = useState(null)
    const [restaurant, setRestaurant] = useState(null)
    const [NombreR, setNombreR] = useState('')
    const [DescripcionR, setDescripcionR] = useState('')
    const [DireccionR, setDireccionR] = useState('')
    const [CiudadR, setCiudadR] = useState('')
    const [UrlFotoR, setUrlFotoR] = useState('')
    const [NombreRes, setNombreRes] = useState('')
    const [FechaRes, setFechaRes] = useState('')

    return(
        <Provider
            value={{
                list, setList,
                listRes, setListRes,
                form, setForm,
                restaurant, setRestaurant,
                NombreR, setNombreR,
                DescripcionR, setDescripcionR,
                DireccionR, setDireccionR,
                CiudadR, setCiudadR,
                UrlFotoR, setUrlFotoR,
                NombreRes, setNombreRes,
                FechaRes, setFechaRes
            }}
        >
           {children} 
        </Provider>
    )
}

export { RestaurantProvider, Consumer as RestaurantConsumer, RestaurantContext }