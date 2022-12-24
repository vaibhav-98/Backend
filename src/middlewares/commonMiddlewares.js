
const UserModel = require("../models/userModel");
const ProductModel = require("../models/productModel")



const validateHeader = (req, res, next) => {

      if (req.headers.isfreeappuser) {
            req.isFreeAppUser = req.headers.isfreeappuser;
            next()
      } else {
            res.send({ Error: "missing a mandatory header" })
      }
}



const mid2 = async (req, res, next) => {
      let data = req.body
      let userId = data.userId
      let productId = data.productId

      let savedUserData = await UserModel.findById(userId)
      let savedProductData = await ProductModel.findById(productId)

      if (savedUserData && savedProductData) {
            next()
      }else if(!savedUserData && !savedProductData){
            res.status(401).send({msg:"userId & productId is wrong"})
      }else if(!savedUserData){
            res.status(401).send({msg:"userId is wrong"})
      }else if(!savedProductData){
            res.status(401).send({msg:"productId is wrong"})
      }

}

module.exports.validateHeader = validateHeader
module.exports.mid2 = mid2