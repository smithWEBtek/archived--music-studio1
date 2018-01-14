import React from 'react';

const ResourceViewer = (props) => {

  let viewResource = props.resource

  if (props.format === 'aud') {
    return viewResource

  }

  if (props.format === 'vid') {
    return viewResource

  }

  if (props.format === 'doc') {
    return viewResource

  }

  if (props.format === 'pdf') {
    return viewResource

  }

  return (
    <div>
      {viewResource}
    </div>
  );
};

export default ResourceViewer;