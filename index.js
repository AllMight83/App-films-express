const express =  require('express');
const port = 3000
const router = require('./routes/allowedrouts')
require('dotenv').config();

const app = express()
// Motor de vistar
//app.set('view engine', 'pug');
//app.set('views','./views');


app.use(express.json());


app.use('/api',router); // Para la Api: devuelve objeto; products es el router;


//app.use('/otracosa',pages)

app.get('*', (req, res) => {
    res.status(404).send("Sorry...404 Not found");
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})