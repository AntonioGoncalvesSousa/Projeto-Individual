
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
        <h3>${(listaRank[i].Tentativas)}</h3>
        <h3>${listaRank[i].Pts}</h3>

    </div>
                    `


            }
        })
        .catch(error => {
            console.error("Erro durante a solicitação: ", error);
        })

}
  