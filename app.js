const http = require("http");
const PORT = 3500;
const fs = require("fs");

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html; charset= utf-8;");
    const url = req.url;
    console.log(url);

    switch (url) {
      case "/":
        console.log("main page");
        res.write("<h1>Main</h1>");
        break;
      case "/contact":
        console.log("Contact page");
        let data = fs.readFileSync("./index.html", {
          encoding: "utf-8",
          flag: "r",
        });
        res.write(data);
        break;
      default:
        console.log("404");
        res.write("<h1>404 not found</h1>");
    }
    res.end();
  })
  .listen(PORT, () => {
    console.log("server ok");
  });
