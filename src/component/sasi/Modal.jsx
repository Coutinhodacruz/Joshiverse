import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Notification from '../../component/sasi/Notification'; // Import the Notification component

// Load Flutterwave script dynamically
const loadFlutterwaveScript = (callback) => {
  const script = document.createElement('script');
  script.src = 'https://checkout.flutterwave.com/v3.js';
  script.async = true;
  script.onload = callback;
  document.body.appendChild(script);
};

const Modal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('NGN'); // Default to Naira
  const [notification, setNotification] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    loadFlutterwaveScript(() => {
      console.log('Flutterwave script loaded');
    });
  }, []);

  const handlePayment = () => {
    if (window.FlutterwaveCheckout) {
      window.FlutterwaveCheckout({
        public_key: 'FLWPUBK_TEST-31833835d1a88832ee90b204bbe72f42-X',
        tx_ref: Date.now().toString(),
        amount: parseFloat(amount.replace(/,/g, '')),
        currency: currency,
        payment_options: 'card, banktransfer, ussd',
        customer: {
          email: email,
          name: name,
        },
        callback: (data) => {
          setNotification({ message: 'Payment successful. Transaction reference: ' + data.transaction_id, type: 'success' });
          onClose(); // Close the modal after payment
        },
        onclose: () => {
          setNotification({ message: 'Transaction was not completed, window closed.', type: 'error' });
        },
        customizations: {
          title: 'Donation',
          description: 'Support our cause',
          logo: 'https://res.cloudinary.com/dpnw05tbx/image/upload/v1718525380/myfolder/sasi-icon_iprfz0.png', // Replace with your logo URL
        },
      });
    } else {
      setNotification({ message: 'Flutterwave script not loaded. Please try again later.', type: 'error' });
    }
  };

  const formatAmount = (value) => {
    const numberValue = value.replace(/\D/g, '');
    return numberValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handleAmountChange = (event) => {
    const formattedAmount = formatAmount(event.target.value);
    setAmount(formattedAmount);
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div>
      <Dialog open={isOpen} onClose={onClose}>
        <DialogTitle>Donate</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="dense"
              id="amount"
              label="Amount"
              type="text"
              fullWidth
              variant="standard"
              value={amount}
              onChange={handleAmountChange}
            />
            <TextField
              margin="dense"
              id="currency"
              label="Currency"
              select
              fullWidth
              variant="standard"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              SelectProps={{
                native: true,
              }}
            >
              <option value="NGN">Naira (NGN)</option>
              <option value="USD">Dollar (USD)</option>
              <option value="GBP">Pounds (GBP)</option>
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
          <Button
            onClick={handlePayment}
            color="primary"
            variant="contained"
            style={{ backgroundColor: '#e32c2c', color: '#fff' }}
          >
            Proceed to Pay
          </Button>
        </DialogActions>
      </Dialog>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
    </div>
  );
};

export default Modal;
