
function MAIOR_MENOR(a, b, c, d, e) {
  let valores = [a, b, c, d, e];

  let maior = Math.max(...valores);
  let menor = Math.min(...valores);

  return { maior, menor };
}

function executarMaiorMenor() {
  let resultado = MAIOR_MENOR(
    Number(n1.value),
    Number(n2.value),
    Number(n3.value),
    Number(n4.value),
    Number(n5.value)
  );

  resultado1.innerHTML =
    `Maior valor: ${resultado.maior} <br> Menor valor: ${resultado.menor}`;
}

function VOGAL(c) {
  c = c.toLowerCase();

  if ("aeiou".includes(c)) {
    return 1;
  }

  return 0;
}

function executarVogal() {
  let letra = vogal.value;

  resultado2.innerHTML =
    `Resultado: ${VOGAL(letra)}`;
}

function LIMITES(li, ls) {
  let pares = [];
  let soma = 0;

  for (let i = li + 1; i < ls; i++) {
    if (i % 2 === 0) {
      pares.push(i);
      soma += i;
    }
  }

  return { pares, soma };
}

function executarLimites() {
  let resultado = LIMITES(
    Number(li.value),
    Number(ls.value)
  );

  resultado3.innerHTML =
    `Pares: ${resultado.pares.join(", ")} <br>
     Soma: ${resultado.soma}`;
}

function ORDEM(a, b, c) {
  let valores = [a, b, c];

  valores.sort((x, y) => x - y);

  return valores;
}

function executarOrdem() {
  let resultado = ORDEM(
    Number(o1.value),
    Number(o2.value),
    Number(o3.value)
  );

  resultado4.innerHTML =
    `Ordem crescente: ${resultado.join(", ")}`;
}

function POSITIVO_NEGATIVO(x) {
  return x >= 0;
}

function executarPositivoNegativo() {
  let valor = Number(positivo.value);

  resultado5.innerHTML =
    POSITIVO_NEGATIVO(valor)
      ? "O número é positivo"
      : "O número é negativo";
}

function PAR_IMPAR(x) {
  return x % 2 === 0;
}

function executarParImpar() {
  let valor = Number(par.value);

  resultado6.innerHTML =
    PAR_IMPAR(valor)
      ? "O número é par"
      : "O número é ímpar";
}