const jwt = require('jsonwebtoken');

// 1. Data you want to include in the JWT
const payload = {
  userId: 123,
  username: 'KalvianCoder'
};

// 2. Your secret key (KEEP THIS SECRET!)
const secretKey = 'Tanishq2006&'; // REPLACE THIS!

// 3. Create (encrypt) the JWT
const token = jwt.sign(payload, secretKey, { algorithm: 'HS256' });
console.log('Generated JWT:', token);

// 4. Verify (decrypt) the JWT
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error('JWT Verification Failed:', err);
  } else {
    console.log('Decoded Data:', decoded);
  }
});