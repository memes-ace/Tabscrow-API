const express = require('express');
const Property = require('../models/Property');
const router = express.Router();

// Create a new property listing
router.post('/', async (req, res) => {
    const property = new Property(req.body);
    try {
        await property.save();
        res.status(201).send(property);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get all properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).send(properties);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Get a property by ID
router.get('/:id', async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).send();
        }
        res.status(200).send(property);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
