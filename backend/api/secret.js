// routes/secretRoutes.js
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model');

// Middleware to verify the JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, 'YOUR_SECRET_KEY', (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

router.post('/post', authenticateToken, async (req, res) => {
  try {
    const { secretMessage } = req.body;

    // Check if the user already posted a message
    const user = await User.findById(req.user.userId);
    if (user.secretMessage) {
      return res.status(400).json({ message: 'You can only post one secret message' });
    }

    // Update the user's secretMessage field
    user.secretMessage = secretMessage;
    await user.save();

    res.json({ message: 'Secret message posted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});



// Endpoint to get all secret messages
router.get('/messages', authenticateToken, async (req, res) => {
  try {
    // Fetch all users with a secretMessage
    const usersWithMessages = await User.find({ secretMessage: { $exists: true, $ne: null } });

    // Extract only the secretMessage from each user
    const messages = usersWithMessages.map((user) => ({ userId: user._id, message: user.secretMessage }));

    res.json(messages);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
