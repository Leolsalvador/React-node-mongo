const mongoose = require('mongoose')

const dbConfig = 'mongodb+srv://leolsalvador:seguranca@cluster0.viuvgqy.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) 

module.exports = connection;