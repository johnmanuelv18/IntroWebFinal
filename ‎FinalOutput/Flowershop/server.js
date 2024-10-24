// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/cookies_shop')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'flowershop', 'public')));

// Session management
app.use(session({
    secret: 'your_session_secret', // Replace with a strong secret
    resave: false,
    saveUninitialized: true,
}));

// Define a route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'flowershop', 'public', 'profile.html'));
});

// User Schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User ', userSchema); // Fixed model name

// Contact Schema
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema); // Model for contact submissions

// Registration Route
app.post('/create_account', async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser  = new User({
            firstName: first_name,
            lastName: last_name,
            email,
            password: hashedPassword
        });
        await newUser .save();
        req.session.userId = newUser ._id; // Store user ID in session
        res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating account' });
    }
});
// Order Schema
const orderSchema = new mongoose.Schema({
    items: { type: Array, required: true },
    paymentMethod: { type: String, required: true },
    orderId: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);

// Order Route
app.post('/order', async (req, res) => {
    const { items, paymentMethod, orderId } = req.body;

    try {
        const newOrder = new Order({
            items,
            paymentMethod,
            orderId
        });

        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully!' });
    } catch (error) {
        console.error('Error placing order:', error.message);
        res.status(500).json({ message: 'Error placing order', error: error.message });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User  not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        req.session.userId = user._id; // Store user ID in session
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Contact Route
app.post('/contact', async (req, res) => {
    console.log('Received contact form data:', req.body); // Log the received data
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({
            name,
            email,
            message
        });
        await newContact.save();
        res.status(201).json({ message: 'Contact message saved successfully!' });
    } catch (error) {
        console.error('Error saving contact message:', error.message); // Log the error message
        res.status(500).json({ message: 'Error saving contact message', error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});