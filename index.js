const { append } = require("express/lib/response");
const zip = require("express-zip");

const App = require("express")();

App.get("/", (req, res) => {
  res.send("Hello there");
});

App.get("/zip", (req, res) => {
  res.zip([
    { path: "./res/1.jpg", name: "./res/1.jpg" },
    { path: "./res/2.jpg", name: "./res/2.jpg" },
    { path: "./res/2.mp4", name: "./res/2.mp4" },
  ]);
});
App.listen(3000);
