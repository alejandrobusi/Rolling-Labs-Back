const Purchase = require('../models/purchases')
//comm
const createPurchase = async( req,res ) => {
  
  try {
    const {name, lastName, email, address, dni, country, state, telephone, payDetail} = req.body

    const newPurchase = new Purchase({
      name,
      lastName,
      email,
      address,
      dni,
      country,
      state,
      telephone,
      payDetail,
    })
    
    await newPurchase.save()
    
    
    
    res.status(200).json(`ok`) 
    
  } catch (error) {
    
    return res.json(`something has failed. error : ${error}`)
    
  }
}

const getPurchase = async(req,res) => {

  const dni = req.params.dni
  
  const purchase = await Purchase.find({ dni: dni })
  
  return res.json(purchase)
}

const patchPurchase = async(req, res) => {

  const purchaseEdit = await Purchase.findByIdAndUpdate(req.params.id , req.body, { new: true })
  
    return res.json({ purchaseEdit }) 
}

module.exports = { createPurchase, getPurchase, patchPurchase } 