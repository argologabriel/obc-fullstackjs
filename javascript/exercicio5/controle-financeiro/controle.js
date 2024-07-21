let saldo = parseFloat(prompt("Informe a quantia inicial de dinheiro disponível: "));
let opcao = ""

do {
	opcao = prompt(
		"Saldo disponível: R$  " + saldo +
		"\n 1 - Adicionar dinheiro" +
		"\n 2 - Remover dinheiro" + 
		"\n 3 - Sair");

		switch (opcao) {
			case "1":
			saldo += parseFloat(prompt("Quanto você quer adicionar? "));
			break

			case "2":
			saldo -= parseFloat(prompt("Quanto você quer remover? "));
			break

			case "3":
			alert("Saindo...");
			break

			default:
			alert("Opção Inválida");
			break
		}
} while (opcao != "3");