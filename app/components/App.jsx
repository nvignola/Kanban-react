import React from 'react';
import uuid from 'uuid';
import Notes from './Notes';

// const notes = [
//   {
//     id: uuid.v4(),
//     task: 'Learn React'
//   },
//   {
//     id: uuid.v4(),
//     task: 'Do laundry'
//   },
//   {
//     id: uuid.v4(),
//     task: 'Do components'
//   }
// ]

// export default () => (
//   <div>
//     <button onClick={() => notes.push({id: uuid.v4(), task: 'New task'})}>+</button>
//     <Notes notes={notes} />
//   </div>
// );

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        },
        {
          id: uuid.v4(),
          task: 'Do components'
        }
      ]
    };

  }

  addNote = () => {
    // this.setState({
    //   notes: this.state.notes.concat([{
    //     id: uuid.v4(),
    //     task: 'New task'
    //   }])
    // });

    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uuid.v4(),
          task: 'New task v3'
        }
      ]
    });
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id != id)
    });

    // this.setState({
    //   notes: [
    //     ...this.state.notes.splice(0, this.state.notes.length - 1)
    //   ]
    // })
  };

  render() {
    const {notes} = this.state;

    return (
      <div>
        <button onClick={this.addNote.bind(this)}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}
