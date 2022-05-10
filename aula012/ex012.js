var agora = new Date
var hora = agora.getHours()
console.log (`agora são exatamente ${hora} horas!`)
if (hora <12){
    console.log(`são ${hora} horas da manhã, então receba meu Bom dia!!`)
}else if (hora>12 && hora<18){
    console.log(`estamos no meio da tarde, receba o meu Boa Tarde!!`)
}else{
    console.log(`são ${hora} da noite, então receba o meu  Boa noite!!`)
}