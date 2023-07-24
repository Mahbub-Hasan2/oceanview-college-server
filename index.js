const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose').set('strictQuery', true);;
const cors = require('cors');
// const key = require('./config/keys.js');
const dotenv = require('dotenv');
const collegesRouter = require('./routes/colleges.js');

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));


app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        "http://127.0.0.1:5173",
        "https://oceanview-college.vercel.app",
        "http://oceanview-college.vercel.app",
    ],
    credentials: true,
    methods: 'GET,POST,PUT,DELETE,PATCH',
}));


app.get('/', (req, res) => {
  res.send('Hello Mahbub I Love You 🥰');
  // console.log(`${key}`)
});

app.use("/colleges", collegesRouter);


const port = process.env.PORT || 5000


// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@cluster0.i0z7qvl.mongodb.net/?retryWrites=true&w=majority`)
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER_NAME}:${process.env.MONGO_PASSWORD}@cluster0.sm0mt0b.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => app.listen(port, () => console.log(`Server started at port ${port}...`)))
  .catch(err => console.log(err))

