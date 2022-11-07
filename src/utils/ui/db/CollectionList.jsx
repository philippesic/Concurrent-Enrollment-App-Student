import ListGroup from 'react-bootstrap/ListGroup';

export default function CollectionList({collections, db}) {

  if(!collections || collections.length === 0) {
    return <div className='text-muted'>No Collections</div>
  }
    
  return(
    <>
      <div className='text-muted'>Collections:</div>
      <ListGroup variant='flush'>
        {collections && collections.map((c, index) =>(
          <ListGroup.Item action 
            key={index}
            active={db.collection === c.name}
            onClick={()=>db.setCollection(c.name)}>
            - {c.name}
          </ListGroup.Item>
        ))}
      </ListGroup> 
    </>
  );
}
