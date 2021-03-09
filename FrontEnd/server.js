const express = require('express');
const app = express();
app.use(express.static('./dist/Giltreenews'));
app.post('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/Giltreenews/'}),
);
app.listen(process.env.PORT || 3000);