import React from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedItem: null,
      editing: false
    };
  }

  handleAddItem = () => {
    if (this.state.selectedItem !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newItem);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Inventory List";
    } else {
      currVisibleState = <ItemList 
                            itemList={this.state.mainInventoryList} />
      buttonText = "Add Item";
    }

    return (
      <React.Fragment>
        <button onClick={this.handleAddItem}>{buttonText}</button>
        {currVisibleState}
      </React.Fragment>
    );
  }
}

export default InventoryControl;