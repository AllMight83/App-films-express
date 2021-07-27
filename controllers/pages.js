//Controllers
const product = require('../utils/product')

const pages = {
    home:(req, res) => {
        let msj = "Esta es la home desde un mensaje"
        let title = "HOME"
        //template de views mas los parametros
        res.status(200).render("template",{msj,title})
    },
    about:(req, res) => {
        let msj = "Esta es la about desde PUG"
        let title = "About"
        res.status(200).render("template",{msj,title})
    },
}

module.exports = pages