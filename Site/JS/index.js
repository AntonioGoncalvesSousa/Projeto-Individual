// CODIGO PARA FAZER APARECER A CONFIG DO CARONA 

function MostrarConfig(){
    var blocoConfig = document.getElementById('barC')

    if(blocoConfig.style.display === 'none'){
        blocoConfig.style.display = 'block';
    }else{
        blocoConfig.style.display = 'none';
    }
}

function MostrarMenu(){
    var blocoMenu = document.getElementById('barM')

    if(blocoMenu.style.display === 'none'){
        blocoMenu.style.display = 'block';
    }else{
        blocoMenu.style.display = 'none';
    }
}

// CODIGO PARA TROCAR OS TEXTOS

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



// EFEITO FILME

function Change(){
    var caixaTexto = document.getElementById('sobreFilme')
    var fotinha = document.getElementById('robs')

    if(fotinha.style.display === 'none'){
        fotinha.style.display = 'flex'
        caixaTexto.style.display = 'none'
    } else{    
        fotinha.style.display = 'none'
        caixaTexto.style.display = 'flex'
    }
}

