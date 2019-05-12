import React, {Component} from 'react';

// STYLESHEET IMPORTS
import './ListDisplay.css'

// COMPONENT IMPORTS
import CardMapper from '../CardMapper/CardMapper';

// COMPONENT DEFINITION
class ListDisplay extends Component {
    constructor(props){
        super(props);

        this.state = {
            editList: false,
            listID: props.listInfo.listID,
            listTitle: props.listInfo.listTitle,
            cards: props.listInfo.cards,
        }
    }

    // TOGGLES EDIT PROPERTY ON STATE
    toggleEdit = () => {
        this.setState({
            editList: !this.state.editList,
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    updateList = (e) => {
        e.preventDefault();
        const {listID, listTitle} = this.state;
        this.props.updateList(listID, listTitle);
        this.toggleEdit();
    }

    deleteList = (e) => {
        e.preventDefault();
        const {listID} = this.state;
        this.props.deleteList(listID);
    }

    render(){
        // DECONSTRUCTS STATE
        const {editList, listID, listTitle, cards} = this.state;

        return(
            <div className="ListDisplay">
                {
                    !editList ?
                    <div className="nonEditTopper">
                        <h1 className="nonEditTopperH1">{listTitle}</h1>
                        <button onClick={this.toggleEdit} className="nonEditTopperEdit">Edit</button>
                    </div>
                    :
                    <div className="editTopper">
                        <input value={listTitle} name="listTitle" onChange={this.handleInputChange} className="editTopperInput" />
                        <button onClick={this.updateList} className="editTopperSubmit">Submit</button>
                        <button onClick={this.deleteList} className="editTopperDelete">Delete</button>
                    </div>
                }
                <hr className="ListDisplayHR"></hr>
                <div>
                    <CardMapper cards={cards} listID={listID} />
                </div>
            </div>
        )
    }
}

export default ListDisplay;