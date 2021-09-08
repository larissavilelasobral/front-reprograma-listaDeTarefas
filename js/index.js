const inpuTexto = document.getElementById('inputCard');

const url = `https://reprograma-listadetarefas.herokuapp.com/lista`;
fetch(url)
  .then(T => T.json())
  .then(lista => {
    adicionar(lista)
  })
  .catch(err => {
  console.log('ERROR. Something went wrong.')
})

function adicionar(lista) {
  const feed = document.getElementById('feed');
  lista.forEach((item) => {
    const card = document.createElement('li');
    card.setAttribute("class", `card li ${item.categoria}`);
    card.innerHTML = `
    <input id="${item._id}-check"class="input-box" type=checkbox>
    <label for="input-box"></label> 
    <div class="text-card">
      <textarea id="${item._id}textarea"disabled placeholder="Tarefa do Dia..">${item.texto}</textarea>
    </div>
    <div class="li-btn" id="${item._id}">
      <button class="btn-li-delete btn" type="submit"><img class="img-btn-li-delete img-btn" src="assets/5375227.png" alt="botão excluir"></button>
    </div>
    <div class="li-btn">
      <button id="${item._id}-edit" class="btn-li-edit btn" type="submit"><img class="img-btn-li-edit img-btn" id="${item._id}-edit-img" src="assets/edit-2.png" alt="botão editar"></button>
    </div>
    `
    feed.appendChild(card)
  })
  // botão de deletar
  const btnDelete = document.querySelectorAll('.btn-li-delete')
  for (const button of btnDelete) {
    button.addEventListener('click', (event) => {
    deleteCard(event.currentTarget.parentNode.id, lista)
    })
  }

  function deleteCard(idCard,lista) {
    lista.forEach((item) => {
      if (item._id === idCard){
        fetch(`${url}/deletar/${idCard}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(() => location.reload())
      }
    })
  }
  // botão de adicionar 
  const btnAdd = document.getElementById('button-btn-add')
  btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    fetch(`${url}/cadastrar`, { // caminho da api
      method: 'POST', // metodo http
      headers: {
        'Content-Type': 'application/json' // tipo de header (postman)
      },
      body: JSON.stringify({
        texto: inpuTexto.value, //texto que ele vai capturar no input
        categoria: 'vida', //texto que ele vai capturar no input
      })
    })
      .then(res => res.json())
      .then(() => location.reload())
   })
  
  // botão de editar
  const btnEdit = document.querySelectorAll('.btn-li-edit')
  for (const button of btnEdit) {
    button.addEventListener('click', (event) => {
    EditCard(event.target.id, lista)
    })
  }

  
  function EditCard(idCard,lista){
    console.log(idCard) // 61360b458c03230004de811a-edit-img (24digitos)
    const idCardGeral = idCard.substr(0, 24); //61360b458c03230004de811a
    const textareaValue = document.getElementById(`${idCardGeral}textarea`)
    textareaValue.removeAttribute("disabled")
    console.log(textareaValue.value)
    lista.forEach((item) => {
      if (item._id === idCardGeral){
        fetch(`${url}/atualizar/${idCardGeral}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({
          texto: textareaValue.value,
          categoria: 'vida',
        })
      })
      .then(res => res.json())
      .then(() => location.reload())
      }
    })
    
  }
  
  // botão de filtrar por categoria
  const btnCategoria = document.querySelectorAll('.#')
  for (const button of btnCategoria) {
    button.addEventListener('click', (event) => {
    categoria(event.target.id, lista)
    })
  }

  // classificar por categoria
  function categoria(idCard){
    console.log(idCard) // 61360b458c03230004de811a-edit-img (24digitos)
    const idCardGeral = idCard.substr(0, 24); //61360b458c03230004de811a
    lista.forEach((item) => {
    })
  }

}