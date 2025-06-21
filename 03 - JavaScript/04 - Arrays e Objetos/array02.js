const arr = [1,5, 10, "ola", true]

let sohNumeros = arr.some(function(el){  //some, verifica se tem apenas um numero, every verifica de todos
    return typeof el === "number"
})
console.log(sohNumeros)