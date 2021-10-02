function CarregarFilmes(){
    let filmes = ["images/arrival.png" , "images/yesterday.png" , "images/escola.png" ,"images/eminen.jpg" , "images/toquio.jpg" , "images/nairobi.jpg" ]

    for(let controle = 0 ; controle < 6 ; controle = controle + 1){
        document.querySelector(".lista-filmes").innerHTML += "<img src="+ filmes[controle] + ">"
    }
}
