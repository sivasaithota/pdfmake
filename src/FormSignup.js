import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

 
    
    
    
    
    

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Generate PDF
        </h1>
        <div style={{ display: "flex" }}>
        <div className='form-inputs'>
          <label className='form-label'>Batch Date</label>
          <input
            className='form-input'
            type='date'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Batcher Name,</label>
          <input
            className='form-input'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Order Number</label>
          <input
            className='form-input'
            type='text'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Customer</label>
          <input
            className='form-input'
            type='text'
            name='password2'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
    
        </div>
        </div>
        <div style={{ display: "flex" }}>
        <div className='form-inputs'>
          <label className='form-label'>Batch Start Time</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Recipe Code</label>
          <input
            className='form-input'
            type='select'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Site</label>
          <input
            className='form-input'
            type='text'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Truck Number</label>
          <input
            className='form-input'
            type='text'
            name='password2'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
    
        </div>
        </div>
        <div style={{ display: "flex" }}>
        <div className='form-inputs'>
          <label className='form-label'>Truck Driver</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Ordered Qty</label>
          <input
            className='form-input'
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'> Production Qty</label>
          <input
            className='form-input'
            type='text'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'> Manual Qty</label>
          <input
            className='form-input'
            type='text'
            name='password2'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
    
        </div>
        </div>
        <div style={{ display: "flex" }}>
        <div className='form-inputs'>
          <label className='form-label'>With This Load</label>
          <input
            className='form-input'
            type='text'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
       
        </div>
        <button className='form-input-btn' type='submit'>
          Create PDF
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
