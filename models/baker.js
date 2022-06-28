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
        {toJSON: { virtuals: true}})
    },
    startDate: {
        type: Date, 
        required: true
    },
    bio: String,
}
// Model and Export
const Baker = mongoose.model('Baker', bakerSchema)

//Virtuals
bakerSchema.virtual('breads', {
    ref: 'Bread',
    localFiled:'_id',
    foreignField:'baker'
})

module.exports = Baker