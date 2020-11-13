const back = process.env.REACT_APP_BACK

export const getListRestaurant = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

    return fetch(`${back}/restaurant/`, requestOptions)
            .then(response => response.json())
}

export const createRestaurant = (Nombre,Descripcion,Direccion,Ciudad,Url_foto) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({Nombre,Descripcion,Direccion,Ciudad,Url_foto});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch(`${back}/restaurant/`, requestOptions)
            .then(response => response.json())
}

export const editRestaurant = (id, Nombre,Descripcion,Direccion,Ciudad,Url_foto) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({Nombre,Descripcion,Direccion,Ciudad,Url_foto});

    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch(`${back}/restaurant/${id}`, requestOptions)
            .then(response => response.json())
}


export const goDeleteRestaurant = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch(`${back}/restaurant/${id}`, requestOptions)
            .then(response => response.json())
}

export const getListReservation = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch(`${back}/resvation/`, requestOptions)
    .then(response => response.json())
}

export const  createRessrvation = (Restaurant_id,Cliente,Fecha_reserva) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({Restaurant_id, Cliente, Fecha_reserva});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    return fetch(`${back}/resvation/`, requestOptions)
    .then(response => response.json())
}

export const  goDeleteReservation = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
    };

    return fetch(`${back}/resvation/${id}`, requestOptions)
    .then(response => response.json())
}