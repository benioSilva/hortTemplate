
function getElementById(id){
    return document.getElementById(id)
}
var ProdutosCadastradosKey = "ListaHortKey "

function getHortiCadastroListaStorage() {
    const localStorageHorti = localStorage.getItem(ProdutosCadastradosKey)
    return JSON.parse(localStorageHorti)
}
var codigoId = "codigo"
var produtoId = "produto"
var pesoId = "peso"
var precoId = "preco"
var botaoCadastrarId = "botaoCadastrar"
var situacaoId = "situacao"
var medidaId = "medida"

console.log(getHortiCadastroListaStorage())
getElementById(botaoCadastrarId).addEventListener('click', function(event){
    event.preventDefault();
    
    let valoresCadastroProdutos = {
        CodigoCadastro: getElementById(codigoId).value,
        produtoCadastro: getElementById(produtoId).value,
        medidaCadastro: getElementById(medidaId).value,
        pesoCadastro: getElementById(pesoId).value,
        precoCadastro: getElementById(precoId).value,
        situacaodoProduto: getElementById(situacaoId).value
    }
     if(getHortiCadastroListaStorage() == null) {
         let listaHorti = [valoresCadastroProdutos]
         localStorage.setItem(ProdutosCadastradosKey, JSON.stringify(listaHorti))
         console.log(getHortiCadastroListaStorage())
     } else {
        const novoGetHortiCadastroListaStorage = getHortiCadastroListaStorage()
        novoGetHortiCadastroListaStorage.push(valoresCadastroProdutos)
        localStorage.setItem(ProdutosCadastradosKey, JSON.stringify(novoGetHortiCadastroListaStorage))
     }
     getElementById(codigoId).value =""
     getElementById(produtoId).value =""
     getElementById(pesoId).value =""
     getElementById(precoId).value =""
     console.log(getHortiCadastroListaStorage())
})
console.log(getHortiCadastroListaStorage())
