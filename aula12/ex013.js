var agora = new Date()
var diaSem = agora.getDay()
console.log(diaSem)
switch (diaSem) {
    case 0:
        console.log(' 0 = Domingo')
        break
    case 1:
        console.log(' 1 = Segunda')
        break
    case 2:
        console.log(' 2 = Terça')
        break
    case 3:
        console.log(' 3 = Quarta')
        break
    case 4:
        console.log(' 7 = Quinta')
        break
    case 5:
        console.log(' 5 = Sexta')
        break
    case 6:
        console.log(' 6 = Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
}