var valores = [8, 2, 3, 5, 88, 99, 9, 10]

for(var pos = 0; pos < valores.length; pos++){
    console.log(`a posiçã ${pos}  tem valor: ${valores[pos]}`)
}

console.log('-----------------------')
for(var pos in valores){
    console.log(`a posiçã ${pos}  tem valor: ${valores[pos]}`)
}
console.log('-----------------------')

console.log(`quero saber em que posição está o número 10. uso o indexOf, posição ${valores.indexOf(10)}`)

console.log(`quero saber em que posição está o número 10. uso o indexOf, posição ${valores.indexOf(100)}`)

console.log('se a resposta for -1 é porque o valor procurado não foi encontrado.')