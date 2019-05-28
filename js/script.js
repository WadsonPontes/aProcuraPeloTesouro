const l = document.getElementById("logo");
const t = document.getElementById("botao_creditos");
const b = document.getElementById("botao_jogar");
const q = document.getElementById("creditos");
const g = document.getElementById("ganhou");
const p = document.getElementById("perdeu");
const d = document.getElementById("dica");
var i = 0;
const dica = ["Me encontre na casa que tem o algarismo da unidade igual a 3 e o da dezena igual a 1.<br>Pru!", "Estarei te esperando na casa que é o dobro desta. Pru!", "Pru! Gosta de desafios? A casa que eu vou é o resultado da subtração:<br>8336 - 8312", "Vou para a casa que é a metade desta. Pru!", "Pru! Sabia que a viagem até o baú vai durar 49 dias? Me encotre na casa com o número de semanas de viagem até o baú.", "Quando eu nasci, o pirata tinha 33 anos. Se o pirata tem 48 anos agora, qual a minha idade? Te encontro lá. Pru!", "Pru! O pirata tinha 40 moedas de ouro. Em sua primeira viagem gastou 16 e encontrou 29 em um baú. Em sua última viagem gastou 32 e encontrou 27. Quantas moedas de ouro o pirata tem atualmente? Até já! Pru!", "O pirata compra 120 frutas e me da apenas a sexta parte. Quantas frutas eu como? Pru! Estamos quase chegando.", "Pru! O pirata me da 200 mililitros de água por dia. Em quantos dias eu bebo 1 litro de água? Pru!", "Pru! O pirata come meia dúzia de pães por dia. O tesouro está na casa que contém o número de pães que o pirata come por semana.<br>Minha missão acaba por aqui. Até a próxima. Pru! Pru! Pru!"];
const papagaio = [1, 13, 26, 24, 12, 7, 15, 48, 20, 5];
const bau = 42;
var c = [];
for (let i = 0; i < 60; i++) {
	c[i] = document.getElementById("casa" + i);
}

function main() {
	menu();
}

function creditos() {
	q.className = "janela";
}

function escolher(n) {
	if (c[n - 1].className == "casa") {
		c[n - 1].innerHTML = "";

		if (n == bau && i == papagaio.length) ganhou(n);
		else if (n != papagaio[i]) perdeu(n);
		else {
			if (i - 1 > -1) c[papagaio[i - 1] - 1].className = "casa_papagaio";
			c[n - 1].className = "casa_nova_papagaio";
			d.innerHTML = dica[i];
			i++;	
		}
	}
}

function ganhou(n) {
	c[n - 1].className = "casa_bau";
	setTimeout(function() { g.className = "janela"; }, 1000);
}

function jogar() {
	l.className = "desativado";
	t.className = "desativado";
	b.className = "desativado";
	d.className = "dica";
	d.innerHTML = "Encontre o papagaio para receber dicas de como encontrar o tesouro, mas cuidado, se você se encontrar com o pirata você perde.<br>Atualmente o papagaio se encontra na casa 1.";

	for (let i = 0; i < 60; i++) {
		c[i].className = "casa";
		c[i].innerHTML = i + 1 > 9 ? i + 1 : "0" + (i + 1);
	}
}

function menu() {
	i = 0;
	d.className = "desativado";

	for (let i = 0; i < 60; i++) {
		c[i].className = "desativado";
	}
	g.className = "desativado";
	p.className = "desativado";
	l.className = "logo";
	b.className = "botao";
	t.className = "botao";
}

function perdeu(n) {
	c[n - 1].className = "casa_pirata";
	setTimeout(function() { p.className = "janela"; }, 1000);
}

function voltar() {
	q.className = "desativado";
}

main();