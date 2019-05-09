import React, {Component} from 'react';
import axios from 'axios';

// Components
import CardListDisplay from '../CardListDisplay/CardListDisplay';

class BoardListDisplay extends Component {
    constructor(){
        super();

        this.state = {
            lists: [],
        }
    };

    componentDidMount(){
        axios.get('/api/lists')
        .then((res) => {this.setState({ lists: res.data })})
        .catch((err) => {alert(err)});
    }

    render(){
        const listDisplay = this.state.lists.map((list) => (
            <div key={list.listID}>
                <h1>{list.listTitle}</h1>
                <CardListDisplay listID={list.listID} />
            </div>
        ))
        return (
            <div>
                {listDisplay}
            </div>
        )
    }
}

export default BoardListDisplay;