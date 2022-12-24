
const OrderModel = require('../models/orderModel')
const ProductModel = require('../models/productModel')
const UserModel = require('../models/userModel')

const createOrder = async (req,res)=>{
      
      let data = req.body
      let userId = data.userId
      let productId = data.productId
      let savedData;

      data.isfreeappuser = req.isFreeAppUser

      if(data.isfreeappuser == "true"){
            data.amount = 0;
            savedData = await OrderModel.create(data)
      }
      else{
            let savedProduct = await ProductModel.findById(productId).select({price:1, _id:0})

            let price = savedProduct.price

            let savedUser = await UserModel.findById(userId).select({balance:1,_id:0})

            let balance = savedUser.balance

            if(price <= balance){
                 await UserModel.findOneAndUpdate({_id:data.userId},{$inc: {balance: - price}})

                 data.amount = price
                 savedData = await OrderModel.create(data)
            }
            else {
                  res.status(500).send({Error: " balance is insufficient"})
            }
      }

      res.send({Show:savedData})     
}

module.exports.createOrder = createOrder