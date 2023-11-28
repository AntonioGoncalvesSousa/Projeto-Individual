Create database velozesefuriosos;
use velozesefuriosos;

create table usuario(
idCadastro int primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
senha varchar(45)
);

create table pontuacao(
idAvaliacao int primary key auto_increment,
tempo float
);

select * from usuario;