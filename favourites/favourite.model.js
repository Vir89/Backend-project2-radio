const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, required: true },
    radioname: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.index({ username: 1, radioname: 1}, { unique: true });

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('Favourite', schema);