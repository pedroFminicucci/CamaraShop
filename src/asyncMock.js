const products =[
    {
        id:"1",
        name:"Nikon D3500",
        price:1000,
        img:"https://www.nikon.com.ar/uploads/camaras/large/20230410-043740_1.png",
        stock: 50,
        description:"",

    },
    {
        id:"2",
        name:"nikfon",
        price:1000,
        img:"https://http2.mlstatic.com/D_NQ_NP_762423-MLA31352533217_072019-O.webp",
        stock: 50,
        description:"",

    },
    {
        id:"3",
        name:"nikdon",
        price:1000,
        img:"https://d2r9epyceweg5n.cloudfront.net/stores/001/021/061/products/prod-2811-f032e57c7c6f34838b15631967448703-640-0.jpg",
        stock: 50,
        description:"",

    },

]

export const getProducts = ()=>{
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(products)
        },500)
    })
}

export const getProductsById = (productId)=>{
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}
