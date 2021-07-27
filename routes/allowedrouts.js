//Routing (enrutamiento);

const router = require('express').Router();
const pages = require('../controllers/pages')

//Endpoints
//copiado de app.js, cambiar por router.


// router.get('/pictures/:id?', pages.pictures)
// router.get('/products/:id?', pages.products)


router.get('/film/:title', pages.returnjson); //Pages tomado del controlador
router.post('/film', );
router.put('/film', );
router.delete('/film', );



//POST
// router.post('/products', pages.createProduct)



//para no encontradas
//al llamar pages, las demas de app.js no funcionan
//router.get('*', pages.notFound)

module.exports = router //