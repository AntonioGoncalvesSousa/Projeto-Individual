Create database velozesefuriosos;
use velozesefuriosos;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45) unique,
senha varchar(45),
fkFilme int,
foreign key (fkFilme) references filmeFav(idFilme)
);

create table quiz(
idQuiz int primary key auto_increment,
pontos int,
qtdTentativas int,
fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table filmeFav(
idFilme int primary key auto_increment,
filme varchar(45)
);

insert into filmeFav(filme) values
('Velozes e Furiosos'),
('+ Velozes + Furiosos'),
('Velozes e Furiosos 3'),
('Velozes e Furiosos 4'),
('Velozes e Furiosos 5'),
('Velozes e Furiosos 6'),
('Velozes e Furiosos 7'),
('Velozes e Furiosos 8'),
('Velozes e Furiosos: Hobbs & Shaw'),
('Velozes e Furiosos 9'),
('Velozes e Furiosos 10');

select * from filmeFav;

select * from usuario;

select * from quiz;

select usuario.nome, sum(quiz.qtdTentativas), sum(quiz.pontos) as Pts from usuario join quiz on fkUsuario = idUsuario group by usuario.nome order by Pts desc;

select * from usuario join filmeFav on fkFilme = idFilme;

select * from quiz join usuario on fkUsuario = idUsuario;

select filmeFav.filme, count(usuario.fkFilme) as qtd_votos from filmeFav left join usuario on filmeFav.idFilme = usuario.fkFilme group by filmeFav.filme;

select usuario.nome, quiz.pontos, quiz.qtdTentativas from usuario join quiz on fkUsuario = idUsuario order by pontos;

select * from usuario join filmeFav on fkFilme = idFilme;

select * from quiz join usuario on fkUsuario = idUsuario;

