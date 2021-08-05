/* Pet model definition */

const mongoose  = require('mongoose');

const ProviderSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: [true, "Provider name is required!"]
    },
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    isPremium: {
        type: String,
        required: true
    }
});

const Provider = mongoose.model("provider", ProviderSchema);

module.exports = Provider