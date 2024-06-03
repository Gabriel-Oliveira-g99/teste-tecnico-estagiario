const productsInCart = [
  {
    id: 1,
    name: "Product 1", // Nome do produto
    price: 100.0, // Preço do produto
    quantity: 3, // Quantidade do produto
    freight: 10.0, // Custo de frete
  },
  {
    id: 2,
    name: "Product 2",
    price: 200.0,
    quantity: 2,
    freight: 20.0,
  },
  {
    id: 3,
    name: "Product 3",
    price: 300.0,
    quantity: 1,
    freight: 30.0,
  },
];

const quantidadeProduto1 = productsInCart[0].quantity;
const qtdProduto1 = document.querySelector('#qtd_produto_1');
qtdProduto1.innerText = quantidadeProduto1;

const quantidadeProduto2 = productsInCart[1].quantity;
const qtdProduto2 = document.querySelector('#qtd_produto_2');
qtdProduto2.innerText = quantidadeProduto2;

const quantidadeProduto3 = productsInCart[2].quantity;
const qtdProduto3 = document.querySelector('#qtd_produto_3');
qtdProduto3.innerText = quantidadeProduto3;

const qtd_produtos = document.getElementById('cart-quantity-value');
let quantidade_Total = quantidadeProduto1 + quantidadeProduto2 + quantidadeProduto3;
qtd_produtos.innerText = quantidade_Total;

const precoProduto1 = productsInCart[0].price;
const priceProduto1 = document.querySelector('#preco_produto_1');
priceProduto1.innerText = `R$ ${precoProduto1.toFixed(2).replace('.', ',')}`;

const precoProduto2 = productsInCart[1].price;
const priceProduto2 = document.querySelector('#preco_produto_2');
priceProduto2.innerText = `R$ ${precoProduto2.toFixed(2).replace('.', ',')}`;

const precoProduto3 = productsInCart[2].price;
const priceProduto3 = document.querySelector('#preco_produto_3');
priceProduto3.innerText = `R$ ${precoProduto3.toFixed(2).replace('.', ',')}`;

const subtotal_produtos = document.getElementById('cart-subtotal-value');
qtd1vezespreco1 = precoProduto1*quantidadeProduto1;
qtd2vezespreco2 = precoProduto2*quantidadeProduto2;
qtd3vezespreco3 = precoProduto3*quantidadeProduto3;
let somaprodutos_Total =  qtd1vezespreco1 + qtd2vezespreco2 + qtd3vezespreco3;
subtotal_produtos.innerText = `R$ ${somaprodutos_Total.toFixed(2).replace('.', ',')}`;

const freteProduto1 = productsInCart[0].freight;
const freteProduto2 = productsInCart[1].freight;
const freteProduto3 = productsInCart[2].freight;
const fretecompra = document.getElementById('cart-freight-value');

if (qtd1vezespreco1 > qtd2vezespreco2 && qtd1vezespreco1 > qtd3vezespreco3) {
  freteTotal = freteProduto1;
} else if (qtd2vezespreco2 > qtd1vezespreco1 && qtd2vezespreco2 > qtd3vezespreco3) {
  freteTotal = freteProduto2;
} else {
  freteTotal = freteProduto3;
}
fretecompra.innerText = `R$ ${freteTotal.toFixed(2).replace('.', ',')}`;

const valorfinalcompra = document.getElementById('cart-total-value');
let valorTotalCompra = somaprodutos_Total + freteTotal;
valorfinalcompra.innerText = `R$ ${valorTotalCompra.toFixed(2).replace('.', ',')}`;