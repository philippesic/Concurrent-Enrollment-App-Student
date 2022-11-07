import {useState, useEffect} from 'react';
import DocumentList from './db/DocumentList'
import FilterTool from './db/FilterTool'
import ErrorAlert from './ErrorAlert'
import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'


export function DBExplorer({db, ...props}) {
  const [error, setError] = useState(null); 
  const [documents, setDocuments] = useState(null);
  const [filter, setFilter] = useState('');
  
  const applyFilter = async (json) => {
    try {
      const filter = json ? JSON.parse(json) : null
      const data = await db.findMany(filter);
      setDocuments(data);
    }
    catch(e) { setError(e) } // handle parse error
  }

  const reset = () => {
    setFilter('')
    setDocuments(null)
  }
  
  const fetchItems = async () => {
    reset();
    if(db.collection) {
      const docs = await db.fetchAll();
      setDocuments(docs);
    }
  }
  useEffect(() => {fetchItems()}, [db.collection]);
  
  useEffect(() => {db.dirty && fetchItems()}, [db.dirty]);
  
  useEffect(() => {setError(db.error)}, [db.error]);

  return (
    <Stack {...props}>
      <ErrorAlert error={error}/>
      <h5 className='mb-3'>Database: {db.database} {db.collection && "/ " + db.collection}</h5>
      {db.collection && <FilterTool filter={filter} setFilter={setFilter}
          applyFilter={applyFilter}/>}
      {documents && documents[0] && <div className='mb-2'><small>
        {Object.keys(documents[0]).map((key, i) => (
           <Badge bg='secondary' role='button' key={i} className='me-1'
             onClick={()=>{setFilter(`{ ${key}: 0 }`)}}>{key}</Badge>
        ))}
      </small></div>}
      <DocumentList documents={documents}/>
    </Stack> 
  )
}

export default DBExplorer