console.log("Browser Js ishga tushdi")

let createField = document.getElementById("create-field");

function itemTemplate(item){
    return 
    `
      <div class="col-md-10 border">${item.reja}</div>
      <div class="col-md-1 border">
        <button class="edit-btn btn btn-success" data-id="${item._id}">Edit</button>
      </div>
      <div class="col-md-1 border">
        <button class="edit-btn btn btn-danger" data-id="${item._id}">Delete</button>
      </div>
    `;
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