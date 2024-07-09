const mongoose = require('mongoose');

const userGroupSchema = new mongoose.Schema({
    id: {
        type: String,
        // required: true
    },
    group_name: {
        type: String,
        // required: true
    },
    description: String,
    timeframes: [String],
    users: [String],
    profile: String,
    restrictions: [String],
    url: {
        type: String,
        // required: true
    }
});

module.exports = mongoose.model('UserGroup', userGroupSchema);
