function exe1() {
  let nro1 = document.getElementById("nro1").value
  let nro2 = document.getElementById("nro2").value
  let subtracao = nro1 - nro2
  document.getElementById("subtracao").innerHTML = "O resultado é " + subtracao
}

function exe2() {
  let nro1 = document.getElementById("nro1").value
  let nro2 = document.getElementById("nro2").value
  let nro3 = document.getElementById("nro3").value
  let calculo = nro1 * nro2 * nro3
  document.getElementById("calculo").innerHTML = "O resultado é " + calculo
}

function exe3() {
  let nro1 = document.getElementById("nro1").value
  let nro2 = document.getElementById("nro2").value
  let calculo = nro1 / nro2
  document.getElementById("calculo").innerHTML = "O resultado é " + calculo
}

function exe4() {
  let nro1 = document.getElementById("nro1").value
  let nro2 = document.getElementById("nro2").value
  let calculo = (nro1 * 2 + nro2 * 3) / 5
  document.getElementById("calculo").innerHTML = "A nota final é " + calculo
}

function exe5() {
  let nro1 = document.getElementById("nro1").value
  let calculo = nro1 * 0.9
  document.getElementById("calculo").innerHTML =
    "O preço final do produto é R$" + calculo
}

function exe6() {
  let nro1 = Number(document.getElementById("nro1").value)
  let nro2 = Number(document.getElementById("nro2").value)
  let comissao = nro2 * 0.04
  let final = nro1 + nro2 * 0.04
  document.getElementById("comissao").innerHTML =
    "O valor da comissão é de R$" + comissao
  document.getElementById("final").innerHTML = "O salário final é de R$" + final
}

function exe7() {
  let peso = Number(document.getElementById("peso").value)
  let engorda = peso * 1.15
  let emagrece = peso * 0.8
  document.getElementById("engorda").innerHTML = "Quando engorda " + engorda
  document.getElementById("emagrece").innerHTML = "Quando emagrece " + emagrece
}
function exe8() {
  let peso = Number(document.getElementById("peso").value)
  let resultado = peso * 1000
  document.getElementById("resultado").innerHTML = "O peso em gramas é de " + resultado + "g"
}

function exe9() {
  let basemaior = Number(document.getElementById("basemaior").value)
  let basemenor = Number(document.getElementById("basemenor").value)
  let altura = Number(document.getElementById("altura").value)

  let area = ((basemaior + basemenor) * altura) / 2
  document.getElementById("resultado").innerHTML = "A área do trapézio é " + area
}

function exe10(){
  let lado = Number(document.getElementById("lado").value)

  let area = lado * lado
  document.getElementById("resultado").innerHTML = "A área do quadrado é " + area
}