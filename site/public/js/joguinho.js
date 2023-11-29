
setTimeout(() => {
    refresh()
}, 1000);

var listaRank = [];
function refresh() {


    fetch("/usuarios/refresh").then(res => {
        if (!res.ok) {
            throw new Error(`Erro na solicitação: ${res.statusText}`);
        }
        return res.json();
    })
        .then(res => {
            listaRank = res;
            for (var i = 0; i < listaRank.length; i++) {
                mensagem.innerHTML += `
                    <div class="mensagem" >
            <h3>${`${i +1}º`}</h3>
            <h3>${listaRank[i].nome}</h3>

        <span id="estrelasAvaliacao">
            ${(listaRank[i].Tentativas)}    
        </span>
        <span id="mensagemAvaliacao">
            ${listaRank[i].Pts}
        </span>

    </div>
                    `


            }
        })
        .catch(error => {
            console.error("Erro durante a solicitação: ", error);
        })

}













  
    // fetch("/usuarios/refresh", {
        
    //     method: "GET",
    //     //   headers: {
    //         //     "Content-Type": "application/json",
    //         //   },
    //         //   body: JSON.stringify({
    //             //     // crie um atributo que recebe o valor recuperado aqui
    //             //     // Agora vá para o arquivo routes/usuario.js
                
    //             //   }),
    //         })
    //   .then(function (resposta) {
    //     console.log("resposta: ", resposta);
  
    //     if (resposta.ok) {
    //       console.log('ok');


    //     } else {
    //         console.log('Deu ruim');
    //     }
    //   })
    //   .catch(function (resposta) {
    //     console.log(`#ERRO: ${resposta}`);
    //   });
  
    // return false;
  