let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
     return true
    } else {
     return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
     
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text=`O valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML= ''
    }else{
        window.alert('Valor inválido ou já está inserido na lista')
    }
    num.value=' '
    num.focus()

}

function Finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let i in valores){
            soma += valores[i]
            if (valores[i] >maior){
                maior = valores[i]
            if (valores[i]<menor){
                menor=valores[i]
            }
        }
     }
        media = soma/tot

        res.innerHTML = ''
        res.innerHTML += `<p>O total de valores adicionados no vetor é ${valores.length}!</p>`
        res.innerHTML += `<p>O maior valor adicionado é ${maior}!</p>`
        res.innerHTML += `<p>O menor valor adicionado é ${menor}!</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}!</p>`
        res.innerHTML += `<p>A média dos valores adicionados é ${media}!</p>`
    }
}