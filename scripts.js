const form = document.querySelector("form")
const input = document.getElementById("addItem")
const itemArea = document.getElementById("items-list")


form.addEventListener("click", (event)=>{
  if(event.target.type === "submit"){
    let itemName = input.value
    createItem(itemName)
  } 
  if (event.target.type === "reset" || event.target.tagName === "IMG"){
    const item = event.target.closest("li")
    if (item) {
      const checkbox = item.querySelector('input[type="checkbox"]')
      console.log(checkbox)
      if (checkbox && checkbox.checked){
        item.remove()
      }else {
        alert("Marca o item antes de eliminar!")
      }
    }
  }

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

    newItemDeleteButton.appendChild(newItemDeleteImage)
    newItemLabel.prepend(newItemInput)
    newItem.append(newItemLabel, newItemDeleteButton)
    
    itemArea.append(newItem)
  } catch(error){
    console.log(error)
    alert("Não foi possível criar um item. Tente novamente mais tarde.")
  } 
}

