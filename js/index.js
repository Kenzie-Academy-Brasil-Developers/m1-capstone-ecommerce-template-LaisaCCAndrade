function criar(objeto)
{
    let li = document.createElement("li")
    li.classList.add("imagem")

    let img = document.createElement("img")
    let modelo = document.createElement("p")
    modelo.classList.add("modelo")

    let nomeProduto = document.createElement("p")
    nomeProduto.classList.add("nomeRoupas")

    let valorProduto = document.createElement("span")
    valorProduto.classList.add("valor")

    let addCarrinho = document.createElement("button")
    addCarrinho.id = objeto.id
    addCarrinho.classList.add("addCarrinho")

    addCarrinho.addEventListener("click", function(e)
    {
        e.preventDefault()
    })
    
    let descricao = document.createElement("div")
    descricao.classList.add("descricaoProduto")

    img.src = objeto.imagem
    modelo.innerText = objeto.modelo
    nomeProduto.innerText = objeto.nome
    valorProduto.innerText = `R$ ${objeto.valor},00`
    addCarrinho.innerText = "Adicionar ao Carrinho"

    descricao.append(modelo, nomeProduto, valorProduto, addCarrinho)
    li.append(img, descricao)

    return li
}

function procurandoProdutos(array)
{
    let vestido = document.querySelector(".vestidos")
    for(let i = 0; i < array.length; i++)
    {
        vestido.appendChild(criar(array[i]))
    }
}
procurandoProdutos(vestidos); 

let produtoCar = document.querySelectorAll(".addCarrinho");

let quantidade = 0;
let valorFinal = 0;

for(let j = 0; j < produtoCar.length; j++)
{
    let botao = produtoCar[j];

    botao.addEventListener('click', function(e)
    {
        let produto = e.target;
    
        let idProduto = produto.id;

        let id = idProduto

        let roupas = procuraProduto(id);

        if(!roupas)
        {
            alert("Estoque esgotado!")
        }else
        {
            inserindoCarrinho(roupas)
        }
    })
}

function verificar(id)
{
    let roupaNoivos = document.querySelector(id);
    console.log(roupaNoivos);
}

function procuraProduto(id)
{
    for(let i = 0; i < vestidos.length; i++)
    {
        let produtos = vestidos[i];
        if(produtos.id == id)
        {
            return produtos;
        }
    }
    return "Produto não encontrado!"
}

function inserindoCarrinho(vestido)
{
    quantidade++;
    valorFinal += vestido.valor

    document.querySelector("#quantidade").innerText = `(${quantidade})`
    document.querySelector("#total").innerText = `Valor total R$ ${valorFinal},00`

    let listaDeCompra = document.getElementById("listaCompras");

    let li = document.createElement("li");
    li.classList.add("compraundefined")
    let img = document.createElement("img");
    let div = document.createElement("div");
    let div2 = document.createElement("div");
    let nome = document.createElement("p");
    let valor = document.createElement("p");
    let quantia = document.createElement("p");
    let valorTotal = document.createElement("span");
    let buttonn = document.createElement("button");
    buttonn.classList.add(".addCarrinho")

    li.id = vestido.id
    img.src = vestido.imagem;
    nome.innerText = `${vestido.nome}`;
    valor.innerText = `R$ ${vestido.valor},00`;
    buttonn.innerHTML = "Remover";
    buttonn.id = vestido.id;
    valorTotal.innerText = `Valor total R$ ${valorFinal}00`

    buttonn.addEventListener("click", function(e)
    {
        let li = e.path[2]
        console.log(li);
    
        li.remove()

        quantidade--;
        valorFinal -= vestido.valor;

        document.querySelector("#quantidade").innerText = `(${quantidade})`
        document.querySelector("#total").innerText = `Valor total R$ ${valorFinal},00`
    })

    li.append(img, div)
    div.append(nome, valor, buttonn)
    div2.append(quantia, valorTotal)
    listaDeCompra.append(li)
}