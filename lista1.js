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

function exe11(){
  let diagmaior = Number(document.getElementById("diagmaior").value)
  let diagmenor = Number(document.getElementById("diagmenor").value)

  let area = (diagmaior * diagmenor) / 2
  document.getElementById("resultado").innerHTML = "A área do losango é " + area
}

function exe12(){
  let salMin = Number(document.getElementById("salMin").value)
  let salFun = Number(document.getElementById("salFun").value)

  let result = salFun/salMin
  document.getElementById("resultado").innerHTML = "Esse funcionário recebe " + result + " salários mínimos"
}

function exe13(){
  let number = Number(document.getElementById("number").value)

  let result1 = number * 1
  let result2 = number * 2
  let result3 = number * 3
  let result4 = number * 4
  let result5 = number * 5
  let result6 = number * 6
  let result7 = number * 7
  let result8 = number * 8
  let result9 = number * 9
  let result10 = number * 10
  document.getElementById("resultado").innerHTML = 
  number + "x1 = " + result1 + "<br>" +
  number + "x2 = " + result2 + "<br>" +
  number + "x3 = " + result3 + "<br>" +
  number + "x4 = " + result4 + "<br>" +
  number + "x5 = " + result5 + "<br>" +
  number + "x6 = " + result6 + "<br>" +
  number + "x7 = " + result7 + "<br>" +
  number + "x8 = " + result8 + "<br>" +
  number + "x9 = " + result9 + "<br>" +
  number + "x10 = " + result10 + "<br>"
}

function exe14(){
  let atual = Number(document.getElementById("atual").value)
  let nascimento = Number(document.getElementById("nasc").value)

  let anos = atual - nascimento
  let meses = anos * 12
  let semanas = meses * 4
  let dias = meses * 30
  document.getElementById("resultado").innerHTML = 
  anos + " anos de idade <br>" +
  meses + " meses de idade <br>" +
  semanas + " semanas de idade <br>" +
  dias + " dias de idade <br>" 
}

function exe15(){
  let salario = Number(document.getElementById("salario").value)
  let conta1 = Number(document.getElementById("conta1").value)
  let conta2 = Number(document.getElementById("conta2").value)

  document.getElementById("resultado").innerHTML = "Restará R$" + (salario - (conta1 * 1.02) - (conta2 * 1.02))
}

function exe16(){
  let cateto1 = Number(document.getElementById("cateto1").value)
  let cateto2 = Number(document.getElementById("cateto2").value)

  let hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2)
  document.getElementById("resultado").innerHTML = "A hipotenusa desse triângulo equivale a " + hipotenusa
}