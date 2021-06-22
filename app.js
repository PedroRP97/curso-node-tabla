

// const { argv } = require('process');
const { crearArchivo } = require('./helpers/multiplicar.js');
const argv = require('./config/yargs');
const color = require('colors');

console.clear();


//console.log(process.argv);
console.log(argv);
//console.log('base: yargs',argv.base)




// const [ , , arg3] = process.argv//desestructuracion de arreglos
// const [ , cant = 5] = arg3.split('=');//desestructuracion de arreglos
// console.log(valor); 



// const cant = 7;

crearArchivo (argv.b, argv.l, argv.h)
    .then(nombreArchivo =>{
        console.log(nombreArchivo.yellow, 'creado');
    })
    .catch(err => {console.log(err);
    })




