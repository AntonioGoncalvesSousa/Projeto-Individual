// CODIGO PARA FAZER APARECER A CONFIG DO CARONA 

function MostrarConfig(){
    var bloco = document.getElementById('barC')

    if(bloco.style.display === 'none'){
        bloco.style.display = 'block';
    }else{
        bloco.style.display = 'none';
    }
}

function base1(){
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
    setTimeout(function() {
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

function base2(){
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
    setTimeout(function() {
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

function base3(){
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
    setTimeout(function() {
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

