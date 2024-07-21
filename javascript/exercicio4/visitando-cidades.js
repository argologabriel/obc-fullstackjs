const nome = prompt("Digite seu nome: ");
let cidades = "";
let contador = 0;

let visitou = prompt("Você já visitou alguma cidade? (Sim/Não)");

	while (visitou == "Sim" || visitou == "sim") {
		

		let cidade = prompt("Qual cidade você visitou? ");
		cidades += " - " + cidade + "\n"
		contador ++;

		visitou = prompt("Você já visitou alguma outra cidade? (Sim/Não)")
	}

alert("Turista: " + nome + 
	"\nQuantidade de cidades visitadas: " + contador + 
	"\nCidades visitadas: \n" + cidades);
