const {crearArchivoTabal}=require('./helpers/multiplication')
const argv=require('./config/yargs')
console.clear();

console.log(argv);
// cuando se pasa por consola el crear un objeto y es mas facil de utilizar
console.log(argv.base);

const base=argv.b;
const limite =argv.l;
const ejecutar=argv.e

crearArchivoTabal(base,limite,ejecutar)
.then(arc=> console.log(arc,'creado'))
.catch(err=> console.log(err));