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
        
    } else {
        window.alert('valor inválido ou ja encontrado na lista.')
    }

}