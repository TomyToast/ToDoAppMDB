import React, { Component } from 'react';
import ToDoList from './components/toDoList';
import ToDoItem from './components/toDoItem';
import './App.css';
import { MDBContainer } from "mdbreact";


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [],
      item: { key: '', text: '' }
    }
  }

  handleInput = (e) => {
    const itemText = e.target.value;

    this.setState({
      item: { key: Date.now(), text: itemText }
    })
  }

  handleAddNote = (e) => {
    e.preventDefault();
    console.log('works submit here!');
    const newItem = this.state.item;

    if (newItem.text !== ''){
      const items = [...this.state.list, newItem]
      this.setState({
        list: items,
        item: { key: '', text: '' }
      })
    } else {
      alert("Add note!")
    }
  }

  handleRemoveNote = (e) => {
    e.preventDefault();
    const { list } = this.state
    if (list.length !== 0){
      list.pop();
      this.setState({
        list: list,
      })
    } else {
      alert("There is no Note to remove!");
    }
  }

  handleClearNote = (e) => {
    e.preventDefault();
    const { list } = this.state
    if(list.length !== 0){
      this.setState({
      list: []
    })
      alert("All Notes deleted");
    } else {
      alert("There is no Note to remove!");
    }
  }

  render() {
    return (
      <div className="App blue-grey lighten-5">
        <MDBContainer>
          <ToDoList
          className="aqua-gradient"
          currentItem={this.state.item}
          handleInput={this.handleInput}
          addNote={this.handleAddNote}
          removeNote={this.handleRemoveNote}
          clearNote={this.handleClearNote}
        />
        <ToDoItem
          list={this.state.list}
        />
        </MDBContainer>
      </div>
    );
  }
}

export default App;
