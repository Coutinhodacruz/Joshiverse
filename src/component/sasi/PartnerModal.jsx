import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    await saveToGoogleSheets(formData);
    onClose();
  };

  const saveToGoogleSheets = async (data) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("this is the response -->", response)
      console.log('Google Sheets API response:', result);
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
    }
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalBox>
        <Typography variant="h6" gutterBottom>
          Become a Partner
        </Typography>
        <form action='' onSubmit={handleSubmit}>
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
            onClick={handleSubmit}
             style={{ backgroundColor: '#e32c2c', color: '#fff' }}>
              Submit
            </Button>
          </Box>
        </form>
      </ModalBox>
    </Modal>
  );
};

export default PartnerModal;
