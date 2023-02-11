import React from "react";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetails from "./ItemDetails";
import EditItemForm from "./EditItemForm";

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainInventoryList: [],
      poundsSold: 0,
      formVisibleOnPage: false,
      selectedItem: null,
      editing: false,
      errorMessage: ""
    };
  }

  handleAddItem = () => {
    if (this.state.selectedItem !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false,
        errorMessage: ""
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
        errorMessage: ""
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newItem);
    this.setState({
      mainInventoryList: newMainInventoryList,
      formVisibleOnPage: false,
      errorMessage: ""
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainInventoryList.filter(item => item.id === id)[0];
    this.setState({
      selectedItem: selectedItem,
      errorMessage: ""
    });
  }

  handleEditClick = () => {
    this.setState({ 
      editing: true,
      errorMessage: ""
    });
  }

  handleEditingItemInList = (editedItem) => {
    const editedMainInventoryList = this.state.mainInventoryList
      .filter(item => item.id !== this.state.selectedItem.id)
      .concat(editedItem);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedItem: null,
      errorMessage: ""
    });
  }

  handleDeletingItem = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(item => item.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedItem: null,
      errorMessage: ""
    });
  }

  handleSellPound = (id) => {
    const currItem = this.state.mainInventoryList.filter(item => item.id === id)[0];
    
    if (currItem.pounds === 0) {
      this.setState({ errorMessage: `${currItem.name} is out of beans!`})
    } else {
      currItem.pounds -= 1
  
      const editedMainInventoryList = this.state.mainInventoryList
        .filter(item => item.id !== id)
        .concat(currItem);
  
      let currPoundsSold = this.state.poundsSold;
      currPoundsSold++;
  
      this.setState({
        mainInventoryList: editedMainInventoryList,
        poundsSold: currPoundsSold,
        errorMessage: ""
      });
    }
  }

  render() {
    let currVisibleState = null;
    let buttonText = null;
    let errorMessage = this.state.errorMessage;

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
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingItem} />
      buttonText = "Return to Inventory List";
    } else if (this.state.formVisibleOnPage) {
      currVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>
      buttonText = "Return to Inventory List";
    } else {
      currVisibleState = <ItemList 
                            itemList={this.state.mainInventoryList}
                            onItemSelection={this.handleChangingSelectedItem} 
                            onSellPound={this.handleSellPound} />
      buttonText = "Add Item";
    }

    return (
      <React.Fragment>
        <div className="main-page">
          <div className="side-bar">
            <p>{this.state.poundsSold}lbs <strong>sold</strong></p>
            <p id="error"><strong>{errorMessage}</strong></p>
            <button onClick={this.handleAddItem}>{buttonText}</button>
          </div>
          <div className="main-column">
            {currVisibleState}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default InventoryControl;