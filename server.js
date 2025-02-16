console.log('Web serverni boshlash');
const express = require('express');
const app = express();
const http = require('http');


// 1 Intro codes
app.use(express.static("public")); // public folderni clientlarga ochib berish(html, css va images)
app.use(express.json()); // brauzerdan kelayotgan json formatdagi ma'lumotni object ko'rinishiga o'tqazib beradi
app.use(express.urlencoded({extended: true})); // form dan post bo'lib kelgan narsalarni expressda qabul qilish uchun yoziladi


// 2 Session codes

// 3 Views code          BSSR(backend server-side rendering);
app.set("views", "views");
app.set("view engine", "ejs");


// 4 Routing codes
app.get("/hello", function(req, res){
  res.end("HELLO WORLD HERE");
});

app.get("/gift", function(req, res){
  res.end("Siz sovgalar sahifasidasiz!");
});



const server = http.createServer(app);
let port = 3000;
server.listen(port, function(){
  console.log(`Server is running succesfully on port ${port} `)
});
