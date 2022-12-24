
const ProductModel = require('../models/productModel')


const createProduct = async (req,res)=>{
      let create = req.body
      let createP = await ProductModel.create(create)

      res.status(200).send({store:createP})
}


module.exports.createProduct = createProduct