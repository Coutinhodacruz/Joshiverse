import React, { useRef } from 'react'
import '../../scripts/GoogleSheet'

const Form = () => {
  const formRef = useRef(null);
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwo0tDi29EUX9LMn4GP7KH9ktoIaqORE578FGO9qDe4J9UKmXYLRUOEvTP6GuKkG6W2/exec';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => alert('Thank you! Your form is successfully submitted.'))
      .then(() => window.location.reload())
      .catch(error => console.error('Error!', error.message));
  };
  return (
    <div className='flex items-center justify-center gap-10 bg-[#990000] text-white py-10 my-20'>
      <div>
        <p className=' text-5xl'>Get in touch</p>
        <p className=' text-3xl'>Have something to discuss with me ?</p>
        <p className=' text-xl'>Send a message through this form?</p>
      </div>
      <form 
        ref={formRef} 
        name="contact-form" 
        onSubmit={handleSubmit}
        className='flex flex-col w-3/6 gap-y-4 '
      >
        <div className='flex flex-col gap-2'>
            <label>Name <span>(required)</span></label>
            <input className=' px-3 py-4 text-[#990000]' placeholder='John Doe' type='text' name='Name' required/>
        </div>
        <div className='flex flex-col gap-2'>
            <label>Email <span>(required)</span></label>
            <input className=' px-3 py-4 text-[#990000]' placeholder='johndoe@example.com' type='email' name='Email' required/>
        </div>
        <div className='flex flex-col gap-2'>
            <label>Other?</label>
            <textarea name='Others' className='px-3 py-4 text-[#990000]' rows='5'></textarea>
        </div>
        <input className='bg-white text-[#990000] px-3 py-4 w-2/4 flex items-center justify-center' type='submit' value='Submit' id='submit'/>
        
        

        
      </form>
    </div>
  )
}

export default Form
