import React, {Component} from 'react';

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
            <form>
                <input name="listTitle" type="text" onChange={this.handleInputChange} value={this.state.listTitle} />
                <button onClick={this.handleAddList}>Create List</button>
            </form>
        )
    }
}

export default CreateList;