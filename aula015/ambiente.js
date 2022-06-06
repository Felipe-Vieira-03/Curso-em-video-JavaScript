let num = [5,8,2,9,3]
num.sort()
num.push(10)
console.log(num)
console.log(`Nosso vetor é o ${num} e tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


let pos = num.indexOf(11)
if (pos==-1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 8 esta na posição ${pos}`)
}