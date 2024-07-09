const express = require("express");
const db = require("./config/database");
const cors = require('cors');
const userGroupRoutes = require('./routes/userGroupRoutes');
// const UserGroupController = require("./routes/userGroupController");

const app = express();
app.use(cors());
const port = 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use('/api', userGroupRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/', (req, res) => {
  res.send('API is running...');
});

app.listen(port, () => {
  db();
  console.log(`Server running on http://localhost:${port}`);
});
