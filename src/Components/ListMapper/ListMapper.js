import React, {Component} from 'react';
import axios from 'axios';

// STYLESHEET IMPORTS
import './ListMapper.css';

// COMPONENT IMPORTS
import ListDisplay from '../ListDisplay/ListDisplay';
import CreateList from '../CreateList/CreateList';

// COMPONENT DEFINITIION
class ListMapper extends Component {
    constructor(){
        super();

        this.state = {
            lists: [],
        };
    };

    // ON LOAD -- GETS ALL DATA, UPDATES DISPLAY THROUGH STATE
    componentDidMount(){
        axios.get('/api/lists')
        .then((res) => {this.setState({ lists: res.data })})
        .catch((err) => {alert(err)});
    };

    // ON INVOKE -- ADDS A NEW LIST TO DATA, UPDATES DISPLAY THROUGH STATE
    addList = (listTitle) => {
        axios.post('/api/addList', { listTitle: listTitle })
        .then((res) => {this.setState({ lists: res.data })})
        .catch((err) => {alert(err)});
    };

    // ON INVOKE -- UPDATES A SPECIFIC LIST'S TITLE, UPDATES DISPLAY THROUGH STATE
    updateList = (listID, listTitle) => {
        axios.put(`/api/updateList/${listID}`, {listTitle: listTitle})
        .then((res) => {this.setState({ lists: res.data })})
        .catch((err) => {alert(err)});
    }

    // ON INVOKE -- DELETES A SPECIFIC LISTS, UPDATES DISPLAY THROUGH STATE
    deleteList = (listID) => {
        axios.delete(`/api/deleteList/${listID}`)
        .then((res) => {this.setState({ lists: res.data })})
        .catch((err) => {alert(err)});
    }

    render(){
        // DECONSTRUCTS STATE
        const {lists} = this.state;

        // MAPS OVER LISTS ON STATE, PASSES DATA & METHODS DOWN TO - ListDisplay -
        const listDisplay = lists.map((list) => (
            <div key={list.listID}>
                <ListDisplay listInfo={list} updateList={this.updateList} deleteList={this.deleteList} />
            </div>
        ));

        return (
            <section className="ListMapper">
                {listDisplay}
                <CreateList addList={this.addList} />
            </section>
        );
    };
};

export default ListMapper;