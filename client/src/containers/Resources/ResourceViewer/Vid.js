import React from 'react';

const Vid = (props) => {
  return (
    <div>
      <iframe
        title={props.title}
        width="560"
        height="315"
        src={props.url}
        frameBorder="0"
        // allow="autoplay encrypted-media"
        allowFullScreen="true">
      </iframe>
    </div>
  )
};

export default Vid;
