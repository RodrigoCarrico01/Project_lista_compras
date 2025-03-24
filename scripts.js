const form = document.querySelector("form")
const input = document.getElementById("addItem")
const itemArea = document.getElementById("items-list")

form.addEventListener("submit",(event) => {
  event.preventDefault()
  let itemName = input.value
  createItem(itemName)
})


function createItem(itemName){
  try{
    let text = itemName
    
    const safeId = itemName.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now()

    const newItem = document.createElement("li")
    const newItemLabel = document.createElement("label")
    const newItemInput = document.createElement("input")
    const newItemDeleteButton = document.createElement("button")
    const newItemDeleteImage = document.createElement("img")
  
    newItem.classList.add("item")
    
    newItemDeleteButton.classList.add("btn-delete")
    newItemDeleteButton.type = "reset"

    newItemDeleteImage.src = "assets/icons/remove.svg"

    newItemLabel.setAttribute("for", safeId)
    newItemLabel.textContent = text

    newItemInput.type = "checkbox"
    newItemInput.id = safeId

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
1. O Button delete apagar um item
2. aparecer o aviso durante 5s

*/ 