import React from 'react';

const Vid = (props) => {
  return (
    <div>
      <iframe width="560" height="315"
        src={props.url}
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
  )
};

export default Vid;
