const valor = parseFloat(prompt("Insira um valor em metros: "));
const medida = prompt("Para qual unidade de medida deseja converter?" +
	"\n1. Milímetros (mm)" + 
	"\n2. Centímetros (cm)" + 
	"\n3. Decímetros (dm)" + 
	"\n4. Decâmetros (dam)" + 
	"\n5. Hectômetros (hm)" + 
	"\n6. Quilômetros (km)" );

switch (medida) {
	case "1": 
		alert("Resultado: " + valor + "m = " + (valor * 1000) + "mm");
		break
	case "2":
		alert("Resultado: " + valor + "m = " + (valor * 100) + "cm");
		break
	case "3":
		alert("Resultado: " + valor + "m = " + (valor * 10) + "dm");
		break
	case "4":
		alert("Resultado: " + valor + "m = " + (valor / 10) + "dam");
		break
	case "5":
		alert("Resultado: " + valor + "m = " + (valor / 100) + "hm");
		break
	case "6":
		alert("Resultado: " + valor + "m = " + (valor / 1000) + "km");
		break
	default: 
		alert("Opção inválida!")
		break;
}