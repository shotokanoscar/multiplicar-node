const argv = require('./config/yargs').argv;
const { crearArchivo, listar } = require('./multiplicar/multiplicar')
const colors = require('colors');

//let base = '1';
let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log('listar');
        //console.log(argv.base);
        //console.log(argv.limite);
        listar(argv.base, argv.limite)
            // .then(listar => console.log(`${listar}`))
            // .catch(e => console.log(e))
        break;

    case 'crear':
        //console.log('crear');
        /// console.log(argv.base);
        // console.log(argv.limite);
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado ${archivo}`))
            .catch(e => console.log(e))

        break;

    default:
        console.log('comando no reconocido');

}

//console.log(process.argv);

//let argv2 = process.argv;
//console.log(argv.limite);
//console.log(argv);


//let parametro = argv[2];
//let base = parametro.split('=')[1]

//console.log(base);
//crearArchivo(base)
//    .then(archivo => console.log(`Archivo Creado ${archivo}`))
//    .catch(e => console.log(e))