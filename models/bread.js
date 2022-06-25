//  Require Mongoose
const mongoose =require ('mongoose')
// creating shorthand for the schema constructor
const {Schema} = mongoose
//New Schema
const breadSchema = new Schema ({
  name: {type: String, required: true },
  hasGluten: Boolean,
  image: {type: String, default:'http://placehold.it/500x500.png'},
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
}) 

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread