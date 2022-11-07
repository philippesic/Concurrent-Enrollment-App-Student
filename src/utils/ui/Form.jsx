import {forwardRef} from "react";
import RBForm from 'react-bootstrap/Form'

export const Form = forwardRef((props, ref) => {

  function getFormData(event) {
    event.preventDefault();
    const data = {};
    const formData = new FormData(event.target);
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  }
  
  const handleSubmit = (callback) => {
    const submit = (e)=>{
      const formData = getFormData(e);
      return callback ? callback(formData, e.target) : formData;
    }
    return submit;  
  }

  const {onSubmit, children, ...rest} = props;
  
  return (
    <RBForm ref={ref} onSubmit={handleSubmit(onSubmit)} {...rest}>
      {children}
    </RBForm>
  )
});

export default Form;