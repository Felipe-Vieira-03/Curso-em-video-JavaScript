var idade = 16
console.log(`voce tem ${idade} anos`)
if (idade <16) {
    console.log('você não pode votar')
} else if(idade >=16 && idade<18) { 
        console.log('o voto é opcional')
    } else  if (idade >18 && idade<65) {
            console.log('voce é obrigado a votar')
    } else if (idade >=60){
        console.log('o voto é opcional')
    }

