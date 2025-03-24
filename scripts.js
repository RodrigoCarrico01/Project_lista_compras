const form = document.querySelector("form")
const input = document.getElementById("addItem")
const itemArea = document.getElementById("items-list")

form.addEventListener("submit",(event) => {
  event.preventDefault()
  let item = input.value
  createItem(item)
})

function createItem(item){
  try{
    let text = item
    const newItem = document.createElement("li")
    const newItemLabel = document.createElement("label")
    const newItemInput = document.createElement("input")
    const newItemDeleteButton = document.createElement("button")
    const newItemDeleteImage = document.createElement("img")
  
    newItem.classList.add("item")
    newItemDeleteButton.classList.add("btn-delete")
    newItemDeleteImage.src = "assets/icons/remove.svg"
    newItemLabel.textContent = text
    newItemDeleteButton.type = "reset"
    newItemInput.type = "checkbox"

    newItemDeleteButton.appendChild(newItemDeleteImage)
    newItemLabel.prepend(newItemInput)
    newItem.append(newItemLabel, newItemDeleteButton)
    
    itemArea.append(newItem)
  } catch(error){
    console.log(error)
    alert("Não foi possível criar um item. Tente novamente mais tarde.")
  } 
}

/*
Eu quero:
1. Capturar o que a pessoa escreve no input
2. Usar o que a pessoa escreve para criar um item
3. 
*/ 