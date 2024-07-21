let opcao = "";

do {
	opcao = prompt(
		"Informe a opção que você deseja: " +
		"\n 1 - Sushi" +
		"\n 2 - Pizza" + 
		"\n 3 - Lasanha" + 
		"\n 4 - Hambúrguer" + 
		"\n 5 - Encerrar"
	);

	switch (opcao) {
    case "1":
      alert("Você escolheu a Sushi.");
      break
    case "2":
      alert("Você escolheu a opção Pizza.");
      break
    case "3":
      alert("Você escolheu a opção Lasanha.");
      break
    case "4":
      alert("Você escolheu a opção Hambúrguer.");
      break
    case "5":
      alert("Encerrando o programa...");
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.");
  }
} while (opcao != "5");
