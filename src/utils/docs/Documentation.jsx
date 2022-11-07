import '../docs/markdown.css';
import {useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Stack from 'react-bootstrap/Stack';
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export function Documentation() {
  const [page, setPage] = useState(<MarkdownDoc id={'/README'}/>)

  const select = (key) => {
    console.log(key)
    if (key) { setPage(<MarkdownDoc id={key}/>) }
  }
  return (
    <Stack>
      <Nav defaultActiveKey='/README' onSelect={select} className='mb-2 bg-light rounded-5'>
        <Nav.Link eventKey='/README'>React Template README</Nav.Link>
  
        <NavDropdown title="Hooks">
          <NavDropdown.Item eventKey='/useAuth'>
            useAuth
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='/useDatabase'>
            useDatabase
          </NavDropdown.Item>  
          <NavDropdown.Item eventKey='/useLocalStorage'>
            useLocalStorage //TODO
          </NavDropdown.Item>   
        </NavDropdown>

        <NavDropdown title="Utilities">
          <NavDropdown.Item eventKey='/Utilities'>
            Updating Components on Events
          </NavDropdown.Item>
          <NavDropdown.Item eventKey='/Utilities'>
            Making HTTP Requests
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="UI Components">
          <NavDropdown.Item eventKey='/Components'>ButtonModal</NavDropdown.Item>
          <NavDropdown.Item eventKey='/Components'>CardButton</NavDropdown.Item> 
          <NavDropdown.Item eventKey='/Components'>DBExplorer</NavDropdown.Item>
          <NavDropdown.Item eventKey='/Components'>ErrorAlert</NavDropdown.Item>
          <NavDropdown.Item eventKey='/Components'>Form</NavDropdown.Item>
          <NavDropdown.Item eventKey='/Components'>HoverShadow</NavDropdown.Item>
          <NavDropdown.Item eventKey='/Components'>Input</NavDropdown.Item>
          <NavDropdown.Item eventKey='/Components'>ObjectInspector</NavDropdown.Item>
          <NavDropdown.Item eventKey='/Components'>Thumbnail</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {page}
    </Stack>
  );
}
export default Documentation; 

export function MarkdownDoc({id}) {
  const [doc, setDoc] = useState();

  async function loadFile(filename) {
    const res = await fetch(filename);
    const text  = await res.text();
    setDoc(text)
  }

  useEffect(() => {
    console.log("ue: " + id)
    loadFile(`/src/utils/docs${id}.md`)
  }, [id])

  return (
  <>
    {doc && <ReactMarkdown 
    
    className='markdown-body' 
    linkTarget={'_blank'}
    remarkPlugins={[remarkGfm]} children={doc}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return  !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={docco}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
    }}          
    />}
  </>
  )
  
}