var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(numero) {
    if (Number(numero) >= 1 && Number(numero) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(numero, listaDeValores) {
    if (listaDeValores.indexOf(Number(numero)) != -1) {
        return true
    } else {
        return false
    }
}



function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))//colocando o num no vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicinado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('valor inválido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
    //apaga o que esta no place holder
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}