const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const lc = require('./controllers/ListController');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// ENDPOINTS
app.post('/api/taskList', lc.addTask);
app.get('/api/taskList', lc.getList);
app.delete('/api/tasklist/:id', lc.deleteComment);








const port= 5050;

app.listen(port, () => {
    console.log("listening on port", port)
})