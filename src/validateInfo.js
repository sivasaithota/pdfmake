export default function validateInfo(values) {
  let errors = {};

  if (!values.batchDate.trim()) {
    errors.batchDate = 'required';
  }
   if (!values.truckNumber) {
    errors.truckNumber = 'Required';
  }

  if (!values.batcherName) {
    errors.batcherName = 'Required';
  } 
   if (!values.batchStartTime){
    errors.batchStartTime = 'Required';
  }
  if (!values.orderNumber) {
    errors.orderNumber = 'Required';
  } 
   if (values.customer) {
    errors.customer = 'Required';
  }

  if (!values.recipeCode) {
    errors.recipeCode = 'Required';
  } 
  if (!values.site) {
    errors.site = 'Required';
  }
  if (!values.truckDriver) {
    errors.truckDriver = 'Required';
  }
  if (!values.orderQty) {
    errors.orderQty = 'Required';
  }
  if (!values.productionQty) {
    errors.productionQty = 'Required';
  }
  if (!values.withLoad) {
    errors.withLoad = 'Required';
  }
  return errors;
}
