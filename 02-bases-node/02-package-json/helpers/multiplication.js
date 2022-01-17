const fs=require('fs');
const colors=require('colors');
// se crea la funcion para crear archivos y guardar la info
const crearArchivoTabal=async(base=5, limite=10,ejecutar=false)=>{
    try {
      let salida,consola='';
      for (let i = 1; i <=limite; i++){
        consola += `${base}${'X'.green}${i}${'='.green}${base*i} \n`;  
        salida += `${base}X${i}=${base*i}\n`;  
      }
      if(ejecutar){
        console.log("=============================================".green);
        console.log("Tabla del:".blue,colors.white(base));
        console.log("=============================================".green);
        console.log(salida);
      }
      fs.writeFileSync(`./salida/tabla${base}.txt`,salida);
      return `tabla${base}.csv`;
    } catch (error) {
      throw error;
    }
}

module.exports={
  crearArchivoTabal
}