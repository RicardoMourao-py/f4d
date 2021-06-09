document.addEventListener("DOMContentLoaded",function(){
    console.log(dados)
    coDesReplace(".nome_projeto",dados["propostas"]["p1"])
    coDesReplace(".valor_projeto",dados["propostas"]["p1"])
    coDesReplace(".informacoes",dados["propostas"]["p1"])

    coDesReplace(".titulo_n2",dados["propostas"]["p2"])
    coDesReplace(".valor_n2",dados["propostas"]["p2"])
    coDesReplace(".info_n2",dados["propostas"]["p2"])

    coDesReplace(".titulo_n3",dados["propostas"]["p3"])
    coDesReplace(".valor_n3",dados["propostas"]["p3"])
    coDesReplace(".info_n3",dados["propostas"]["p3"])

    coDesReplace(".titulo_n4",dados["propostas"]["p4"])
    coDesReplace(".valor_n4",dados["propostas"]["p4"])
    coDesReplace(".info_n4",dados["propostas"]["p4"])

    coDesReplace(".titulo_n5",dados["propostas"]["p5"])
    coDesReplace(".valor_n5",dados["propostas"]["p5"])
    coDesReplace(".info_n5",dados["propostas"]["p5"])

    var lista = document.querySelectorAll(".post")
    for(elemento of lista){
        var voltar = elemento.querySelector(".voltar")
        voltar.addEventListener("click",function(event){
            event.currentTarget.parentElement.parentElement.parentElement.style.display = "none"
        })
    }

})
