const fs=require('fs');
// tabla de multiplicar
// 5x10=5

console.clear();

const base=9;
let salida='';

for (let i = 1; i <=10; i++){
  salida += `${base}x${i}=${base*i} \n`
}

fs.writeFile(`tabla${base}.csv`,salida, (err)=>{
  if(err) throw err;
  console.log("archivo creado");
})