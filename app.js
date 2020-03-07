const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para optener el clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatitud(argv.dirrecion)
    .then(console.log);
    */

/*
clima.getClima(-33.459999, -70.639999)
    .then(console.log)
    .catch(console.log)*/

const getInfo = async(direccion) => {



    try {
        const resp_dir = await lugar.getLugarLatitud(direccion);
        const resp_clima = await clima.getClima(resp_dir.lat, resp_dir.lng);
        return (`El clima de ${resp_dir.direccion} es ${resp_clima}`);
    } catch (e) {
        throw new Error(`No se pudo determinar el clima de  ${direccion}`);
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)