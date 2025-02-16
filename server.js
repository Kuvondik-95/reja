console.log('Web serverni boshlash');
const express = require('express');
const app = express();
const http = require('http');


// 1 Intro codes
app.use(express.static("public")); // public folderni clientlarga ochib berish(html, css va images)
app.use(express.json()); // brauzerdan kelayotgan json formatdagi ma'lumotni object ko'rinishiga o'tqazib beradi
app.use(express.urlencoded({extended: true})); // form dan post bo'lib kelgan narsalarni expressda qabul qilish uchun yoziladi


// 2 Session codes

// 3 Views code          BSSR(backend server-side rendering)-Bakendda frontendni render qilib olish ya'ni serverda html ni qurib olib uni clientga yuborish. Bu usul traditional usul hisoblanad. 
// VA Zamonaviy usul single page application usuli Buni Reactda qilamiz;
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


/* 

Loyihalarda 2 branch bo'ladi githubda: Master va develop branch bo'ladi. Biz asosan develop branchda ishlab keyin master branchga merge qilamiz. Lekin bu loyihada primitive loyiha bo'lgani uchun biz master branchda ishlaymiz.

*/