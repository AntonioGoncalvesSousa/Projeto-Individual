// CODIGO PARA FAZER APARECER A CONFIG DO CARONA 

function MostrarConfig() {
    var blocoConfig = document.getElementById('barC')

    if (blocoConfig.style.display === 'none') {
        blocoConfig.style.display = 'block';
    } else {
        blocoConfig.style.display = 'none';
    }
}

function MostrarMenu() {
    var blocoMenu = document.getElementById('barM')

    if (blocoMenu.style.display === 'none') {
        blocoMenu.style.display = 'block';
    } else {
        blocoMenu.style.display = 'none';
    }
}

// CODIGO PARA TROCAR OS TEXTOS

function base1() {
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
    setTimeout(function () {
        box1.style.display = 'none';
        box2.style.display = 'block';
        box3.style.display = 'block';

        conteudoBox.innerHTML = `
        <li>
            <h1>"Dizem que não morremos quando permanecemos na memória de quem amamos"</h1>
            <h2>-Brian</h2>
        </li>
        `;
        conteudoBox.classList.remove("fade-out");

    }, 1000);
}

function base2() {
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
    setTimeout(function () {
        box1.style.display = 'block';
        box2.style.display = 'none';
        box3.style.display = 'block';


        conteudoBox.innerHTML = `
        <li>
            <h1>"Velocidade é isso, sentir-se livre"</h1>
            <h2>-Toretto</h2>
        </li>
        `;
        conteudoBox.classList.remove("fade-out");

    }, 1000);
}

function base3() {
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
    setTimeout(function () {
        box1.style.display = 'block';
        box2.style.display = 'block';
        box3.style.display = 'none';


        conteudoBox.innerHTML = `
        <li>
            <h1>"Não importa o quanto você corra. Ninguém deixa o passado para trás."</h1>
            <h2>-Toretto</h2>
        </li>
        `;
        conteudoBox.classList.remove("fade-out");

    }, 1000);
}



// EFEITO FILME

function Change() {
    var caixaTexto = document.getElementById('sobreFilme')
    var fotinha = document.getElementById('robs')

    if (fotinha.style.display === 'none') {
        fotinha.style.display = 'flex'
        caixaTexto.style.display = 'none'
    } else {
        fotinha.style.display = 'none'
        caixaTexto.style.display = 'flex'
    }
}

// TROCAR RESUMO DO FILME

