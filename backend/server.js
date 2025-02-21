const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

const corsOptions = {
  origin: [
    'https://bajaj-frontend.loca.lt',  // Frontend localtunnel URL
    'http://localhost:3000',           // Local development
    '*'                                // Wildcard for testing
  ],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
app.use(express.json());

function generateUserId(name = '22BCS11231_Harsh Raj Choudhary') {
  const today = new Date();
  return `${name}_${today.getDate()}${today.getMonth() + 1}${today.getFullYear()}`;
}

function processData(data) {
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

app.get('/bfhI', (req, res) => {
  res.json({ operation_code: 1 });
});

app.post('/bfhI', (req, res) => {
  try {
    const { data } = req.body;
    const response = processData(data);
    res.json(response);
  } catch (error) {
    res.status(400).json({ 
      is_success: false, 
      error: error.message 
    });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
