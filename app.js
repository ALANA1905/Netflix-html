/*
funções 
funções do js
-alert()
-console.log()
funções personalizadas
-funçõo criadas para pessoa qie esta desenvolvendo.
-a função precisa ser chamasa para ser executada.
-Para criar uma função usamos a palavra fuction
function abacaxi(){

}
*/

function EscreverFrase(texto){
    console.log("texto")
}

EscreverFrase("Tudo sei nada sei")
EscreverFrase("Sozinho vou rápido juntos vamos longe")

function Converter(){

    let ValorEmDolar= document.querySelector("#valor").value
    
    let valorEmDoLarNumerico = parseFloat(ValorEmDolar)
    
    let CotaçãoDolar=5
    let ValorEmReal= valorEmDoLarNumerico * CotaçãoDolar

    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$" + ValorEmReal.toFixed(2)
    console.log(ValorEmReal)
    let bitcoin = ValorEmReal / 22500
    document.querySelector("#valorBitcoin").innerHTML = "O resultado em Bitcoin é " + bitcoin.toFixed
}

