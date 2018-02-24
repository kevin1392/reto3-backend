var mongoose = require('mongoose');

var NoteSchema = mongoose.Schema({
    libro: String,
    autor: String,
    fechai:String,
    paginas:String,
    fechaf:String

}, {
    timestamps: true
});

module.exports = mongoose.model('Libros', NoteSchema);