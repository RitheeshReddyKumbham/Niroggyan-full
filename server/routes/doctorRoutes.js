const express = require('express');
const router = express.Router();
const doctors = require('../data/doctors.json');

// Get all doctors
router.get('/', (req, res) => {
    res.json(doctors);
});

// Get doctor by ID
router.get('/:id', (req, res) => {
    const doctor = doctors.find(d => d.id === req.params.id);
    if (doctor) {
        res.json(doctor);
    } else {
        res.status(404).json({ message: 'Doctor not found' });
    }
});

module.exports = router;
