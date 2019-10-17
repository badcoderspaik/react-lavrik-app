import React from 'react';

export default function (props) {
  return(
    <div>Post #nz {props.match.params.id}</div>
  );
}