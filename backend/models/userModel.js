const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.singup = async function(email, password){

    const extists = await this.findOne({email})

    if(extists){
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({email, password: hash})

    return user
}

module.exports = mongoose.model('User', userSchema)