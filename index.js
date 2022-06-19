const http = require("http");
const path = require("path");
const fs = require("fs");

// create a basic server

const server = http.createServer((req, res) => {
  // file to load
  let file_path = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  // extname
  let extname = path.extname(file_path);

  // set initial content
  let contentType = "text/html";

  // check the ext
  if (extname == ".js") {
    contentType = "text/JavaScript";
  }
  if (extname == ".css") {
    contentType = "text/css";
  }
  if (extname == ".json") {
    contentType = "application/json";
  }
  if (extname == ".png") {
    contentType = "image/png";
  }
  if (extname == ".jpg") {
    contentType = "image/jpg";
  }

  // load a file
  fs.readFile(file_path, (err, content) => {
    if (err) {
      if (err.code == "ENOENT") {
        fs.readFile(path.join(__dirname, "public", "404.html"), (err, content) => {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content, 'utf8')
        });
      }
      else{
        //   internal server error
        res.writeHead(500)
        res.end('internal server error')
      }
    }
    else{
        res.writeHead(200, {'Content-Type': contentType})
        res.end(content, 'utf8')
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`server is running on port ${PORT}`));
