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
            name='batchDate'
            value={values.batchDate}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Batcher Name</label>
          <input
            className='form-input'
            type='email'
            name='batcherName'
            value={values.batcherName}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Order Number</label>
          <input
            className='form-input'
            type='text'
            name='orderNumber'
            value={values.orderNumber}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Customer</label>
          <input
            className='form-input'
            type='text'
            name='customer'
            value={values.customer}
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
            name='batchStartTime'
            value={values.batchStartTime}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Recipe Code</label>
          <input
            className='form-input'
            type='select'
            name='recipeCode'
            value={values.recipeCode}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Site</label>
          <input
            className='form-input'
            type='text'
            name='site'
            value={values.site}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Truck Number</label>
          <input
            className='form-input'
            type='text'
            name='truckNumber'
            value={values.truckNumber}
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
            name='truckDriver'
            value={values.truckDriver}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Ordered Qty</label>
          <input
            className='form-input'
            type='text'
            name='orderQty'
            value={values.orderQty}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'> Production Qty</label>
          <input
            className='form-input'
            type='text'
            name='productionQty'
            value={values.productionQty}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
      
        </div>
        <div style={{ display: "flex" }}>
        <div className='form-inputs'>
          <label className='form-label'>With This Load</label>
          <input
            className='form-input'
            type='text'
            name='withLoad'
            value={values.withLoad}
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
