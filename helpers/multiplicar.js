

const fs = require('fs');
const { argv } = require('process');
const color = require('colors');

const crearArchivo = async(cant = 5, listar = false, hasta = 10) =>{
        try{
            
            let salida = '';
            let consola = '';
            for(let i=1;i<=hasta;i++){
                const valor = cant * i;
                salida += `la multiplicacion de ${cant} * ${i} =  ${valor}  \n`;
                consola += 'la multiplicacion de '.blue + cant + ` * ${i} = ` + valor + `\n`;
            }
            if(listar == true){
                console.log('=============='.green);
                console.log('tabla del: '.yellow + cant);
                console.log('=============='.green);
                console.log(consola); 
                }
               
        
            /* fs.writeFile(`tabla-${cant}.txt`, salida, (err)=>{
                if(err) throw err
                console.log(`tabla-${cant}.txt creado!`);
            }); una forma de hacerlo*/
       
                fs.writeFileSync(`./salida/tabla-${cant}.txt`, salida);
                return true, (`tabla-${cant}.txt`);
                
            }
            catch(err){
                throw err
            }
            
}

module.exports = {
    // crearArchivo: crearArchivo o asi ya que es redundante
    crearArchivo
}
