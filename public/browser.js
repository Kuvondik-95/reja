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
  e.preventDefault();  // traditional API ni o'chirib beradi
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
  
  console.log(e.target);
  // delete operations
  if(e.target.classList.contains("delete-me")){
    
    if(confirm("Aniq ochirmoqchimisiz?")){
      console.log("STEP-1 Frontend dan backend ga request ketdi.")
      axios.post("/delete-item", {id: e.target.getAttribute("data-id")})
      .then((response) => {
        console.log("STEP-6. Backend dan kelgan data ni response qismda qabul qilamiz.");
        e.target.parentElement.parentElement.remove();
      }).catch((err) => {
        console.log("Iltimos qaytadan urinib ko'ring")
      });
    }
  } 
  
  
  // edit operations
  if(e.target.classList.contains("edit-me")){
    let userInput = prompt("O\'zgartirishni kiriting", e.target.parentElement.parentElement.querySelector('.item-text').innerHTML);

    if(userInput){
      console.log(userInput);
      axios.post("/edit-item", 
        {id: e.target.getAttribute("data-id"), 
         new_input: userInput})
      .then(response => {
        console.log(response.data);
        e.target.parentElement.parentElement.querySelector('.item-text').innerHTML = userInput;
      })
      .catch(err => {
        console.log(err);
        console.log("Iltimos qaytadan urinib ko'ring")
      })
    }
  }
})

document.getElementById('clean-all').addEventListener("click", () =>{
  axios.post("/delete-all", {delete_all: true}).then(response => {
    alert(response.data.state);
    document.location.reload();
  })
})