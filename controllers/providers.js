/* Providers controller */

const Provider = require('../models/Provider');
const ObjectId = require('mongoose').Types.ObjectId;

function getProviders(req, res) {
    const filters = {}
    if (req.query.isPremium) {
        filters.isPremium = req.query.isPremium === "1";
    }
    if (req.query.category) {
        filters.category = req.query.category;
    }
    Provider.find(filters).then(function (providers) {
        res.send(providers)
    });
}

function createProvider(req, res) {
    const body = req.body;
    const provider = new Provider(body);
    Provider.create(provider).then(function (provider) {
        res.status(201).send(provider)
    })
    .catch(function (error) {
        res.status(400).send({"message": error.message, "type": error.name});
    });;
}

function updateProvider(request, response) {
    const id = request.params.id;
    const body = request.body;
    Provider.findOneAndUpdate({"_id": ObjectId(id)}, body)
    .then(function (provider) {
        response.status(200).send(provider);
    })
    .catch(function (error) {
        response.status(400).send({"message": error.message, "type": error.name});
    });
};

module.exports = {
    createProvider,
    updateProvider,
    getProviders
}