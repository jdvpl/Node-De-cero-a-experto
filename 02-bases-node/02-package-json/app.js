const {crearArchivoTabal}=require('./helpers/multiplication')
const argv=require('yargs')
          .option('b',{
            alias: 'base',
            type: 'number',
          })
          .argv;
console.clear();

console.log(argv);
// cuando se pasa por consola el crear un objeto y es mas facil de utilizar
console.log(argv.base);

// const base=18;
// const limite =17;

// crearArchivoTabal(base,limite)
// .then(arc=> console.log(arc,'creado'))
// .catch(err=> console.log(err));