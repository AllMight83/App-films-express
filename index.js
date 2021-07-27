const app = express()
const port = 3000




// Motor de vistar
app.set('view engine', 'pug');
app.set('views','./views');


app.use(express.json());

app.use('/',pages); //Para las vistas de las web: devuelve vista
app.use('/api',products); // Para la Api: devuelve objeto; products es el router;


//app.use('/otracosa',pages)

app.get('*', (req, res) => {
    res.status(404).send("Sorry...404 Not found");
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})