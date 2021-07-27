//API Fetch

const fetch = require('node-fetch')

const product = {
    getAllProducts: async () => {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        return data
    },
    getProductsById: async (id) => {
        const res = await fetch('https://fakestoreapi.com/products/'+id)
        const data = await res.json()
        return [data]
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
    }
}
