console.log("Inicio del programa")

setTimeout( ()=>{
    console.log("primer timeout")
},3000)
setTimeout( ()=>{
    console.log("segundo timeout")
},0)
setTimeout( ()=>{
    console.log("tercero timeout")
},0)

console.log("Final del programa")