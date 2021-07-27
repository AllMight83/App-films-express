//Routing (enrutamiento);

const router = require('express').Router();
const pages = require('../controllers/pages')

//Endpoints
//copiado de app.js, cambiar por router.
router.get('/', pages.home)//metodo home
router.get('/about', pages.about)//metodo about...
router.get('/contact', pages.contact)
router.get('/location', pages.location)
router.get('/pictures/:id?', pages.pictures)
router.get('/products/:id?', pages.products)
//POST
router.post('/products', pages.createProduct)
//para no encontradas
//al llamar pages, las demas de app.js no funcionan
//router.get('*', pages.notFound)

module.exports = router