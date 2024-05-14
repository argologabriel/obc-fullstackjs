const primeiro_nome = prompt("Informe o primeiro nome do recruta: ");
const sobrenome = prompt("Informe o sobrenome do recruta: ");
const campo_de_estudo = prompt("Qual é o campo de estudo do recruta?");
const ano_de_nascimento = prompt("Qual é o ano de nascimento do recruta?");

alert(
	"Recruta cadastrado com sucesso! \n" +
	"\n Nome completo: " + primeiro_nome + " " + sobrenome + 
	"\n Campo de estudo: " + campo_de_estudo +
	"\n Idade: " + (2024 - ano_de_nascimento)
);
