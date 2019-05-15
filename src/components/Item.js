import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class Item extends Component {
  checkItem = e => {
    this.props.store.checkItem(e.target.value);
  };
  editItem = () => {
    let name = this.props.item.name;
    let newLocation = prompt("Edit Location");
    this.props.store.editItem(name, newLocation);
  };

  deleteItem = () => {
    let name = this.props.item.name;
    this.props.store.deleteItem(name);
  };
  render() {
    let item = this.props.item;
    return (
      <div className={item.completed ? "crossed" : null}>
        <input type="checkbox" value={item.name} onClick={this.checkItem} />{" "}
        {item.name} {item.location}
        <button className="editButton" onClick={this.editItem}>
          Edit
        </button>
        <button className="delete-button" onClick={this.deleteItem}>
          x
        </button>
      </div>
    );
  }
}

export default Item;
