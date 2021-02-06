var idade = 10
if (idade < 16) {
    console.log('Não vota.')
} else if(idade < 18 || idade > 65){
    console.log('voto opcional.')
} else {
    console.log('O voto é obrigatório.')
}