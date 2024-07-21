let valor = parseInt(prompt("Informe o valor que você deseja calcular a tabuada: "));
let tabuada = "Tabuada do " + valor + "\n";

for (i = 0; i <= 20; i++) {

	let resultado = valor * i; 
	tabuada += "\n " + valor + " * " + i + " = " + resultado;
}

alert (tabuada);