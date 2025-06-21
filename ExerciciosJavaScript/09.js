const arr = [1, 10, 99, 85, 7, 256, 35, 23, 386, 78]

let maior = arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i] > maior){
        maior = arr[i]
    }
}
console.log(maior)