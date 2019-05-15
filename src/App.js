import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import Item from "./components/Item";
import DevTools from "mobx-react-devtools";

@observer
class App extends Component {
  handleChange = e => {
    this.setState({
      newItem: e.target.value
    });
  };
  addItem = () => {
    this.props.store.addItem(this.state.newItem);
  };
  render() {
    const itemsList = this.props.store.list;
    return (
      <div className="App">
        <DevTools />
        <input onChange={this.handleChange} />
        <button onClick={this.addItem}>Add</button>
        {itemsList.map((c, i) => (
          <Item item={c} store={this.props.store} key={i} />
        ))}
      </div>
    );
  }
  // comment
}

export default App;
