function cadastrar() {
  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = input_nome_cadastro.value;
  var emailVar = input_email_cadastro.value;
  var senhaVar = input_senha_cadastro.value;
  var confirmacaoSenhaVar = input_confirma_cadastro.value;

  if (nomeVar == '' || emailVar == '' || senhaVar == '' || confirmacaoSenhaVar == '') {
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
        senhaServer: senhaVar
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
          sessionStorage.ID_USUARIO = json.id;

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