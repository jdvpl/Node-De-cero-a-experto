const argv=require('yargs')
          .option('b',{
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es la base de la tabla de multiplicar'
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
              describe: 'Es el limite del multiplicador'
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
              default:false,
              describe: 'Decide si listar o no listar por consola'
            }
          )
          .argv;

module.exports =argv;