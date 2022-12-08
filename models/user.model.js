const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    }

}, {timestamps: true});

module.exports = mongoose.model("User", userSchema)