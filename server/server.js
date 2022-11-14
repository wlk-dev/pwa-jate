const express = require('express');
const fs = require('fs');
const dir = '../client/dist';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
