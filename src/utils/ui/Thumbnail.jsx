import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export function Thumbnail ({height, className, ...props}) {
  height = height ? height : '250px';
  
  return (
    <Row style={{height: `${parseInt(height, 10)}px`}}>
      <Col className='my-auto' >
        {props.src ? 
          <Image fluid
            style={{maxHeight: height}}
            className={'m-auto d-block shadow ' + className}
            {...props}
          /> 
          :
          <div className='text-center text-muted'>Image unavailable.</div>
        }
      </Col>
    </Row>
  )
}

export default Thumbnail;