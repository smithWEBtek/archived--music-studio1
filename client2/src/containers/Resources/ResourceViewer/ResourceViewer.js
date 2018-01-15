import React from 'react'
import Pdf from './Pdf'
import Vid from './Vid'
import Aud from './Aud'
import Aux from '../../../hoc/Aux/Aux'

const ResourceViewer = (props) => {


  let renderResource = <p>This resource has not been created yet. </p>

  if (props.resource.format === 'pdf') {
    renderResource = <Pdf url={props.resource.url} />
  }

  if (props.resource.format === 'vid') {
    renderResource = <Vid url={props.resource.url} />
  }

  if (props.resource.format === 'aud') {
    renderResource = (
      <Aux>
        <hr />
        <h4>{props.resource.title}</h4>
        <Aud resource={props.resource} />
      </Aux>
    )
  }

  return (
    <div>
      {renderResource}
    </div>
  )
}

export default ResourceViewer