const valor1 = parseFloat(prompt("Informe o primeiro valor: "));
const valor2 = parseFloat(prompt("Informe o segundo valor: "));

const soma = valor1 + valor2;
const subtracao = valor1 - valor2;
const multiplicacao = valor1 * valor2;
const divisao = valor1 / valor2;

alert(
	"Resultados: \n" +
	"\n Soma: " + soma +
	"\n Subtração " + subtracao +
	"\n Multiplicação " + multiplicacao +
	"\n Divisão " + divisao
);