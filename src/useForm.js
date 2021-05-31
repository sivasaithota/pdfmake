import { useState, useEffect } from 'react';
const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    batchDate: '',
    batcherName: '',
    orderNumber: '',
    customer: '',
    batchStartTime: '',
    recipeCode: '',
    site: '',
    truckNumber: '',
    truckDriver: '',
    orderQty: '',
    productionQty: '',
    withLoad: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    axios.post('/getPDF',values).then(response => {
      console.log(response);
    }).catch(error =>{
      console.log(error);
    })
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