function Filme1() {
    texto.innerHTML = `<h1>Velozes & Furiosos </h1>
                    <h3>Em Velozes e Furiosos (The Fast and The Furious, 2001), o policial Brian O' Connor (Paul Walker) é infiltrado no mundo das corridas de carros ilegais para juntar provas e capturar Dominic Toretto (Vin Diesel), líder da gangue e procurado pelo FBI.
<br>
                        Durante a missão, Brian ganha a confiança e a amizade de Dom, além de se envolver com sua irmã, Mia (Jordana Brewster), o que o deixa confuso entre seguir com o seu objetivo ou honrar os laços de amizade e família que aprendeu durante o tempo em que passou infiltrado.
<br>                    
                        O filme que lançou os astros Vin Diesel e Paul Walker foi um sucesso na época, com uma bilheteria mundial de US$ 207 milhões para um custo de US$ 38 milhões. Carros turbinados, mulheres lindas e cenas de corrida em Los Angeles ganhavam o gosto do público.</h3>`;
}
function Filme2() {
    texto.innerHTML = `<h1>+ Velozes + Furiosos </h1>
                    <h3>+ Velozes + Furiosos (2 Fast 2 Furious, 2003), segundo filme da franquia, tem a saída de Vin Diesel e entrada dos personagens Roman Pierce (Tyrese Gibson) e Tej (Ludacris), que auxiliam Brian O'Connor em mais um trabalho infiltrado para pegar um chefão do crime organizado de Miami. Eva Mendes faz a vez de par romântico de Walker. 
<br>
                    O longa continua com a premissa de apresentar máquinas para chamar a atenção do público apaixonados por carros, e convenceu tanto quanto o primeiro filme, rendendo pouco mais de US$ 236 milhões nos cinemas. Diesel escolheu não retornar para a sequência para estrelar outro filme de ação, Triplo X.</h3>`
}
function Filme3() {
    texto.innerHTML = `<h1>Velozes & Furiosos: DESAFIO EM TÓQUIO</h1>
                    <h3>Velozes e Furiosos - Desafio em Tóquio (The Fast and The Furious: Tokyo Drift, 2006). Com elenco inteiro modificado, quem ficou com o papel de protagonista foi Sean Boswell (Lucas Black), jovem rebelde que é enviado pela mãe para morar em Tóquio com seu pai e tomar um rumo na vida.
<br>
                    Na terra do sol nascente, Sean conhece Han (Sung Kang), líder de um grupo de corredores de rua que o acolhe e o ensina tudo sobre as corridas de Tóquio, além de ajudá-lo a superar o seu rival, D.K. (Brian Tee).
<br>             
                    Desafio em Tóquio foi o longa que menos rendeu para a Universal (US$ 158 milhões) e o único até o sétimo filme a não ter Paul Walker no elenco.`
}
function Filme4() {
    texto.innerHTML = `<h1>Velozes & Furiosos 4</h1>
                    <h3>Velozes e Furiosos 4 (Fast and Furious, 2009) pode ser considerado o renascimento da série.Com US$ 363 milhões arrecadados. Na trama, que se passa 5 anos após o original, Brian é um agente do FBI que se une a Toretto para capturar um líder do tráfico de drogas. O sucesso fez com que a Universal garantisse mais uma continuação.`
}
function Filme5() {
    texto.innerHTML = `<h1>VELOZES & FURIOSOS 5 : Operação Rio</h1>
                    <h3>Velozes e Furiosos 5: Operação Rio (Fast Five, 2011) aproveitou o sucesso do filme anterior e foi mais ousado. Após o final de Velozes 4, a trama sai das ruas de Los Angeles e vai para o Brasil, no Rio de Janeiro, onde o grupo liderado por Toretto busca refugiu para fugir das autoridades.
<br>
                    O quinto capítulo da série apresenta o policial Hobbs (Dwayne Johnson), personagem que passa a fazer parte do elenco titular, e traz de volta destaques dos outros filmes, como Roman Pierce, Tej, Han e Gisele (Gal Gadot), apresentada em Velozes 4. Aqui, Lin chama atenção pelas cenas mais "insanas" da franquia, com direito a saltos de um trem em movimento e um cofre gigante sendo arrastado pelas ruas.`
}
function Filme6() {
    texto.innerHTML = `<h1>Velozes & Furiosos 6</h1>
                    <h3>Velozes e Furiosos 6 (Fast & Furious 6, 2013)Aqui a ação vai do começo ao fim, com lutas no metrô de Londres, carros perseguindo aviões e tanques de guerra esmagando tudo o que passa na frente pelas estradas da Europa.
<br>                    
                    O sexto filme da franquia também faz a ligação com Desafio em Tóquio, utilizando o destino da história de Han e a participação de Diesel. Com US$ 788 milhões de bilheteria, o sucesso abriu espaço para que a produção de Velozes e Furiosos 7 fosse autorizada.`
}
function Filme7() {
    texto.innerHTML = `<h1>Velozes & Furiosos 7</h1>
                    <h3>Velozes & Furiosos 7 (Furious 7, 2015), dirigido por James Wan, foi totalmente adaptado por conta do falecimento de Paul Walker em novembro de 2013, antes do término das gravações. Para finalizar suas cenas, a produção utilizou efeitos especiais e a atuação de seus dois irmãos para representarem Brian O'Connor na tela. 
<br>                    
                    No sétimo filme, a família de Dom luta contra Deckard Shaw (Jason Statham), irmão do vilão do sexto filme que busca vingança, e salva a hacker Ramsey (Nathalie Emmanuel), que se torna parte do grupo.
<br>                    
                    A produção foi um sucesso imediato e tornou-se a maior bilheteria da franquia até o hoje, arrecadando mais de US$ 1,5 bilhão ao redor do mundo. `
}
function Filme8() {
    texto.innerHTML = `<h1>Velozes & Furiosos 8</h1>
                    <h3>Velozes & Furiosos 8 (The Fate of the Furious, 2017) marcou o primeiro capítulo da franquia desde Desafio em Tóquio a não trazer nem Paul Walker nem Jordana Brewster no elenco. 
<br>
                    Na trama, Dominic Toretto é chantageado e precisa trabalhar para ciberterrorista Cipher (Charlize Theron), que mantém sua ex-namorada Elena (Elsa Pataky) e seu recém-descoberto filho como reféns. Assim, o resto da família, auxiliados agora por Deckard Shaw (Statham) e sua mãe (Helen Mirren), precisa lutar contra seu próprio líder. 
<br>                    
                    O longa foi o segundo da franquia a ultrapassar o marco de US$ 1 bilhão na bilheteria, arrecadando US$ 1,2 bilhão e se tornando o 2º maior sucesso comercial da série de filmes. `
}
function Filme9() {
    texto.innerHTML = `<h1>Velozes & Furiosos 9</h1>
                    <h3>Em "Velozes & Furiosos 9", teremos o retorno de muitos personagens do Tokyo Drift, como Han, Twinkie e Sean, além da primeira aparição de Jakob Toretto (John Cena).
<br>
                    O retorno de Han, que escapou da morte planejada por Deckard com a ajuda do Sr. Ninguém (Kurt Russell), animou os fãs da franquia. Na trama, a paz da família formada por Toretto, Letty e Brian é interrompida por Jakob.
<br>                    
                    A equipe se une para impedir uma trama maligna que ameaça o mundo, liderada por Cipher e pelo irmão abandonado de Dom, um dos mais habilidosos motoristas do mundo. Ao longo da história, o relacionamento entre os irmãos evolui de forma positiva, e é bastante possível que Jakob se junte à equipe nos próximos filmes.`
}
function Filme10() {
    texto.innerHTML = `<h1>Velozes & Furiosos 10</h1>
                    <h3>Dom Toretto e sua família foram mais espertos e superaram todos os inimigos em seu caminho. Agora, eles devem desafiar o adversário mais letal que já enfrentaram. 
<br>                    
                    Alimentada pela vingança, uma ameaça terrível emerge das sombras do passado na forma de Dante, para destruir o mundo de Toretto e destruir tudo - e todos - que ele ama. 
<br>
                    Ele então, comandando novamente a equipe de corredores mais conhecida do mundo, encara mais uma difícil missão sobre quatro rodas. O fim da estrada começa e Velozes & Furiosos 10 lança os capítulos finais de uma das franquias globais mais famosas e populares do cinema, agora em sua terceira década e ainda forte com o mesmo elenco e personagens centrais de quando começou.`
}


// GRAFICOS

var listaContagemFilmes = [];

function graficoFilme() {

    fetch("/usuarios/graficoFilme", { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                // resposta.reverse();

                plotarGraficoFilme(resposta);
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
        });
}

function plotarGraficoFilme(dados) {
    var data = [];
    var labels = [];

    for (var i = 0; i < dados.length; i++) {
        data.push(dados[i].qtd_votos);
        labels.push(`${dados[i].filme}`);
    }

    var cores = ['rgba(255, 99, 132)', 'rgba(255, 159, 64)', 'rgba(255, 205, 86)', 'rgba(75, 192, 192)', 'rgba(54, 162, 235)', 'rgba(153, 102, 255)', 'rgba(201, 203, 207)'];
    const ctx = document.getElementById('myChart');

    Chart.defaults.color = '#fff';
    Chart.defaults.borderColor = '#fff';

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                data,
                label: 'Filmes favoritos',
                fill: true,
                backgroundColor: cores,
                borderWidth: 1,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
