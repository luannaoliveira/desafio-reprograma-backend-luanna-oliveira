
var valorHoraEntrada = document.querySelector("#valor-hora")


var horasProjetoEntrada = document.querySelector("#horas-projeto")

var resultado = document.querySelector("#resposta")


function calcular() {
  
    var valorHora = valorHoraEntrada.value
    console.log(valorHora)

    
    var horaProjetos = horasProjetoEntrada.value 
    console.log(horaProjetos)

  
    var valorProjeto =  valorHora * horaProjetos
    console.log(valorProjeto)

    resultado.textContent = "R$" + valorProjeto.toFixed(2);

}