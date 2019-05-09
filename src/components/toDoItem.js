import React, { Component } from 'react';

class ToDoItem extends Component {

    render() {
        const { list } = this.props
        const elements = list.map( (element, ind) => {
            return (
                <li key={element.key}>
                    <div>
                        {`Task number ${ind + 1} ${element.text}`}
                    </div>
                </li>
            )
        })
      return (
        <ul>
            {elements}
        </ul>
      );
    }
  }

  export default ToDoItem;