function getElementById(id) {
    return document.getElementById(id)
}
var valorCompraId = "valorComprado"
var ProdutosCadastradosKey = "ListaHortKey "
var produtosCompraId = "listaProdutos"
var nomeCompradorId = "nomeComprador"
var idadeCompradorId = "idadeComprador"
var emailCompradorId = "emailComprador"
var botaoComprarId = "botaoComprar"
var pedidosKey = "listaDePedidos"
var situacaoId = "situacao"

function getHortiCadastroListaStorage() {
    const localStorageHorti = localStorage.getItem(ProdutosCadastradosKey)
    return JSON.parse(localStorageHorti)
}
// var ativo = "Ativado"

// function situacao(para1) {
//     var realocando = getHortiCadastroListaStorage()
//     realocando = realocando.filter(function (element, index) {
//         console.log(element)
//         return element.situacaodoProduto == ativo
//     })
// }
   

function getCadastroPedidosStorage() {
    const storagePedidos = localStorage.getItem(pedidosKey)
    return JSON.parse(storagePedidos)
}


loadOpicoesDeProdutos()



function loadOpicoesDeProdutos() {
    getElementById(produtosCompraId).innerHTML = ""
     let lista = getHortiCadastroListaStorage().filter(function(element){
        return element.situacaodoProduto == "Ativado"
     })
     
    lista.forEach(function (element, index) {
        console.log(element)
        getElementById(produtosCompraId).innerHTML +=
            '<option value =' + index + '>' + element.produtoCadastro + '</option>'
    });
    getElementById(valorCompraId).value = getHortiCadastroListaStorage()[0].precoCadastro
}


function loadPrecosOnChange() {
    let indexProdutos = getElementById(produtosCompraId).value
    getElementById(valorCompraId).value = getHortiCadastroListaStorage()[indexProdutos].precoCadastro

}

getElementById(botaoComprarId).addEventListener('click', function (event) {
    event.preventDefault();
    let listaDadosComprador = {
        nomeComprador: getElementById(nomeCompradorId).value,
        idadeComprador: getElementById(idadeCompradorId).value,
        emailComprador: getElementById(emailCompradorId).value,
        produtoComprado: getHortiCadastroListaStorage()[getElementById(produtosCompraId).value].produtoCadastro,
        valorDoProduto: getElementById(valorCompraId).value,
        statusPedido: "Pendente"

    }
    console.log(listaDadosComprador)
    if (getCadastroPedidosStorage() == null) {
        let listaPedidos = [listaDadosComprador]
        localStorage.setItem(pedidosKey, JSON.stringify(listaPedidos))
    } else {
        const storageObjetoSalvo = getCadastroPedidosStorage()
        storageObjetoSalvo.push(listaDadosComprador)
        localStorage.setItem(pedidosKey, JSON.stringify(storageObjetoSalvo))
    }
    getElementById(nomeCompradorId).value = ""
    getElementById(idadeCompradorId).value = ""
    getElementById(emailCompradorId).value = ""
})



