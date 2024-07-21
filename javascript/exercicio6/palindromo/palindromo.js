const palavra = prompt("Digite a palavra que deseja verificar: ").toUpperCase();
let palavra_invertida = "";

for (i = palavra.length - 1; i >= 0; i--) {
	palavra_invertida += palavra[i];
}

if (palavra == palavra_invertida) {
	alert(palavra + " é um palíndromo!");
}
else {
	alert(palavra + " não é um palíndromo!" +
		"\n Palavra normal: " + palavra +
		"\n Palavra invertida: " + palavra_invertida); 
}