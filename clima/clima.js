const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=e410ed2bf58df92c45b282cd476061b2`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}