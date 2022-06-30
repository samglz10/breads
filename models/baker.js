// Require Mongoose and schema
const mongoose =require('mongoose')
const { Schema } = mongoose
const Bread  =require ('./bread')

// Schema
const bakerSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler','Ross', 'Phoebe'],
        toJSON: { virtuals: true }
    },
    startDate: {
        type: Date, 
        required: true
    },
    bio: String,
})
// Model and Export
const Baker = mongoose.model('Baker', bakerSchema)

// hooks 
bakerSchema.post('findOneAndDelete', function() {
    Bread.deleteMany({ baker: this._conditions._id })
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
  })
         
//Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField:'_id',
    foreignField:'baker'
})

module.exports = Baker