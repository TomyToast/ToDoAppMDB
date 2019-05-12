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
                <button className="btn btn-sm success-color" type="submit" name="submit">Add note</button>
            </form>
            <button className="btn btn-sm warning-color-dark" onClick={removeNote} name="remove">Remove</button>
            <button className="btn btn-sm danger-color" onClick={clearNote} name="clear">Clear</button>
        </>
      );
    }
  }

  export default ToDoList;