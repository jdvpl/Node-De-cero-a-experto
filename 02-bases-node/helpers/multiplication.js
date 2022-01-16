const fs=require('fs');
// se crea la funcion para crear archivos y guardar la info
const crearArchivoTabal=async(base=5, limite=10)=>{
    let salida='';
    for (let i = 1; i <=limite; i++){
      salida += `${base}x${i}=${base*i} \n`
    }
    try {
      fs.writeFileSync(`tabla${base}.csv`,salida);
      return `tabla${base}.csv`;
    } catch (error) {
      throw error;
    }
}

module.exports={
  crearArchivoTabal
}