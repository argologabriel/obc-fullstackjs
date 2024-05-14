const nome_veiculo1 = prompt("Informe nome do primeiro veículo: ");
const velocidade_veiculo1 = parseFloat(prompt("Informe a velocidade do primeiro veículo: "));

const nome_veiculo2 = prompt("Informe o nome do segundo veículo: ");
const velocidade_veiculo2 = parseFloat(prompt("Informe a velocidade do segundo veículo: "));

if (velocidade_veiculo1 > velocidade_veiculo2) {
	alert(nome_veiculo1 + " é mais rápido que " + nome_veiculo2)
}

else if (velocidade_veiculo1 < velocidade_veiculo2) {
	alert(nome_veiculo2 + " é mais rápido que " + nome_veiculo1)
}

else if (velocidade_veiculo1 == velocidade_veiculo2) {
	alert(nome_veiculo1 + " e " + nome_veiculo2 + " possuem velocidades iguais.")
}