//Controllers
const product = require('../utils/apifetch')

const pages = {
    returnjson: async(req, res) => {
        let movie = req.params.title
        let info = await product.getFilm(movie)
        //template de views mas los parametros
        res.status(200).json(info)
    },
    newFilm:async (req, res) => {
        console.log("Se ha realizado el POST satisfactoriamente");
        res.status(200).send(req.body)
    },
    modifyFilm:(req, res) => {
        console.log("Se ha realizado el PUT");
        res.status(200).send(req.body)
    },
    deleteFilm:(req, res) => {
        console.log(req.query)
        res.status(200).send(req.body)
    },
}

module.exports = pages