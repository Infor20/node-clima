const axios = require('axios');

const getLugarLatitud = async(direccion_city) => {
    const encodeUlr = encodeURI(direccion_city);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-Key': '94fa5bb0c5msh21274a14f5581a0p1582eejsnba381ee40a90' }
    });

    const resp = await instance.get();

    if (resp.data.Results.lenght === undefined) {
        throw new Error(`No hay resultados para ${direccion_city}`);
    } else {
        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            direccion,
            lat,
            lng
        }
    }







}

module.exports = {
    getLugarLatitud
}