const personagem_atacante = prompt("Qual é o nome do personagem atacante?");
const poder_de_ataque = parseFloat(prompt("Qual é o seu poder de ataque?"));

const personagem_defensor = prompt("Qual é o nome do personagem defensor?");
let vida_defensor = parseFloat(prompt("Quantos pontos de vida ele possue?"));
const poder_de_defesa = parseFloat(prompt("Qual é o seu poder de defesa?"));
const possui_escudo = prompt("Ele possui um escudo? (Sim/Não)");

let dano_causado = 0;

if (poder_de_ataque > poder_de_defesa && possui_escudo == "Não") {
	dano_causado = (poder_de_ataque - poder_de_defesa);
}

else if (poder_de_ataque > poder_de_defesa && possui_escudo == "Sim") {
	dano_causado = (poder_de_ataque - poder_de_defesa) / 2;
}

vida_defensor -= dano_causado;

alert(personagem_atacante + " causou " + dano_causado + " de dano ao defensor.")
alert(
	personagem_atacante + "\nPoder de ataque: " + poder_de_ataque + "\n\n" +
	personagem_defensor + "\nPontos de vida: " + vida_defensor + 
	"\nPoder de defesa: " + poder_de_defesa + "\nPossui escudo: " + possui_escudo
);