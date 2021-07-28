//Routing (enrutamiento);

const router = require('express').Router();
const pages = require('../controllers/pages')

//Endpoints
//copiado de app.js, cambiar por router.


router.get('/film/:title', pages.returnjson); //Pages tomado del controlador
router.post('/film', pages.newFilm);
router.put('/film', pages.modifyFilm);
router.delete('/film', pages.deleteFilm);

//POST
// router.post('/products', pages.createProduct)

module.exports = router //