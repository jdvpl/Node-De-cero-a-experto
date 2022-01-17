const {crearArchivoTabal}=require('./helpers/multiplication')
const argv=require('yargs')
          .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
          })
          .check( (argv, options)=>{
            if (isNaN(argv.b)){
              throw "La base debe ser un numero"
            }
            return true;
          })
          .option(
            'l',{
              alias: 'limite',
              type: 'number',
              demandOption: true,
            }
          )
          .check( (argv, options)=>{
            if (isNaN(argv.l)){
              throw "El limite debe ser un numero"
            }
            return true;
          })
          .option(
            'e',{
              alias: 'ejecutar',
              type: 'boolean',
              default:false
            }
          )
          .argv;
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