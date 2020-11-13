import React, {createContext, useState}  from 'react'
const RestaurantContext = createContext()
const { Provider, Consumer } = RestaurantContext

const RestaurantProvider = ({children}) =>  {
    const [list, setList] = useState([])
    const [restaurant, setRestaurant] = useState(null)
    const [NombreR, setNombreR] = useState('')
    const [DescripcionR, setDescripcionR] = useState('')
    const [DireccionR, setDireccionR] = useState('')
    const [CiudadR, setCiudadR] = useState('')
    const [UrlFotoR, setUrlFotoR] = useState('')

    return(
        <Provider
            value={{
                list, setList,
                restaurant, setRestaurant,
                NombreR, setNombreR,
                DescripcionR, setDescripcionR,
                DireccionR, setDireccionR,
                CiudadR, setCiudadR,
                UrlFotoR, setUrlFotoR
            }}
        >
           {children} 
        </Provider>
    )
}

export { RestaurantProvider, Consumer as RestaurantConsumer, RestaurantContext }