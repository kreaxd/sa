const mongoose = require("mongoose");

const rollog = mongoose.Schema({
    user: String, 
    roller: Array
});

module.exports = mongoose.model("rollog", rollog);