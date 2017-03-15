import React from 'React';

// Destructuring
//export default (props) => <strong>{props.task}</strong>;

// Similar
//export default ({task}) => <strong>{task}</strong>;

export default (props) => (
  <div>
    <strong>{props.task}</strong>
    <button onClick={props.onDelete}>x</button>
  </div>
);
