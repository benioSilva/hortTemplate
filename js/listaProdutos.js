function getElementById(id){
    return document.getElementById(id)
}
var ProdutosCadastradosKey = "ListaHortKey "

function getHortiCadastroListaStorage() {
    const localStorageHorti = localStorage.getItem(ProdutosCadastradosKey)
    return JSON.parse(localStorageHorti)
}
var preenchimentoListaId = "preencherLista"
preencherTabelaProdutos()
function preencherTabelaProdutos (){
    getElementById(preenchimentoListaId).innerHTML=""
    getHortiCadastroListaStorage().forEach(function(element, index){
        console.log(element)
        getElementById(preenchimentoListaId).innerHTML += '<tr>' +
        '<th scope = "row">' + (index+1) + '</th>' +
        '<td>'+element.CodigoCadastro+'</td>'+
        '<td>'+element.produtoCadastro+'</td>'+
        '<td>'+element.medidaCadastro+'</td>'+
        '<td>'+element.pesoCadastro+'</td>'+
        '<td>'+element.precoCadastro+'</td>'+
        '<td>'+element.situacaodoProduto+'</td>'+
        '<td><button class="btn btn-danger" onclick ="compararRemover('+index+')">Remover</button></td>'+
        '</tr>'
    });
}

function compararRemover (p1){
    let listahortiCadastrado = getHortiCadastroListaStorage()
    listahortiCadastrado = listahortiCadastrado.filter(function(element, index){
        return index != p1
    })
    localStorage.setItem(ProdutosCadastradosKey, JSON.stringify(listahortiCadastrado))
    preencherTabelaProdutos()
}