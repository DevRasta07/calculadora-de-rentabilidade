var selic = 6.25
var calcRent = (aporte, meses, adicional)=>{
    var total = aporte
    var selicDec = 6.25/100
    var adDec = adicional/100
    for (let i = 0; i < meses; i++){
        total *= (selicDec + adDec + 1)
    } 
    var resgate = total.toFixed(2)
    var lucro = total - aporte
    lucro = lucro.toFixed(2)
    
    console.log("Você vai resgatar R$ " + resgate)
    console.log("Seu lucro foi de R$ " + lucro)
}

calcRent(100,2,0.27)
