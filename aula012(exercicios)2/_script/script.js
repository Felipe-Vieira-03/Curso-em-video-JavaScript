function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!!')
    } else {

        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = " "
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade > 0 && idade <= 10) {
                //criança
                img.setAttribute('src', '_img/homem-crianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '_img/homem-jovem.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', '_img/homem-adulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', '_img/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade > 0 && idade <= 10) {
                //criança
                img.setAttribute('src', '_img/mulher-crianca.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '_img/mulher-jovem.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', '_img/mulher-adulta.jpg')
            } else {
                //idoso
                img.setAttribute('src', '_img/mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${genero} com: ${idade} anos.<br>`
        res.appendChild(img)

    }

}