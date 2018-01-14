import React from 'react'
import Pdf from './Pdf'

const ResourceViewer = (props) => {


  let renderResource = <p>loading resource ... </p>

  // if (props.format === 'aud') {
  //   return myResource

  // }

  // if (props.format === 'vid') {
  //   return myResource

  // }

  // if (props.format === 'doc') {
  //   return myResource

  // }

  if (props.format === 'pdf') {
    renderResource = <Pdf location={props.location} />
  }


  return (
    <div>
      {renderResource}
    </div>
  )
}

export default ResourceViewer