function getElementById(id) {
    return document.getElementById(id)
}
var ProdutosCadastradosKey = "ListaHortKey "

function getHortiCadastroListaStorage() {
    const localStorageHorti = localStorage.getItem(ProdutosCadastradosKey)
    return JSON.parse(localStorageHorti)
}
situacao()
var ativo = "Ativado"
function situacao(para1) {

    let realocando = getHortiCadastroListaStorage()
    realocando = realocando.filter(function (element, index) {
        console.log(element, index)
        console.log(element.situacaodoProduto)
        return element.situacaodoProduto != para1
    })
}
console.log(situacao(ativo))


var preenchimentoListaId = "preencherLista"
preencherTabelaProdutos()
function preencherTabelaProdutos() {
    getElementById(preenchimentoListaId).innerHTML = ""
    //const element = getHortiCadastroListaStorage()[0]
    //
    //for (let index = 0; index < 500; index++) {
    //    getElementById(preenchimentoListaId).innerHTML += '<tr>' +
    //        '<th scope = "row">' + (index+1) + '</th>' +
    //        '<td>'+element.CodigoCadastro+'</td>'+
    //        '<td>'+element.produtoCadastro+'</td>'+
    //        '<td>'+element.medidaCadastro+'</td>'+
    //        '<td>'+element.pesoCadastro+'</td>'+
    //        '<td>'+element.precoCadastro+'</td>'+
    //        '<td>'+element.situacaodoProduto+'</td>'+
    //        '<td><button class="btn btn-warn" onclick ="ativaDesativar('+index+')">Ativa/Desativar</button></td>'+
    //        '<td><button class="btn btn-danger" onclick ="compararRemover('+index+')">Remover</button></td>'+
    //        '</tr>'
    //}
    getHortiCadastroListaStorage().forEach(function (element, index) {
        console.log(element)
        getElementById(preenchimentoListaId).innerHTML += '<tr>' +
            '<th scope = "row">' + (index + 1) + '</th>' +
            '<td>' + element.CodigoCadastro + '</td>' +
            '<td>' + element.produtoCadastro + '</td>' +
            '<td>' + element.medidaCadastro + '</td>' +
            '<td>' + element.pesoCadastro + '</td>' +
            '<td>' + element.precoCadastro + '</td>' +
            '<td>' + element.situacaodoProduto + '</td>' +
            '<td><button class="btn btn-warning" onclick ="ativaDesativar(' + index + ')">Ativa/Desativar</button></td>' +
            '<td><button class="btn btn-danger" onclick ="compararRemover(' + index + ')">Remover</button></td>' +
            '</tr>'
    });
}
function ativaDesativar(index) {
    let listahortiCadastrado = getHortiCadastroListaStorage()
    if (listahortiCadastrado[index].situacaodoProduto == "Ativado") {
        listahortiCadastrado[index].situacaodoProduto = "Desativado"
    } else {
        listahortiCadastrado[index].situacaodoProduto = "Ativado"
    }


    localStorage.setItem(ProdutosCadastradosKey, JSON.stringify(listahortiCadastrado))
    preencherTabelaProdutos()

}
function compararRemover(p1) {
    let listahortiCadastrado = getHortiCadastroListaStorage()
    listahortiCadastrado = listahortiCadastrado.filter(function (element, index) {
        return index != p1
    })
    localStorage.setItem(ProdutosCadastradosKey, JSON.stringify(listahortiCadastrado))
    preencherTabelaProdutos()
}