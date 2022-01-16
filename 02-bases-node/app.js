const {crearArchivoTabal}=require('./helpers/multiplication')
// tabla de multiplicar
// 5x10=5

console.clear();

const base=18;
const limite =17;
crearArchivoTabal(base,limite)
.then(arc=> console.log(arc,'Creado'))
.catch(err=> console.log(err));