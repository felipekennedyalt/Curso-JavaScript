let num = [5, 2, 70000, 900]
num[4] = 69
num.push(70000)
console.log(`tamanho do array: ${num.length}`)
console.log(`valor do vetor: ${num}`)
num.sort() //é meio bugado só considera o primeiro número
console.log(`valor do vetor depois do sort: ${num}`)