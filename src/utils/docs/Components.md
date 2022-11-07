
# UI Components
`react-bootstrap` comes with a bunch of useful components. The template includes additional UI components built upon react-bootstrap components. These components give you added features with less code to write. 

### react-bootstrap
#### [See Documentation for react-boostrap](https://react-bootstrap.github.io/components/alerts/)
 ```javascript
 import { Button } from 'react-bootstrap'
 ```


### `<ButtonModal>`
> Opens a modal dialog window using a button. This component simplfies writing code for the `react-bootstrap` `Modal` component ([doc](https://react-bootstrap.github.io/components/modal/)).

#### props:
- `label`- the text to show on the button
- `title` - the title shown at the top of the open modal

```javascript
import Modal from 'react-bootstrap/Modal'
import { ButtonModal } from '../utils'

export default function Example() {
  return (
    <ButtonModal label='Open Modal' title='Yay 🥳 Its working!'>
      <Modal.Body>
        Woohoo, you're reading this text in a modal!
      </Modal.Body>
    </ButtonModal>
  );
}
```
### `<CardButton>`
> Clickable card component with hover effects enabled. Default `Card` component ([doc](https://react-bootstrap.github.io/components/cards/)) from `react-bootstrap` does not have hover effects. 

```javascript
import { CardButton } from '../utils'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'

export default function Example({item}) {
  const navigate = useNavigate();
  
  return (
    <CardButton style={{width: '320px'}} 
      onClick={ () => navigate('/item/' + item ._id) }>
      <Card.Body>
        <Card.Title>Title</Card.Title>
        <Card.Text>
          Body Text
        </Card.Text>
      </Card.Body>
    </CardButton>   
  );
}
```

### `<DBExplorer>`
> This component allows you to explore a database collection. This is mainly used for debugging and testing your app. 
#### props:

- `db` - The connected database and collection

```javascript
import { Hooks, DBExplorer } from '../utils'

export default function Example() {
  const db = Hooks.useDatabase('team_x', 'my_collection')
  
  return (
    <DBExplorer className='shadow p-3' db={db}/>
  );
}
```

### `<ErrorAlert>`
> Displays a dismissable alert when an error happens


#### props:
- `error` - the error object

```javascript
import { ErrorAlert, Hooks } from '../utils'

export default function Example() {
  const db = Hooks.useDatabase('team_x', 'my_collection')
  
  return (
    <ErrorAlert error={db.error} />
  );
}
```

### `<Form>`
> Simplifies handling form data on submit. Getting data from the default `react-bootstrap` `<Form>` component ([doc](https://react-bootstrap.github.io/forms/overview/)) requires a lot of code to get the values from the form.

#### props:
- `onSubmit` - the callback function to handle form data submission, which will receive a form data object as its first argument. The form data object will have all values of child `<Input>` components with the `id` as its keys. The callback function will also receive a reference to the form DOM object as a second argument, allowing you to easily reset the form.

```javascript
import { Form, Input } from '../utils'
import Button from 'react-bootstrap/Button'

export default function Example() {
  const submit = (data, form) => {
    console.log(data);
    form.reset();
  }
  return (
    <Form onSubmit={submit}>
      <Input type='text' label='First name:' id='firstName'/>
      <Input type='text' label='Last name:' id='lastName'/>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```
### `<HoverShadow>`
> Applies a hover shadow effect on child component

```javascript
import { HoverShadow } from '../utils'

export default function Example() {
  return (
     <HoverShadow>
       <div className='p-3'>Test</div>
     </HoverShadow>
  );
}
```

### `<Input>`
> Create input fields for forms. The <Input> component included in this template can create many different types of inputs depending on the `type` property that you give it. 

#### props:
- `type` - can be any of the following: `email`, `text`, `textarea`, `password`, `radio`, `checkbox`, `switch`, `select`, `color`, `date`, `time`, `datetime-local`, `month`, `week`, `number`, `file`, `range`, `search`, `url`
- `label` - a short text that describes the input field
- `id` - IMPORTANT: You will need this id as a key to get the value from the form data.
- `placeholder` - text shown in the input field when empty
- `required` - Sets the input as a required field. Will prompt the user and will not allow the user to submit
- `floating` - Moves the label inside the field for text and numberic inputs. Does not work for inputs such as radio buttons and checkboxes.
- `text` - A long text description that will be displayed below the input
```javascript
import { Form, Input } from '../utils'
import Button from 'react-bootstrap/Button'

export default function Example() {
  const submit = (data, form) => {
    console.log(data);
    form.reset();
  }
  return (
    <Form onSubmit={submit}>
      <Input type='text' label='First name:' id='firstName'/>
      <Input type='text' label='Last name:' id='lastName'/>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```
### `<ObjectInspector>`
> The object inspector allows you to inspect JavaScript object and arrays as a component within your app. The component will display objects in a expandable and collapsible tree view allowing you to explore its hierarchy and structure. This is useful for debugging and can be used when `console.log()` may not be convenient or ideal. 

#### props:

- `data` - The object you want to inspect

```javascript
import { ObjectInspector } from '../utils'

export default function Example() {
  const data = {x: 'Hello', y: 'World', z: [1, 2, 3, 4]}
  
  return (
    <ObjectInspector data={data}/>
  );
}
```

### `<Thumbnail>`
> This component allows you to resize an image while maintaining the original aspect ratio of the image. The `<Image>` component is difficult to resize.

#### props:

- `height` - The image will be downsized to the maximum height in pixels specified.

```javascript
import { Thumbnail } from '../utils'

export default function Example() {  
  return (
    <Thumbnail src={'http://server.com/picture.png'} height={'180px'}/>
  );
}
```
