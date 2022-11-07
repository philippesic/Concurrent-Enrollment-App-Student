import Alert from 'react-bootstrap/Alert';
import {useEffect, useState} from 'react'
import {ObjectInspector} from 'react-inspector';

export function ErrorAlert({error}) {
  const [show, setShow] = useState(null);

  useEffect(()=>{
    if (error) {
      setShow(true);
    }
  },[error]);

  return (
    <>
    {error && show && 
      <Alert variant="danger" 
        onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{error?.name} </Alert.Heading>
        <p>{error.message}</p>
      </Alert>
    }
    </>
  )
} 

export default ErrorAlert;