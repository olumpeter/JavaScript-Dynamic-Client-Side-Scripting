
const myShoppingList = document.querySelector('#my_shopping_list')
const shoppingListInputBox = document.querySelector('#shopping_list_input_box')
const shoppingListSubmitButton = document.querySelector('#shopping_list_submit_button')

shoppingListSubmitButton.addEventListener('click', addAListItem)

function addAListItem() {
  const newListItem = shoppingListInputBox.value;
  shoppingListInputBox.value = ''

  const listItem = document.createElement('li')
  const listItemDeleteButton = document.createElement('button')
  listItemDeleteButton.setAttribute('id', 'list_item_delete_button')
  listItem.innerHTML = `<span>${newListItem}<\span>`
  listItemDeleteButton.textContent = 'Delete'

  myShoppingList.appendChild(listItem)
  listItem.appendChild(listItemDeleteButton)

  listItemDeleteButton.addEventListener('click', () => {
    myShoppingList.removeChild(listItem)
  })

  shoppingListInputBox.focus()
}