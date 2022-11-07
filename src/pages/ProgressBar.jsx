import React from 'react'
import {Button, ProgressBar} from 'react-bootstrap'

export default function ProgressBarComponent() {
  const [progress, setProgress] = React.useState(0)

  const makeProgress = () => {
    (progress === 100) ?
      setProgress(0)
      :
      setProgress(progress+10)  
  }
  
  return (
    <>
      <ProgressBar now={progress} />
      <Button onClick={makeProgress}>Click to Make Progress</Button>
    </>
  )
}