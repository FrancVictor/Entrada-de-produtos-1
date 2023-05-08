const form = document.querySelector('form');
const estoque = document.getElementById('estoque');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const empresaProduto = document.getElementById('empresa-produto').value;
  const data = document.getElementById('data').value;
  const numero = document.getElementById('numero').value;
  const quantidade = document.getElementById('quantidade').value;
  const dados = document.getElementById('dados').value

    const entrada = {
    empresaProduto,
    data,
    numero,
    quantidade,
    dados,
  };

  let entradas = JSON.parse(localStorage.getItem('entradas')) || [];
  entradas.push(entrada);
  localStorage.setItem('entradas', JSON.stringify(entradas));

  mostrarEntradas();
  form.reset();
});

function mostrarEntradas() {
  estoque.innerHTML = '';

  const entradas = JSON.parse(localStorage.getItem('entradas')) || [];

  entradas.forEach(function(entrada) {
    const li = document.createElement('li');
    li.textContent = `${entrada.empresaProduto} - ${entrada.data} - N° ${entrada.numero} -Quantidade ou volume: ${entrada.quantidade} Dados: ${entrada.dados}`;
    estoque.appendChild(li);
  });
}

mostrarEntradas();
 
function mostrarEntradas() {
  estoque.innerHTML = '';

  const entradas = JSON.parse(localStorage.getItem('entradas')) || [];

  entradas.forEach(function(entrada, index) {
    const li = document.createElement('li');
    li.textContent ='Empresa/Produto: '  + entrada.empresaProduto +
                  'ㅤ|ㅤData: ' + entrada.data + 
                  'ㅤ|ㅤNúmero: ' + entrada.numero +
                  'ㅤ|ㅤQuantidade: ' + entrada.quantidade +
                  'ㅤ|ㅤDados: ' + entrada.dados 

    const button = document.createElement('button');
    button.textContent = 'Excluir';
    button.setAttribute('data-index', index);

    li.appendChild(button);
    estoque.appendChild(li);
  });
}

// Excluir itens 

estoque.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const index = event.target.getAttribute('data-index');
    let entradas = JSON.parse(localStorage.getItem('entradas')) || [];
    entradas.splice(index, 1);
    localStorage.setItem('entradas', JSON.stringify(entradas));
    mostrarEntradas();
  }
});
