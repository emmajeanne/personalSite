const express= require("express");

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({
  extended: true
}));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, () => {
  console.log(`up on port ${port}`)
});
