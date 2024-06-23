import React, { useState } from 'react';
import axios from 'axios';
import Sasilogo from '../../asset/logo/sasi-icon.png';
import Notification from '../../component/sasi/Notification';
import { TextField, Button, Grid, Typography } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phoneNumber: '',
    emailSubject: '',
    message: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/send-email', formData);
      if (response.data.success) {
        setNotification({ message: 'Email sent successfully!', type: 'success' });
      } else {
        setNotification({ message: 'Failed to send email.', type: 'error' });
      }
    } catch (error) {
      console.error(error);
      setNotification({ message: 'An error occurred. Please try again later.', type: 'error' });
    }
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8 px-4 md:px-20">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} className="text-center">
          <img className="w-24 mb-4 mx-auto" src={Sasilogo} alt="SASI Logo" />
          <Typography variant="h4" className="font-bold mb-4"
          style={{fontFamily: 'DM Sans', marginBottom: '10px'}}
          >
            Get in touch with us
          </Typography>
          <Typography variant="body1 text-[#777777]">
            Have something you want to discuss on? <br />
            Use the hashtag #j_joshiverse on Twitter <br />
            or send a message from the contact form.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="fullname"
              name="fullname"
              label="Full Name"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <TextField
              margin="dense"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <TextField
              margin="dense"
              id="emailSubject"
              name="emailSubject"
              label="Subject"
              type="text"
              fullWidth
              variant="outlined"
              value={formData.emailSubject}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <TextField
              margin="dense"
              id="message"
              name="message"
              label="Message"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="mb-4"
            />
            <Button
              style={{ backgroundColor: '#e32c2c', color: '#fff' }}
              fullWidth
              variant="contained"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </Grid>
      </Grid>
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

export default Contact;
