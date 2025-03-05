// EJS bizga backend da frontendni qurib olis uchun yordam beradi. 


console.log('Web serverni boshlash');
const express = require('express'); // Express bizga backend serverni qurib beradi faqat.
const app = express(); // bu yerda express bizga object return qiladi.
const http = require('http');



// MongoDB ni chaqirish
const client = require("./server"); 
const db = client.db();   // Bu yerda db() metodi bizga object qaytaradi va uni metodlaridan foydalanib database ga 
                          // -- CRUD amallarini bajarishimiz mumkin bo'ladi.
const mongodb = require("mongodb");



// 1 Intro codes
// app.use(express.static("public"));  // public folderni clientlarga ochib berish(html, css va images)
app.use(express.static('./public'));
app.use(express.json());            // REST API. brauzerdan kelayotgan json formatdagi ma'lumotni object ko'rinishiga o'tqazib beradi
app.use(express.urlencoded({extended: true})); // TRADITIONAL API. form dan post bo'lib kelgan narsalarni expressda qabul qilish uchun yoziladi


// 2 Session codes

// 3 Views code          BSSR(backend server-side rendering)-Bakendda frontendni render qilib olish ya'ni serverda html ni qurib olib uni clientga yuborish. Bu usul traditional usul hisoblanad. 
// VA Zamonaviy usul SPA(single page application) usuli Buni Reactda qilamiz;
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing codes

app.get("/author", function(req, res){
  res.render("author");
})


app.post("/create-item", function(req, res){      // endPoint /create-item
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({reja: new_reja}, (err, data)=>{
    res.json(data.ops[0]);
    console.log(data.ops[0]);
  })
  // res.json({test:"success"});
})


app.post("/delete-item", (req, res)=>{
  console.log("STEP-2. Frontend dan backend ga request keldi.")
  const id = req.body.id;
  console.log("id:", id);

  console.log("STEP-3. Servergan DATABASE ga kirish");
  db.collection("plans").deleteOne({_id: new mongodb.ObjectId(id)}, function(err, data){
    console.log("STEP-4. DATAbasedan serverga ma'lumot keldi.");
    // res.end("Delete bo'ldi");
    res.json({state: "success"});
    console.log("STEP-5. Serverdan Frontend ga malumot jonatish");
  })
});


app.post("/edit-item", (req, res) =>{
  const data = req.body;
  console.log(data);
  db.collection("plans").findOneAndUpdate({_id: new mongodb.ObjectId(data.id)}, {$set: {reja: data.new_input}}, 
  (err, data) => {
    res.json({state: "success"});
  })
})

app.post("/delete-all" , (req, res) => {
  if(req.body.delete_all){
    db.collection("plans").deleteMany(function() {
      res.json( {state: "Hamma rejalar o\'chirildi"});
    })
  }
})




app.get("/", function(req, res){
  db.collection("plans")
  .find()
  .toArray((err, data)=>{
    if(err){
      console.log("Error:", err)
      res.end("Something went wrong!")
    } 
    else {
      res.render("reja", {items: data});
    }
  })  
})





module.exports = app;


// app.get("/hello", function(req, res){
//   res.end("HELLO WORLD HERE");
// });

// app.get("/gift", function(req, res){
//   res.end("Siz sovgalar sahifasidasiz!");
// });


/* 

Loyihalarda 2 branch bo'ladi githubda: Master va develop branch bo'ladi. Biz asosan develop branchda ishlab keyin master branchga merge qilamiz. Lekin bu loyihada primitive loyiha bo'lgani uchun biz master branchda ishlaymiz.

*/