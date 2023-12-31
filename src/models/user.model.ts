import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    address: { type: String },
    dateOfBirth: { type: String },
    walletAddress: { type: String },
    age: { type: Number },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User