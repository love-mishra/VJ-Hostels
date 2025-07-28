const express = require('express');
const router = express.Router();
const StudentModel = require('../models/StudentModel');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Find student by username
        const student = await StudentModel.findOne({ username });
        if (!student) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare password
        const isPasswordValid = await student.comparePassword(password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: student._id, username: student.username, role: student.role },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.json({
            token,
            user: {
                id: student._id,
                username: student.username,
                name: student.name,
                email: student.email,
                role: student.role
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;