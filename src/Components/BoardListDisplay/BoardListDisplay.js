import React, {Component} from 'react';
import axios from 'axios';

// Components
import CardListDisplay from '../CardListDisplay/CardListDisplay';

class BoardListDisplay extends Component {
    constructor(){
        super();

        this.setState = {

        }
    }

    render(){
        return (
            <div>
                <h1>BoardListDisplay</h1>
                <CardListDisplay />
            </div>
        )
    }
}

export default BoardListDisplay;