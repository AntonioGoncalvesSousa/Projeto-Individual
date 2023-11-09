// CODIGO PARA FAZER APARECER A CONFIG DO CARONA 

function MostrarConfig(){
    var bloco = document.getElementById('barC')

    if(bloco.style.display === 'none'){
        bloco.style.display = 'block';
    }else{
        bloco.style.display = 'none';
    }
}

var posicao = 2;
function VoltarTexto(){
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
    posicao -=1;
    if(posicao == 1){
    setTimeout(function() {
        box2.style.display = 'none';
        box1.style.display = 'block';
        conteudoBox.innerHTML = `
        <li>
            <h1>"Dizem que não morremos quando permanecemos na memória de quem amamos"</h1>
            <h2>-Brian</h2>
        </li>
        `;
        // Remove a classe de animação após trocar o texto para permitir futuras transições
        conteudoBox.classList.remove("fade-out");
        
        posicao = 4;
    }, 1000);
    
    } else if(posicao == 2){
        setTimeout(function() {
            box1.style.display = 'block';
            box2.style.display = 'none';
            conteudoBox.innerHTML = `
            <li>
                <h1>"Velocidade é isso, sentir-se livre"</h1>
                <h2>-Toretto</h2>
            </li>
            `;
            // Remove a classe de animação após trocar o texto para permitir futuras transições
            conteudoBox.classList.remove("fade-out");
            
        }, 1000);    
        
    } else if(posicao == 3){
        setTimeout(function() {
            box2.style.display = 'block';
            box3.style.display = 'none';
            conteudoBox.innerHTML = `
            <li>
                <h1>"Não importa o quanto você corra. Ninguém deixa o passado para trás."</h1>
                <h2>-Toretto</h2>
            </li>
            `;
            // Remove a classe de animação após trocar o texto para permitir futuras transições
            conteudoBox.classList.remove("fade-out");
            
        }, 1000);
        
    }

}

function PassarTexto(){
    var conteudoBox = document.getElementById('textinho');

    conteudoBox.classList.add("fade-out");
 
    posicao +=1
    if(posicao == 1){
        setTimeout(function() {
        box3.style.display = 'none';
        box1.style.display = 'block';

        conteudoBox.innerHTML = `
        <li>
            <h1>"Dizem que não morremos quando permanecemos na memória de quem amamos"</h1>
            <h2>-Brian</h2>
        </li>
        `;
        // Remove a classe de animação após trocar o texto para permitir futuras transições
        conteudoBox.classList.remove("fade-out");
        
    }, 1000);
    
    } else if(posicao == 2){
        setTimeout(function() {
            box1.style.display = 'none';
            box2.style.display = 'block';
            conteudoBox.innerHTML = `
            <li>
                <h1>"Velocidade é isso, sentir-se livre"</h1>
                <h2>-Toretto</h2>
            </li>
            `;
            // Remove a classe de animação após trocar o texto para permitir futuras transições
            conteudoBox.classList.remove("fade-out");
            
        }, 1000);    
        
    } else if(posicao == 3){
        posicao = 0;
        setTimeout(function() {
        box2.style.display = 'none';
        box3.style.display = 'block';

            conteudoBox.innerHTML = `
            <li>
                <h1>"Não importa o quanto você corra. Ninguém deixa o passado para trás."</h1>
                <h2>-Toretto</h2>
            </li>
            `;
            // Remove a classe de animação após trocar o texto para permitir futuras transições
            conteudoBox.classList.remove("fade-out");
            
        }, 1000);
        
    }


}