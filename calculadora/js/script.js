
// do documento eu seleciono o id do #ganho mes
var salarioMesEntrada = document.querySelector("#ganho-mes")


// do documentto eu seleciono o id da #horas-dia
var horasDiasEntrada = document.querySelector("#horas-dia")


var resultado = document.querySelector("#resposta")
console.log(resultado)

function calcularValorHora() {

    // do salarioMesEntrada eu pego o valor
    var salarioMes = salarioMesEntrada.value
    console.log("salario por mes: ", salarioMes)

    // da horasDiaEntrada eu pego o valor
    var horaDias = horasDiasEntrada.value 
    console.log(horaDias)

    var diasTrabalhados = 22

    var horasTotaisTrabalhadas =  diasTrabalhados * horaDias
    console.log(horasTotaisTrabalhadas)

    var valorHora = salarioMes / horasTotaisTrabalhadas
    console.log(valorHora)

    resultado.textContent = "R$" + valorHora.toFixed(2);
}

