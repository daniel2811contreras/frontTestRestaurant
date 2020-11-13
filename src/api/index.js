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