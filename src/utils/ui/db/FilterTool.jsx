import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Input from '../Input'

export default function FilterTool({filter, setFilter, applyFilter}) {
  
  const submit = (e) => {
    
    let json = filter.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([$_a-zA-Z0-9]+)(['"])?:/g, '$1"$3":');
    json = json.replaceAll("'", "\"");
    console.log(json)
    applyFilter(json)
  }  
  return (
    <Stack direction='horizontal' className='mb-1'>
      <div><b>Filter: </b></div>
      <Input className='col px-1' type='search' 
        placeholder="Example: {title: 'Back to the Future'}" 
        value={filter} onChange={e=>setFilter(e.target.value)}/>
      <Button onClick={submit}>Apply</Button>
    </Stack>
  )
}
