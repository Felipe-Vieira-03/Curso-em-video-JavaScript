function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length==0 || passo.value.length==0){
         window.alert('[ERRO] Estão faltando dados para a execução do calculo')
         res.innerHTML =   'Impossível contar!'
    }else{
        res.innerHTML = 'contando: <br>'
        var i= Number(inicio.value)
        var f=Number(fim.value)
        var p = Number(passo.value)
        if (p<=0){
            window.alert('Passo inválido, vamos efetuar o calculo considerando o passo como 1!')
            p = 1
        }

        if (i<f){
            for(var c = i;c<=f;c+=p){
            res.innerHTML += `${c} \u{27A1} `
            }          
        }else{
            for (var c = i;c>=f;c-=p){
            res.innerHTML += `${c} \u{27a1}`
            }
        }
        res.innerHTML+=`\u{1f3c1}`
    }
}



