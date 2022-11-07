import {forwardRef} from "react";
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

export const Input = forwardRef((props, ref) => {

  var Components = {
    select: Form.Select,
    radio: Form.Check,
    checkbox: Form.Check,
    switch: Form.Check,
    range: Form.Range,
  }

  const {type, id, name, as, placeholder, maxlength, maxLength, children,
         className, floating, label, text, ...rest} = props;
  
  const Type = Components[type] ? Components[type] : Form.Control;

  let value = props.value;
  
  if(type == 'radio') {
    value = value ?? label;
  }
  else if(type === 'checkbox') {
    value = value ?? 'checked';
  }
  else if(type === 'switch') {
    value = value ?? 'on';
  }

  var input = (
    <Type
      ref={ref}
      as={type === 'textarea' ? 'textarea' : undefined}
      type={type ?? 'text'}
      name={name ?? id}
      id={id}
      placeholder={placeholder ?? " "}
      maxLength={maxLength ?? maxlength}
      label={label}
      value={value}
      {...rest}
    >
      {children}
    </Type>
  )

  return (
    <Form.Group
      className={className ? className : 'mb-3' } 

      as={ as }
    >
      {floating && (Type === Form.Control || Type === Form.Select) ? 
        <FloatingLabel label={label}>
          {input}
        </FloatingLabel> 
        : 
        <>      
          {Type !== Form.Check && label && 
            <Form.Label>{label}</Form.Label>
          }
          {input}   
        </>
      }
      {text && 
        <Form.Text>{text}</Form.Text>
      }
    </Form.Group>
  );
})

export default Input;