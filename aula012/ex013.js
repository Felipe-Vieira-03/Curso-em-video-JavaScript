var agora = new Date()
var diaSem = agora.getDay()
//console.log(diaSem)
switch (diaSem){
    case 0:
        console.log('Hoje é domingo!')
        break
    case 1:
        console.log("Hoje é ssegunda-feira!")
        break
    case 2:
        console.log('Hoje é terça-feira!')
        break
    case 3:
        console.log('Hoje é quarta-feira!')
        break
    case 4:
        console.log('Hoje é quinta-feira!')
        break
    case 5:
        console.log('Hoje é sexta-feira!')
        break
    case 6:
        console.log('Hoje é sabado!')
        break
}