import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Notification from './Notification'; // Import Notification component

const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  backgroundColor: 'white',
  padding: theme.spacing(4),
  boxShadow: 24,
  borderRadius: '8px',
}));

const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const PartnerModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [notification, setNotification] = useState({
    message: '',
    type: '',
    visible: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form Data:', formData);
      await saveToGoogleSheets(formData);
      setNotification({
        message: 'Form submitted successfully!',
        type: 'success',
        visible: true,
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
      });
    } catch (error) {
      setNotification({
        message: 'Error submitting form. Please try again.',
        type: 'error',
        visible: true,
      });
    } finally {
      onClose();
    }
  };

  const saveToGoogleSheets = async (data) => {
    try {
      const formBody = Object.keys(data).map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      ).join('&');

      const response = await fetch('https://script.google.com/macros/s/AKfycbwo0tDi29EUX9LMn4GP7KH9ktoIaqORE578FGO9qDe4J9UKmXYLRUOEvTP6GuKkG6W2/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const result = await response.json();
      console.log('Google Sheets API response:', result);
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      throw error;
    }
  };

  return (
      <>
        <Modal open={isOpen} onClose={onClose}>
          <ModalBox>
            <Typography variant="h6" gutterBottom>
              Become a Partner
            </Typography>
            <form onSubmit={handleSubmit}>
              <FormField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
              />
              <FormField
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
              />
              {/* <FormField
              label="Organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              fullWidth
            /> */}
              {/* <FormField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
            /> */}
              <Box display="flex" justifyContent="flex-end">
                <Button onClick={onClose} color="secondary" style={{ marginRight: '8px' }}>
                  Cancel
                </Button>
                <Button
                    type="submit"
                    style={{ backgroundColor: '#e32c2c', color: '#fff' }}
                >
                  Submit
                </Button>
              </Box>
            </form>
          </ModalBox>
        </Modal>

        {notification.visible && (
            <Notification
                message={notification.message}
                type={notification.type}
                onClose={() => setNotification({ ...notification, visible: false })}
            />
        )}
      </>
  );
};

export default PartnerModal;
