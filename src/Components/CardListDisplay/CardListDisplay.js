import React, {Component} from 'react';
import axios from 'axios';

// Components
import CardDisplay from '../CardDisplay/CardDisplay';

class CardListDisplay extends Component {
    constructor(){
        super();

        this.state = {

        }
    }

    render(){
        return (
            <div>
                <h2>CardListDisplay</h2>
                <CardDisplay />
            </div>
        )
    }
}

export default CardListDisplay;