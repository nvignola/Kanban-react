import React from 'react';
import Note from './Note';

// Import https://www.ietf.org/rfc/rfc4122.txt node module to generate uuid.v4


export default ({notes, onDelete=() => {}}) => (
  <ul>{notes.map(({id, task}) =>
    <li key={id}>
      <Note
        onDelete={onDelete.bind(null, id)}
        task={task} />
    </li>
  )}</ul>
)
