function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
var hora = 1
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'foto-manhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'foto-tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'foto-noite.jpg'
        document.body.style.background = '3515154'
    }

}