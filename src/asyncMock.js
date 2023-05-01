const products =[
    {
        id:"1",
        name:"Nikon D3500",
        price:582.880,
        img:"https://www.nikon.com.ar/uploads/camaras/large/20230410-043740_1.png",
        stock: 50,
        description:"Apertura máxima del lente: f/3.5-5.6 - Lentes incluidos: Nikkor AF-P DX 18-55mm f/3.5-5.6G VR",

    },
    {
        id:"2",
        name:"Canon EOS M50",
        price:459.999,
        img:"https://http2.mlstatic.com/D_NQ_NP_636123-MLA46518818047_062021-O.webp",
        stock: 50,
        description:"",

    },
    {
        id:"3",
        name:"Sony Alpha 7S III",
        price: 1.719999,
        img:"https://http2.mlstatic.com/D_NQ_NP_778917-MLA45061832342_032021-O.webp",
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
