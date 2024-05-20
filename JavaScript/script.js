const products = [
  {
    id: 1,
    image: './img/Ropa/CONJUNTO.png',
    title: 'Conjunto',
    price: 'Price : $5100'
  },
  {
    id: 2,
    image: './img/Ropa/POLO.png',
    title: 'Polo',
    price: 'Price : $1100'
  },
  {
    id: 3,
    image: './img/Ropa/OTROCONJUNTO.png',
    title: 'Conjunto',
    price: 'Price : $2000'
  },
  {
    id: 4,
    image: './img/Ropa/OTROPOLO.png',
    title: 'Polo',
    price: 'Price : $6000'
  },
  {
    id: 5,
    image: './img/Ropa/jacket.png',
    title: 'Blazer',
    price: 'Price : $5500'
  },
  {
    id: 6,
    image: './img/Ropa/POLOo.png',
    title: 'Polo',
    price: 'Price : $5100'
  }
];
 
const productosContainer = document.getElementById('productos');
const carrito = document.getElementById('carrito');
const listaCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const shoppingCart = [];

const renderProduct = (id) => {
  const product = products.find(product => product.id == id);
  const detailElement = document.getElementById('detail');
  detailElement.innerHTML = `
    <div class="modal">
      <img src="${product.image}" alt="${product.title}" >
      <h3 class="modal_text">${product.title}</h3>
      <h4 class="modal_text">${product.price}</h4>
      <a href="#" class="agregar-carrito"><button class="button_style" onclick="agregarAlCarrito(${product.id})">Agregar al carrito</button></a>
    </div>
  `;
};


function agregarAlCarrito(id) {
  const product = products.find(product => product.id == id);
  const infoElement = {
    imagen: product.image,
    titulo: product.title,
    precio: product.price,
    id: product.id
  };
  shoppingCart.push(infoElement);
  sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
  insertarAlCarrito(infoElement);
}


function insertarAlCarrito(elemento) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td><img src="${elemento.imagen}" width="100"></td>
    <td>${elemento.titulo}</td>
    <td>${elemento.precio}</td>
    <td><a href="#" class="borrar" data-id="${elemento.id}">x</a></td>
  `;
  listaCarrito.appendChild(row);
}


function eliminarDelCarrito(e) {
  // e.preventDefault();
  if (e.target.classList.contains('borrar')) {
    e.target.parentElement.parentElement.remove();
  }
}


function vaciarCarrito() {
  listaCarrito.innerHTML = '';
}


function cargarEventListeners() {
  productosContainer.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
      renderProduct(parseInt(e.target.parentElement.dataset.id));
    }
  });
  carrito.addEventListener('click', eliminarDelCarrito);
  vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

cargarEventListeners();

products.forEach(product => {
  productosContainer.innerHTML += `
    <div class="producto" data-id="${product.id}">
      <img class="producto__img" src="${product.image}" alt="${product.title}">
    </div>
  `;
});
