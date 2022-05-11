const { Schema, model } = require("mongoose");

module.exports = model("Product", Schema({
    name: {
        type: String,
        required: [true, "Please enter a product name!"]
    },
    description: {
        type: String,
        required: [true, "Please enter a product description!"]
    },
    price: {
        type: Number,
        required: [true, "Please enter product price!"],
        maxLength: [8, "Price con't more than 8 digits!"]
    },
    rating: {
        type: Number,
        default: 0
    },
    images: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    category: {
        type: String,
        required: [true, "Please enter product category!"]
    },
    stock: {
        type: Number,
        required: [true, "Please enter product Stock!"],
        maxLength: [4, "Stock con't more than 4 chars!"],
        default: 1
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: { type: String, required: true },
            rating: { type: Number, required: true },
            comment: { type: String, required: true }
        }
    ],
    // createdAt: {
    //     type: Date,
    //     default: Date.now
    // }
}, {
    timestamps: true
}))