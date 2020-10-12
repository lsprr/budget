const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {
    port,
    mongoURI
} = require('./config.js')
const budgetsRouter = require('./routes/budgets')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB database is connected'))
    .catch((err) => console.error(err))

app.use('/api/budgets', budgetsRouter)


app.get('/', (req, res) => res.send('hello'))

app.listen(port, () => console.log('Express is running at port ' + port))