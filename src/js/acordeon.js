const itensPerguntasERespostas = document.querySelectorAll(".item")

itensPerguntasERespostas.forEach(function (item) {
    item.addEventListener("click", function () {
        const itemAtivoAtual = document.querySelector(".ativo")

        if (item.classList.contains("ativo")) {
            item.classList.remove("ativo")
        } else {

            if (itemAtivoAtual) {
                itemAtivoAtual.classList.remove("ativo")
            }
            item.classList.add("ativo")
        }
    })
})