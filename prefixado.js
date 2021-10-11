var calcRent = (aporte, meses, rentabilidade)=>{
    var total = aporte
    var rentDec = rentabilidade/100
    var dias = meses*30
    var IR = 22.5
    
    if (dias > 180 && dias < 360) {
        IR = 20
    }
    
    if (dias > 360 && dias < 720) {
        IR = 17.5
    }
    
    if (dias > 720) {
        IR = 15
    }
    
    for (let i = 0; i < meses; i++){
        total *= (rentDec + 1)
    } 
    
    var bruto = Number(total.toFixed(2))
    var lucro = bruto - aporte
    var taxas = lucro*(IR/100)
    lucro -= taxas
    var resgate = bruto - taxas
    
    console.log("Depois de " + meses + " meses:")
    console.log("Você vai resgatar R$ " + resgate)
    console.log("E seu lucro será de R$ " + lucro)
}

calcRent(100,1, 10)
