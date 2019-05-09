import React, { Component } from 'react';

class ToDoList extends Component {

    render() {

        const { currentItem,
                handleInput,
                addNote,
                removeNote,
                clearNote
                } = this.props

      return (
        <>
            <form onSubmit={addNote}>
                <input
                    value={currentItem.text}
                    placeholder="Add note here..."
                    onChange={handleInput}
                />
                <button type="submit" name="submit">Add note</button>
            </form>
            <button onClick={removeNote} name="remove">Remove</button>
            <button onClick={clearNote} name="clear">Clear</button>
        </>
      );
    }
  }

  export default ToDoList;