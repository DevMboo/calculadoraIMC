const peso = document.getElementById('peso')
const altura = document.getElementById('altura')

function calc(){
    let IMC = parseFloat(peso.value) / (parseFloat(altura.value) * 2)
    document.getElementById('root').innerHTML = "Soma do seu IMC = " + IMC.toFixed(2)

    if(peso.value == "" || altura.value == ""){
        peso.focus()
        document.getElementById('root').innerHTML = "IMC calculo: ..."
        document.getElementById('status').innerHTML = "Precisa ser apresentado algum valor, preencha todos os campos"
    }
    else if(IMC < 18.5){
        document.getElementById('status').innerHTML = "Menor que 18,5 indica magreza elevada."
    }else if(IMC <= 24.9){
        document.getElementById('status').innerHTML = "Entre 18,5 e 24,9 é o indice normal para IMC."
    }else if(IMC <= 29.9){
        document.getElementById('status').innerHTML = "Entre 25,0 e 29,9 significa sobrepeso."
    }else if(IMC  > 30.0){
        document.getElementById('status').innerHTML = "Maior que 30.00 significa obesidade, procure um medico."
    }
}

function reset(){
    document.getElementById('peso').innerHTML = ""
    document.getElementById('altura').innerHTML = ""
}