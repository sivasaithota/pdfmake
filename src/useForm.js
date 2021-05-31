import { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
const axios = require('axios');
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    batchDate: '',
    batcherName: '',
    batchNumber: '',
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
    return <Redirect to="/images.pdf"/>
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
