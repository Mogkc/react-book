const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema ({
    authors: {
        type: [String],
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;