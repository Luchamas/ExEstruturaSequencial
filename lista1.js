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
  document.getElementById("resultado").innerHTML =
    "O peso em gramas é de " + resultado + "g"
}

function exe9() {
  let basemaior = Number(document.getElementById("basemaior").value)
  let basemenor = Number(document.getElementById("basemenor").value)
  let altura = Number(document.getElementById("altura").value)

  let area = ((basemaior + basemenor) * altura) / 2
  document.getElementById("resultado").innerHTML =
    "A área do trapézio é " + area
}

function exe10() {
  let lado = Number(document.getElementById("lado").value)

  let area = lado * lado
  document.getElementById("resultado").innerHTML =
    "A área do quadrado é " + area
}

function exe11() {
  let diagmaior = Number(document.getElementById("diagmaior").value)
  let diagmenor = Number(document.getElementById("diagmenor").value)

  let area = (diagmaior * diagmenor) / 2
  document.getElementById("resultado").innerHTML = "A área do losango é " + area
}

function exe12() {
  let salMin = Number(document.getElementById("salMin").value)
  let salFun = Number(document.getElementById("salFun").value)

  let result = salFun / salMin
  document.getElementById("resultado").innerHTML =
    "Esse funcionário recebe " + result + " salários mínimos"
}

function exe13() {
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
    number +
    "x1 = " +
    result1 +
    "<br>" +
    number +
    "x2 = " +
    result2 +
    "<br>" +
    number +
    "x3 = " +
    result3 +
    "<br>" +
    number +
    "x4 = " +
    result4 +
    "<br>" +
    number +
    "x5 = " +
    result5 +
    "<br>" +
    number +
    "x6 = " +
    result6 +
    "<br>" +
    number +
    "x7 = " +
    result7 +
    "<br>" +
    number +
    "x8 = " +
    result8 +
    "<br>" +
    number +
    "x9 = " +
    result9 +
    "<br>" +
    number +
    "x10 = " +
    result10 +
    "<br>"
}

function exe14() {
  let atual = Number(document.getElementById("atual").value)
  let nascimento = Number(document.getElementById("nasc").value)

  let anos = atual - nascimento
  let meses = anos * 12
  let semanas = meses * 4
  let dias = meses * 30
  document.getElementById("resultado").innerHTML =
    anos +
    " anos de idade <br>" +
    meses +
    " meses de idade <br>" +
    semanas +
    " semanas de idade <br>" +
    dias +
    " dias de idade <br>"
}

function exe15() {
  let salario = Number(document.getElementById("salario").value)
  let conta1 = Number(document.getElementById("conta1").value)
  let conta2 = Number(document.getElementById("conta2").value)

  document.getElementById("resultado").innerHTML =
    "Restará R$" + (salario - conta1 * 1.02 - conta2 * 1.02)
}

function exe16() {
  let cateto1 = Number(document.getElementById("cateto1").value)
  let cateto2 = Number(document.getElementById("cateto2").value)

  let hipotenusa = Math.sqrt(cateto1 ** 2 + cateto2 ** 2)
  document.getElementById("resultado").innerHTML =
    "A hipotenusa desse triângulo equivale a " + hipotenusa
}

function exe17() {
  let raio = Number(document.getElementById("raio").value)
  let pi = 3.14

  let comprimento = 2 * pi * raio
  let area = pi * raio**2
  let volume = 3/4 * pi * raio**3 
  document.getElementById("resultado").innerHTML =
    "O comprimento da esfera equivale a " + comprimento + "<br> A área equivale a " + area + "<br> O volume equivale a " + volume
}

function exe18() {
  let temp = Number(document.getElementById("temp").value)
  let escolha = Number(document.getElementById("escolha").value)
  let C
  let F
  let K
  switch (escolha) {
    case 1:
      if (temp >= -273.15){
        C = temp
        F = 1.8 * temp + 32
        K = temp + 273
      }
    break
    case 2:
      if (temp >= -459){
        C = (temp - 32)/1.8
        F = temp
        K = (temp-32)/1.8 + 273
      }
    break
    case 3:
      if (temp >= 0){
        C = temp - 273
        F = (temp - 273) * 1.8 + 32
        K = temp
      }
    break
    default:
      C, F, K = "Opção inválida"
      break
  }
  // saída do dados
  document.getElementById("resultado").innerHTML = 
    "Graus Celsius = " + C + "°C <br>" +
    "Graus Fahrenheit = " + F + "°F <br>" +
    "Kelvin = " + K + "K"
}

function exe19(){
  let comp = Number(document.getElementById("comp").value)
  let larg = Number(document.getElementById("larg").value)
  let area = comp * larg
  let pot = area * 18

  document.getElementById("resultado").innerHTML = 
  "A área do cômodo é de " + area + " metros <br>" +
  "E a potência de iluminação necessária é de " + pot + " watts"
}

function exe20(){
  let d = Number(document.getElementById("dist").value)
  let angulo = Number(document.getElementById("angulo").value)
  let hip = d/Math.cos(angulo)
  if (hip < 0){
    hip = hip * -1
  }

  document.getElementById("resultado").innerHTML = 
  "A medida da escada é de " + hip
}

function exe21(){
  let salMin = Number(document.getElementById("salMin").value)
  let trab = Number(document.getElementById("trab").value)
  let extra = Number(document.getElementById("extra").value)

  let salTotal = trab * (salMin/8) + extra * (salMin/4)

  document.getElementById("resultado").innerHTML = 
  "O salário total é de R$" + salTotal
}

function exe22(){
  let lado = Number(document.getElementById("lados").value)

  let diag = lado * (lado - 3)/2

  document.getElementById("resultado").innerHTML = 
  "Este polígono possui " + diag + " diagonais"
}

function exe23(){
  let a1 = Number(document.getElementById("a1").value)
  let a2 = Number(document.getElementById("a2").value)

  let a3 = 180 - a1 - a2

  document.getElementById("resultado").innerHTML = 
  "O terceiro ângulo possui " + a3 + " graus"
}

function exe24(){
  let reais = Number(document.getElementById("reais").value)

  let dolar = reais * 1.8
  let marco = reais * 2
  let libra = reais * 3.57

  document.getElementById("resultado").innerHTML = 
  "Dólar = " + dolar + "$ <br>" +
  "Marco Alemão = " + marco + "DM <br>" +
  "Libra Esterlina = " + libra + "£"
}

function exe25(){
  let hr = Number(document.getElementById("hr").value)
  let min = Number(document.getElementById("min").value)

  let minH = hr * 60
  let minT = minH + min
  let sec = minT * 60
  document.getElementById("resultado").innerHTML = 
  "As horas em minutos são " + minH + " min" +
  "<br> Os minutos totais são " + minT + " min" +
  "<br> Esse horário em segundos equivale a " + sec + " segundos"
}