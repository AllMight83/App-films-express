


// Motor de vistar
//app.set('view engine', 'pug');
//app.set('views','./views');




//app.use('/otracosa',pages)

app.get('*', (req, res) => {
    res.status(404).send("Sorry...404 Not found");
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})