const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Comprehensive CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'https://localhost:3000',
      'http://127.0.0.1:3000',
      'https://127.0.0.1:3000'
    ];
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.path}`);
  console.log('Headers:', req.headers);
  next();
});

app.use(cors(corsOptions));
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  res.status(500).json({ 
    is_success: false, 
    error: 'Internal Server Error',
    details: err.message 
  });
});

function generateUserId(name = '22BCS11231_Harsh Raj Choudhary') {
  const today = new Date();
  return `${name}_${today.getDate()}${today.getMonth() + 1}${today.getFullYear()}`;
}

function processData(data) {
  console.log('Received data:', data);
  
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /[a-zA-Z]/.test(item));
  
  const highestAlphabet = alphabets.length > 0 
    ? [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)]
    : {};

  return {
    is_success: true,
    user_id: generateUserId(),
    email: 'harsh.raj.choudhary@example.com',
    roll_number: '22BCS11231',
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet
  };
}

// OPTIONS handler for preflight requests
app.options('/bfhI', cors(corsOptions));

app.get('/bfhI', (req, res) => {
  console.log('GET /bfhI called');
  res.json({ operation_code: 1 });
});

app.post('/bfhI', (req, res) => {
  console.log('POST /bfhI called');
  console.log('Request body:', req.body);
  
  try {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({ 
        is_success: false, 
        error: 'Invalid input. Expecting an array of data.' 
      });
    }
    
    const response = processData(data);
    res.json(response);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ 
      is_success: false, 
      error: error.message 
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS configured for localhost:3000`);
});

module.exports = app;
