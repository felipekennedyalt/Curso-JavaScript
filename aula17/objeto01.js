let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.5,
engordar(p=0){
console.log('engordou')
this.peso += p
}}

amigo.engordar(2)//vai engordar 2 kilos
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)