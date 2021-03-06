const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: 'Hello DCTBoard!'});
});

const port = process.env.PORT || 18080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});