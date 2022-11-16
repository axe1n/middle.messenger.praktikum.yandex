const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('.index.hbs'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
