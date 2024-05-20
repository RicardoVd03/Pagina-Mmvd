const shoppingCart = JSON.parse(sessionStorage.getItem('shoppingCart'));
const shoppingCartTable = document.getElementById('shoppingCartTable');

shoppingCart.forEach(product => {
  const { id, imagen, titulo, precio } = product;
  shoppingCartTable.innerHTML += `
    <tr data-id="${id}">
      <td>
          <img src="${imagen}" alt="${titulo}" width="128">
      </td>
      <td>
          ${titulo}
      </td>
      <td>
        ${precio}
      </td>
    </tr>
  `;
});