import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetails from "./ItemDetails";
import EditItemForm from "./EditItemForm";

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

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainInventoryList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (editedItem) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(editedItem);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedItem: null
    });
  }

  render() {
    let currVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currVisibleState =
        <EditItemForm
          item={this.state.selectedItem}
          onEditItem={this.handleEditingItemInList} />
      buttonText = "Return to Inventory List";
    } else if (this.state.selectedItem !== null) {
      currVisibleState = 
        <ItemDetails
          item={this.state.selectedItem} 
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Inventory List";
    } else if (this.state.formVisibleOnPage) {
      currVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Inventory List";
    } else {
      currVisibleState = <ItemList 
                            itemList={this.state.mainInventoryList}
                            onItemSelection={this.handleChangingSelectedItem} />
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