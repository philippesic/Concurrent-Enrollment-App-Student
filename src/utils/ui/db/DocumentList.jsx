import {ObjectInspector} from '../ObjectInspector'

export default function DocumentList({documents}) {

  if(!documents) {
    return <div className='text-muted'>Select a collection</div>
  }
  if(documents.length === 0) {
    return <div className='text-muted'>No Documents</div>
  }
  
  return (
    <>
      <div className='text-muted'>Documents:</div>
      <ObjectInspector data={documents}/>
    </>
  )
}
