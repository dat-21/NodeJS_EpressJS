const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { engine } = require("express-handlebars"); // Import Handlebars
const sass = require("sass");
const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public"))); // Static files (CSS/JS/images sau)

// Config Handlebars
app.engine("hbs", engine({ extname: ".hbs" })); // Extension .hbs
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views")); // Thư mục views
//__dirname trả về đúng file name đang chạy: file index

// Routes

app.get("/", (req, res) => {
  console.log(">>> Hit route / !");
  res.render("home", {
    // Render template thay vì res.send
    title: "Trang chủ - Express App",
    message: "Chào từ Handlebars!",
    time: new Date().toLocaleString(),
  });
});

app.get("/test", (req, res) => {
  console.log(">>> Hit route /test !");
  res.json({
    message: "API test OK!",
    version: "Express 4.21.2",
    timestamp: new Date().toISOString(),
  });
});

app.get("/about", (req, res) => {
  console.log(">>> Hit route /about !");
  res.render("about");
});

app.get("/news", (req, res) => {
  console.log(">>> Hit route /news !");
  res.render("news");
});

// 404 fallback
app.use((req, res) => {
  console.log(">>> 404: " + req.url);
  res.status(404).render("404", { title: "404 - Không tìm thấy" }); // Render 404.hbs
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Test: http://localhost:${port}`);
  console.log(`Test API: http://localhost:${port}/test`);
});
