module.exports = (mongoose, auth) => mongoose.connect("mongodb+srv://ibi:123123aa@cluster0.t03sv.mongodb.net/favelaaa?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(console.log("Mongoose bağlandı!\n")).catch(err => console.log(err.message)); // + mongoose.connections[0]._connectionString