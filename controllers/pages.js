//Controllers
const product = require('../utils/apifetch')

const pages = {
    returnjson: async(req, res) => {
        let movie = req.params.title
        let info = await product.getFilm(movie)
        //template de views mas los parametros
        res.status(200).json(info)
    },
    about:(req, res) => {
        let msj = "Esta es la about desde PUG"
        let title = "About"
        res.status(200).render("template",{msj,title})
    },
}

module.exports = pages