const {crearArchivoTabal}=require('./helpers/multiplication')
// tabla de multiplicar
// 5x10=5

console.clear();


console.log(process.argv);
const [,,b='base=5',l='limite=10']=process.argv;
const [,base=5]=b.split("=")
const [,limite=10]=l.split("=")


// const base=18;
// const limite =17;

crearArchivoTabal(base,limite)
.then(arc=> console.log(arc,'creado'))
.catch(err=> console.log(err));