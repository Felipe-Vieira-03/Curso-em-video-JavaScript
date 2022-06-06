let valores = [8,1,7,4,2,9]

//maneira padrão de formatação
console.log(valores)

//formatação com for
for (let i=0;i<valores.length;i++){
    console.log(`A posição ${i} tem o valor de ${valores[i]}`)
}

//formatação com o 'in' (funciona somente para arrays)
for(let i in valores){
    console.log(`A posição ${i} recebe o valor de ${valores[i]}`)
}