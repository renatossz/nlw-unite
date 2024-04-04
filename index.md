www.fronteditor.dev/nlw-unite

# HTML

*Hypertext*

*Markup*
- Tag

*Language*


#CSS
body {
  background-color: #121214;
  color: #ffffff;
}


#JavaScript
´´´ Js
// variaveis
const mensagem = "Oi, Tudo bem?"
// tipos de dados
  // number
  // string
// funcao
alert(mensagem)
```

const participante = {
  nome: "Renato Heiderich",
  email: "reheiderich@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00),  
}

// arrey
let participantes = [
  {
  nome: "Renato Heiderich",
  email: "reheiderich@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00),  
}]




//estrutura de repetição - loop
for(let participante of participantes) {
  output = output + criarNovoParticipante(participante)
//faça alguma coisa aqui 
}