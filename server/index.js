const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

const db = require("./models");

// const uri = process.env.ATLAS_URI;

const uri = "mongodb+srv://gmckinsey:Cdhun649Gkqk2vaH@cluster0.u0ey4.mongodb.net/user-test?retryWrites=true&w=majoritysecret=fe3rgrewsdtsdfgf"

db.mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

//Routes
require('./routes/authRoutes')(app);
require('./routes/userRoutes')(app);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the application." });
  });

app.listen(port, () => {
    console.log(`Server is running on port: ${port} Uri: ${uri}`);
});