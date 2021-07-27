//API Fetch

const fetch = require('node-fetch')
const API_KEY = '80be4bc9';


const product = {
 
    getFilm: async (title) => {
        const res = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
        const data = await res.json()
        return data
    },
    addProduct: async (product) => {
        const res = await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        const data = await res.json()
        return data
    },


}
module.exports = product


