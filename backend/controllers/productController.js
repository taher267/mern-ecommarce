const Product = require("../models/productModel");


//Create Product
exports.createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    });
    // res.status(201).json({ message: "Alhamdu Lillah, Route is working" });
}

exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        message: "Alhamdu Lillah, Route is working",
        products
    });
}
exports.getProduct = async (req, res) => {
    const { id } = req.params;
    if (id.length !== 24) return errMessag(res);
    const product = await Product.findById(id);
    if (!product) return errMessag(res);

    res.status(200).json({
        message: "Alhamdu Lillah, Route is working",
        product
    });
}
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    if (id.length !== 24) return errMessag(res);

    let product = await Product.findById(id);

    if (!product) return errMessag(res);
    product = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true, useFindAndModify: false });
    res.status(200).json({
        message: "Alhamdu Lillah, Route is working",
        success: true,
        product
    });
}
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    if (id.length !== 24) return errMessag(res);

    const product = await Product.findById(id);

    if (!product) return errMessag(res);
    await product.remove();
    res.status(200).json({
        message: "Product has been deleted succefully",
        success: true
    });
}

function errMessag(res) {
    return res.status(404).json({
        success: false,
        message: "Product not found!",
    });
}