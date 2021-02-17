function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'contando: <br>'
        var inicio = Number(ini.value)
        var fim = Number(fim.value)
        var passo = Number(passo.value)

        if (passo <= 0) {
            window.alert('Passo inválido! considerando PASSO 1')
            passo = 1
        }

        //contagem crescente
        if (inicio < fim) {
            for (var contador = inicio; contador < fim; contador += passo) {
                res.innerHTML += `${contador} \u{1F449}`
            }
            //contagem regressiva
        } else {
            for (var contador = inicio; contador >= fim; contador -= passo) {
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}