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
const path = require('path')

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB database is connected'))
    .catch((error) => console.error(error))

app.use('/api/budgets', budgetsRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/public'))
    app.get('*', (request, response) =>{
        response.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })
}

app.listen(port, () => console.log('Express is running at port ' + port))