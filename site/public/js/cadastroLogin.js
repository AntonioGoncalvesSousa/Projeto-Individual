function cadastrar() {
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = input_nome_cadastro.value;
  var emailVar = input_email_cadastro.value;
  var senhaVar = input_senha_cadastro.value;
  var confirmacaoSenhaVar = input_confirma_cadastro.value;
  var filmeVar = select_filme_fav.value;

  if (nomeVar == '' || emailVar == '' || senhaVar == '' || confirmacaoSenhaVar == ''|| filmeVar == 0) {
    erro.innerHTML = `<h4>Não se esqueça de preencher todos os campos corretamente</h4>`;
  } else if (emailVar.indexOf('@') <= 1 || !emailVar.endsWith('.com')) {
    erro.innerHTML = `<h4>E-mail inválido</h4>`;
  } else if (senhaVar.length < 8) {
    erro.innerHTML = `<h4>Sua senha deve conter ao menos 8 digitos</h4>`;
  } else if (senhaVar != confirmacaoSenhaVar) {
    erro.innerHTML = `<h4>Suas senhas não batem</h4>`;
  } else {
    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        filmeServer: filmeVar
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          window.location = "login.html";
        } else {
          erro.innerHTML = `<h4>Não foi possivel realizar o cadastro nesse momento, Tente denovo mais tarde</h4>`;
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
      });

    return false;
  } 
}

function entrar() {

  var emailVar = input_email_login.value;
  var senhaVar = input_senha_login.value;

  if (emailVar == '' || senhaVar == '') {
    erro.innerHTML = `<h4>Não se esqueça de preencher todos os campos corretamente</h4>`;
  } else if (emailVar.indexOf('@') <= 1 || !emailVar.endsWith('.com')) {
    erro.innerHTML = `<h4>E-mail inválido</h4>`;
  } else if (senhaVar.length < 8) {
    erro.innerHTML = `<h4>Sua senha deve conter ao menos 8 digitos</h4>`;
  } else {

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emailServer: emailVar,
        senhaServer: senhaVar
      })
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO entrar()!")

      if (resposta.ok) {
        console.log(resposta);

        resposta.json().then(json => {
          console.log(json);
          console.log(JSON.stringify(json));
          sessionStorage.EMAIL_USUARIO = json.email;
          sessionStorage.NOME_USUARIO = json.nome;
          sessionStorage.ID_USUARIO = json.idUsuario;

          window.location = "joguinho.html";
        });

      } else {
        setTimeout(function () {
        }, 1000); // apenas para exibir o loading
        erro.innerHTML = `<h4>Esse login ainda não foi cadastrado</h4>`;
      }

    }).catch(function (erro) {
      console.log(erro);
    })

    return false;
  }
}











// QUIZ


const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Profissional :)"
      break
    case (performance >= 70):
      message = "Ainda pode acelerar"
      break
    case (performance >= 50):
      message = "Boa Piloto"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
      <button onclick="pontosBanco()" class="button">
        Voltar para o Menu
      </button>
  `
}

function pontosBanco() {
  var qtdPontosVar = totalCorrect * 10;
  var idUsuarioVar = sessionStorage.ID_USUARIO;

  fetch("/usuarios/pontosBanco", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // crie um atributo que recebe o valor recuperado aqui
      // Agora vá para o arquivo routes/usuario.js
      pontosServer: qtdPontosVar,
      idUsuarioServer: idUsuarioVar
    }),
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        window.location = "joguinho.html";
      } else {
        erro.innerHTML = `<h4>Não foi possivel realizar o cadastro nesse momento, Tente denovo mais tarde</h4>`;
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
} 


const questions = [
  {
    question: "Em que ano foi lançado o primeiro filme Velozes e Furiosos no cinema?",
    answers: [
        {text:'2001', correct: true},
        {text:'2003', correct: false},
        {text:'1999', correct: false},
        {text:'2005', correct: false},
    ],
},
{
    question: "Qual o modelo do carro usado por Dominic Toretto?",
    answers: [
        {text:'Golfão', correct: false},
        {text:'Dodge Charger', correct: true},
        {text:'Marea', correct: false},
        {text:'Fiat Uno', correct: false},
    ],
},
{
    question: "Qual o nome dos filhos de Toretto e Brian respectivamente?",
    answers: [
        {text:'Jõao e Maria', correct: false},
        {text:'Jackob e Tej', correct: false},
        {text:'Jhonny e Walker', correct: false},
        {text:'Brian e Jack', correct: true},
    ],
},
{
    question: "Qual era o apelido do Nissan Silvia S15 Spec-S de Han utilizado por Sean em Velozes e Furiosos: Desafio em Tóquio?",
    answers: [
        {text:'Amorzinha', correct: false},
        {text:'Monalisa', correct: true},
        {text:'Minnie', correct: false},
        {text:'Pateta', correct: false},
    ],
},
{
    question: "Qual o carro do han em velozes e furiosos 3?",
    answers: [
        {text:'Skylline', correct: false},
        {text:'Ferrari', correct: false},
        {text:'Mazda rx7', correct: true},
        {text:'Kwid', correct: false},
    ],
},
]