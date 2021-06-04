document.addEventListener("DOMContentLoaded",function(){
    console.log(dados)
    coDesReplace(".nome_projeto",dados["propostas"]["p1"])
    coDesReplace(".valor_projeto",dados["propostas"]["p1"])
    coDesReplace(".informacoes",dados["propostas"]["p1"])

    coDesReplace(".n2",dados["propostas"]["p2"])
    var lista = document.querySelectorAll(".post")
    for(elemento of lista){
        var voltar = elemento.querySelector(".voltar")
        voltar.addEventListener("click",function(event){
            event.currentTarget.parentElement.parentElement.parentElement.style.display = "none"
        })
    }

})
