function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 22
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '_img/fotomanha.png'
        document.body.style.background = '#c7a47b'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE 
        img.src = '_img/fototarde.png'
        document.body.style.background = '#ffb915'
    } else {
        //BOA NOITE
        img.src = '_img/fotonoite.png'
        document.body.style.background = '#011751'
    }

}



