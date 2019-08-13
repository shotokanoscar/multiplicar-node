const fs = require('fs');
//const colors = require('colors');
const colors = require('colors/safe');
//const fs = require('express');
//const fs = require('./fs');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor ingresado ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`el valor ingresado del limite ${limite} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.red(`tabla-${base}-al-${limite}.txt`))

        });

    });

}

let listar = (base, limite) => {
    let datalista = '';
    for (let i = 1; i <= limite; i++) {
        datalista += `${base} * ${i} = ${base * i} \n`;
    }

    console.log('=================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=================='.green);
    console.log(datalista);

    // return new Promise((resolve, reject) => {

    //     if (!Number(base)) {
    //         reject(`el valor de la base ${base} ingresado no es un numero`);
    //         return;
    //     }

    //     if (!Number(limite)) {
    //         reject(`el limite ingresado ${limite} no es un numero`);
    //         return;
    //     }

    //     let datalista = '';
    //     for (let i = 1; i <= limite; i++) {
    //         datalista += `${base} * ${i} = ${base * i} \n`;
    //     }

    //if (err)
    //    reject(err)
    //else
    //     resolve(datalista)
    // });

}

module.exports = {
    crearArchivo,
    listar
}