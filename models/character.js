var mongoose = require('mongoose');

var aCharSheet = new mongoose.Schema({

    charName: {
        type: String,
        required: true
    },
    charOwner: {
        type: String,
        required: true
    },
    vidDate: {
        type: String,
        required: true
    },
    videoNote: {
        type: String,
        required: true
    },
    vidPicUrl: {
        type: String,
        required: true
    }


});



var charSheet = mongoose.model('charSheet', aCharSheet);

module.exports = charSheet;
