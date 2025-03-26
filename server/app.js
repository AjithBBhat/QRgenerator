const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const router = require('./routes')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyparser.json())
app.use(cors())
app.use(router)

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})



app.listen(port,()=>{
    console.log(`Server is running on PORT ${port}`);
    
})
