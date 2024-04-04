let participantes = [
  {
  nome: "Renato Heiderich",
  email: "reheiderich@gmail.com",
  dataInscricao: new Date(2024, 2, 22, 19, 20),
  dataCheckIn: new Date(2024, 2, 25, 22, 00)  
},
  {
  nome: "Gabriel Moura",
  email: "gmoura@gmail.com",
  dataInscricao: new Date(2024, 2, 10, 18, 18),
  dataCheckIn: new Date(2024, 2, 1, 20, 20)  
},
  {
  nome: "Nathalia Zampolli",
  email: "natzamp@gmail.com",
  dataInscricao: new Date(2024, 2, 5, 17, 27),
  dataCheckIn: new Date(2024, 1, 15, 22, 00)  
},
  {
  nome: "Rodrigo Silva",
  email: "rsilva@gmail.com",
  dataInscricao: new Date(2024, 2, 1, 19, 20),
  dataCheckIn: new Date(2024, 4, 22, 22, 00)  
},
{
  nome: "Marcos Souza",
  email: "souzam@gmail.com",
  dataInscricao: new Date(2024, 1, 2, 19, 23),
  dataCheckIn: new Date(2024, 1, 5, 20, 00)  
},
{
  nome: "Alex Silva",
  email: "alexsilva@gmail.com",
  dataInscricao: new Date(2024, 2, 15, 19, 10),
  dataCheckIn: new Date(2024, 0, 4, 20, 20)  
},
{
    nome: "Pedro Rocha",
    email: "pedrorocha@gmail.com",
    dataInscricao: new Date(2024, 2, 5, 20, 0),
    dataCheckIn: null
  },
  {
    nome: "Luiz Pereira",
    email: "luizpereira@gmail.com",
    dataInscricao: new Date(2024, 1, 5, 9, 45),
    dataCheckIn: new Date(2024, 1, 10, 12, 15)
  },
  {
    nome: "João Santos",
    email: "joaosantos@gmail.com",
    dataInscricao: new Date(2024, 0, 10, 10, 0),
    dataCheckIn: null
  },
  {
    nome: "Ricardo Almeida",
    email: "ricardoalmeida@gmail.com",
    dataInscricao: new Date(2024, 3, 20, 15, 30),
    dataCheckIn: null
  }
];


const criarNovoParticipante = (participante) => {
 const dataInscricao = dayjs(Date.now())
 .to(participante.dataInscricao)

 let dataCheckIn = dayjs(Date.now())
 .to(participante.dataCheckIn)

//condicionaç
 if(participante.dataCheckIn == null) {
  dataCheckIn = `
  <button
  data-email="${participante.email}"
  onclick="fazerCheckIn(event)"
  >
  Confirmar Check-in  
  </button>
  `
 }
 
  return `
  <tr>
    <td>
      <strong>
       ${participante.nome} 
      </strong>
      <br>
      <small>
        ${participante.email}
      </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
  </tr>
  `
}


const atualizarLista = (participantes) => {
let output = ""
//estrutura de repetição - loop
for(let participante of participantes) {
  output = output + criarNovoParticipante(participante)
}

//substituir informação do HTML
document
.querySelector('tbody')
.innerHTML = output
}

atualizarLista(participantes) 

const adicionarParticipante = (event) => {
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)
  
  const participante = {
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }

  // verificar se o participante ja existe
  const participanteExiste = participantes.find(
    (p) => p.email = participante.email
  )

  if(participanteExiste) {
    alert('Email ja Cadastrado!')
    return 
  }

  
  participantes = [participante, ...participantes]
  atualizarLista(participantes) 
  
  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""

  }

  const fazerCheckIn = (event) => {
    // confirmar se realmente quer check-in
    const mesagemConfirmacao = 'Tem certeza que deseja fazer o check-in?'
    
    if(confirm(mesagemConfirmacao) = false) {
      return

    }

    
    // encontrar o paticipante dentro da lista
    const participante = participantes.find((p) => {
      return p.email == event.target.dataset.email
    })
    // atualizar o check in do participante
    participante.dataCheckIn = new Date()

    // atualizar a lista de participantes
    atualizarLista(participantes)

  }

  