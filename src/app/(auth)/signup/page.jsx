'use client';

import { useState } from 'react'; 
import { useForm } from 'react-hook-form'; 

const TextField = ({ label, ...inputProps }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <label style={{ marginRight: '10px' }}>{label}:</label>
      <input
        {...inputProps} 
        style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />

    </div>
  );
};


function Page() {

  const { register, handleSubmit, formState: { errors } } = useForm({

  });



  // Your submit handler function
  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className='bg-white'>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>


        <TextField
          label="User Name"

          {...register('userName', {
            required: 'User name is required', 
            minLength: {
              value: 3,
              message: 'Minimum length is 3 characters',
            },
          })}
        />
        {/* Display validation errors */}
        {errors.userName && <p style={{ color: 'red' }}>{errors.userName.message}</p>}

        {/* Add other fields here similarly */}
        {/* <TextField label="Email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} /> */}
        {/* {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>} */}


      </form>
    </div>
  );
}

export default Page;
