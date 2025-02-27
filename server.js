const http = require("http");

const mongodb = require("mongodb");

const connectionString = "mongodb+srv://kuvondik9595:ejFwleu2iK3k0Ndt@clustermit24.akowc.mongodb.net/Reja"

mongodb.connect(connectionString, {
  useNewUrlParser: true, 
  useUnifiedTopology: true}, 
  (err, client) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed!");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let port = 3000;
      server.listen(port, function(){
        console.log(`Server is running succesfully on port ${port}, http://localhost:${port} `)
      });
    }
});

