import React, { useRef, useState } from 'react';
import '../../scripts/GoogleSheet';
import Notification from '../../component/sasi/Notification'; // Adjust the import path as needed

const Form = () => {
  const formRef = useRef(null);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwo0tDi29EUX9LMn4GP7KH9ktoIaqORE578FGO9qDe4J9UKmXYLRUOEvTP6GuKkG6W2/exec';
  const [notification, setNotification] = useState({ message: '', type: '', visible: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => {
        setNotification({
          message: 'Thank you! Your form is successfully submitted.',
          type: 'success',
          visible: true
        });
        form.reset(); // Optionally reset the form
      })
      .catch(error => {
        setNotification({
          message: 'Error! Your form could not be submitted.',
          type: 'error',
          visible: true
        });
        console.error('Error!', error.message);
      });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, visible: false });
  };

  return (
    <div className='flex items-center justify-center gap-10 bg-[#990000] text-white py-10 my-20'>
      {notification.visible && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={handleCloseNotification}
        />
      )}
      <div>
        <p className='text-5xl'>Get in touch</p>
        <p className='text-3xl'>Have something to discuss with me?</p>
        <p className='text-xl'>Send a message through this form</p>
      </div>
      <form 
        ref={formRef} 
        name="contact-form" 
        onSubmit={handleSubmit}
        className='flex flex-col w-3/6 gap-y-4'
      >
        <div className='flex flex-col gap-2'>
          <label>Name <span>(required)</span></label>
          <input className='px-3 py-4 text-[#990000]' placeholder='John Doe' type='text' name='Name' required/>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Email <span>(required)</span></label>
          <input className='px-3 py-4 text-[#990000]' placeholder='johndoe@example.com' type='email' name='Email' required/>
        </div>
        <div className='flex flex-col gap-2'>
          <label>Other?</label>
          <textarea name='Others' className='px-3 py-4 text-[#990000]' rows='5'></textarea>
        </div>
        <input className='bg-white text-[#990000] px-3 py-4 w-2/4 flex items-center hover:bg-[#e25151] justify-center' type='submit' value='Submit' id='submit' style={{cursor: 'pointer'}}/>
      </form>
    </div>
  );
};

export default Form;
