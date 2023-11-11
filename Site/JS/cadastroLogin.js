function Cadastrar(){
    var nome = input_nome_cadastro.value;
    var email = input_email_cadastro.value; 
    var senha = input_senha_cadastro.value;
    var senha2 = input_confirma_cadastro.value;

    if(nome == ''|| email == '' || senha == ''|| senha2 ==''){
        erro.innerHTML=`<h4>Não se esqueça de preencher todos os campos corretamente</h4>`;
    }else if(email.indexOf('@') <= 1 || !email.endsWith('.com')){
        erro.innerHTML=`<h4>E-mail inválido</h4>`;
    }else if(senha.length < 8){
        erro.innerHTML=`<h4>Sua senha deve conter ao menos 8 digitos</h4>`;
    }else if(senha != senha2 ){
        erro.innerHTML=`<h4>Suas senhas não batem</h4>`;
    }else{
        window.location.href = 'login.html';
    }   
}

function Login(){
    var email = input_email_cadastro.value; 
    var senha = input_senha_cadastro.value;

    if(email == '' || senha == ''){
        erro.innerHTML=`<h4>Não se esqueça de preencher todos os campos corretamente</h4>`;
    }else if(email.indexOf('@') <= 1 || !email.endsWith('.com')){
        erro.innerHTML=`<h4>E-mail inválido</h4>`;
    }else if(senha.length < 8){
        erro.innerHTML=`<h4>Sua senha deve conter ao menos 8 digitos</h4>`;
    }else{
        window.location.href = 'home.html';
    }   
}