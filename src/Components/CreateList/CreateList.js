import React, {Component} from 'react';

// STYLESHEET
import './CreateList.css';

class CreateList extends Component {
    constructor(){
        super();

        this.state = {
            listTitle: '',
        }
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleAddList = (e) => {
        e.preventDefault();
        if (this.state.listTitle !== '') {
            this.props.addList(this.state.listTitle);
            this.setState({
                listTitle: '',
            })
        } else {
            alert('You must have a title to create a new list')
        }
    }

    render(){
        return (
            <div className="CreateList">
                <form className="CreateListForm">
                    <input name="listTitle" type="text" onChange={this.handleInputChange} value={this.state.listTitle} placeholder="List Title" className="createListInput" />
                    <button onClick={this.handleAddList} className="createListAdd">Add List</button>
                </form>
                <hr className="CreateListHr"></hr>
            </div>
        )
    }
}

export default CreateList;