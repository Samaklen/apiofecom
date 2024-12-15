const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userController = require('./controller/UserController');
const productController = require('./controller/ProductController');
const saleController = require('./controller/SaleController');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/uploads', express.static('uploads'));

// Add CSP header
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'none'; script-src 'self' https://vercel.live/_next-live/feedback/feedback.js");
  next();
});

app.use('/user', userController);
app.use('/product', productController);
app.use('/api/sale', saleController);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
