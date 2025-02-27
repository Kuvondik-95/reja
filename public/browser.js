console.log("Browser Js ishga tushdi")

let createField = document.getElementById("create-field");

function itemTemplate(item){
    return ` <li class="list-group-item">
                <span class="" >${item.reja}</span>
                <span style="float: right;">
                  <button class="edit-me btn btn-success" data-id="${item._id}">Edit</button>
                  <button class="delete-me btn btn-danger" data-id="${item._id}">Delete</button>
                </span>
              </li> `;
}


document.getElementById("create-form").addEventListener("submit", (e)=>{
  e.preventDefault();
  axios.post("/create-item", {reja: createField.value})
  .then((response)=>{
    document.getElementById("item-list").insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value="";
    createField.focus();
  })
  .catch((err)=>{
    console.log("Iltimos qaytadan urinib ko'ring")
  })
});


document.addEventListener("click", (e)=>{
  
  // delete operations
  if(e.target.classList.contains("delete-me")){
    if(confirm("Aniq ochirmoqchimisiz?")){
      axios.post("delete-item", {id: e.target.getAttribute("data-id")})
      .then((response) => {
        e.target.parentElement.parentElement.remove();
      }).catch((err) => {
        console.log("Iltimos qaytadan urinib ko'ring")
      });
    }
  } 
  
  
  // edit operations
  if(e.target.classList.contains("edit-me")){
    
  }
})