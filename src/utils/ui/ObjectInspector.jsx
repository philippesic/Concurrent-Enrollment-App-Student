import {ObjectInspector as Inspector} from 'react-inspector';
import Stack from 'react-bootstrap/Stack'
import ListGroup from 'react-bootstrap/ListGroup';
export function ObjectInspector(props) {

  const createComponent = (item, index) => (
    <ListGroup.Item key={index} className='my-0 py-0'>
      <Stack direction='horizontal'
        className='align-items-start'
        style={{ wordBreak: 'break-word'}}>
        <div className='mb-1 text-center' 
          style={{fontSize:'0.9rem', minWidth: '2rem'}}>[{index}] 
        </div>
        <div className='mt-1' >
          <ObjectInspector key={index} data={item}/>
        </div>
      </Stack>
    </ListGroup.Item>
  )
  /*Improve inspecting arrays*/
  if (props.data && Array.isArray(props.data)) {
    return (
      <ListGroup variant='flush'>
        {props.data.map(createComponent)}
      </ListGroup>
    );
  }
  
  return (
    <>
      {props.data && <Inspector {...props}/>}
    </>
  )
}

export default ObjectInspector;