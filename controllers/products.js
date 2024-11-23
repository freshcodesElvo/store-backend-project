const get_all_products_static = async(req, res) =>{
    throw new Error("testing async errors")
    res.status(200).json({msg: `products testing route static`})
}

const get_all_products = async(req, res) =>{
    res.status(200).json({msg: `products testing route`})
}

module.exports ={get_all_products_static, get_all_products}