const argv = require('yargs') //informar a los yargs sobre las opciones que podrían existir
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true, //obliga agregar un valor a la base o b
    describe: 'Es la base de la tabla de multiplicar'
})
.check((argv, option)=>{
    if(isNaN(argv.b)){
        throw 'la base tiene que ser un numero';
    }
    return true;
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
    describe: 'hasta que valor sera multiplicado la base'
})
.argv;

module.exports = argv;