function getElementById(id) {
    return document.getElementById(id)
}
var pedidosKey ="listaDePedidos"
var preencherListaPedidos = "preencherListaVendas"
function getCadastroPedidosStorage() {
    const storagePedidos = localStorage.getItem(pedidosKey)
    return JSON.parse(storagePedidos)
}

preencherListVendas()

function preencherListVendas(){
    getElementById(preencherListaPedidos).innerHTML =""
    getCadastroPedidosStorage().forEach(function(element, index) {
        console.log(element)
        getElementById(preencherListaPedidos).innerHTML += '<tr>' +
        '<th scope="row">'+(index+1)+'</th>'+
        '<td>'+element.nomeComprador+'</td>'+
        '<td>'+element.idadeComprador+'</td>'+
        '<td>'+element.emailComprador+'</td>'+
        '<td>'+element.produtoComprado+'</td>'+
        '<td>'+element.valorDoProduto+'</td>'+
        '<td>'+element.statusPedido+'</td>'+
        '<td><button class="btn btn-success" onclick = "trocaStatus('+index+')">Confirmar</button><button class="btn btn-warning" onclick = "retornarStatus('+index+')">Retornar</button></td>'+
        '<td><button class="btn btn-danger" onclick = "compararDeletar('+index+')">Deletar Pedido</button></td>'+
        '</tr>'

    });
}

function compararDeletar (p1){
    let storageCadastro = getCadastroPedidosStorage()
    storageCadastro = storageCadastro.filter(function (element, index) {
        return index != p1
    })
    localStorage.setItem(pedidosKey, JSON.stringify(storageCadastro))
    preencherListVendas()
    }

    function trocaStatus (index) {
        let armazenamentoStorage = getCadastroPedidosStorage()
        armazenamentoStorage[index].statusPedido = "Entregue"
        localStorage.setItem(pedidosKey, JSON.stringify(armazenamentoStorage))
        preencherListVendas()
    }
   

     function retornarStatus(index) {
        let retorna = getCadastroPedidosStorage()
        retorna[index].statusPedido = 'Pendente'
        localStorage.setItem(pedidosKey, JSON.stringify(retorna))
        preencherListVendas()
     }
    
     