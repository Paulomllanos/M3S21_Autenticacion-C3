const Product = require('../models/Product');
const User = require('../models/User')

const createProduct = async(req, res) => {
    try {
        const user = await User.findById(req.auth.id)
        console.log(user.isAdmin)
        if(!user.isAdmin){
            throw new Error('No tienes acceso para crear productos!')
        }

        const newProduct = new Product(req.body);
        await newProduct.save();
        res.json({success: true, message: "Se ha creado un nuevo producto", productId: newProduct._id})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


module.exports = createProduct;