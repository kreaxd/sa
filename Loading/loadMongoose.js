module.exports = (mongoose, auth) => mongoose.connect("mongodb+srv://mazee1:maze12345@cluster0.w6u4p.mongodb.net/revoliamod?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("Mongoose bağlandı!\n"+ mongoose.connections[0]._connectionString)).catch(err => console.log(err.message));