import React, {Component} from 'react';
import axios from 'axios';

class CardDisplay extends Component {
    constructor(){
        super();
        this.state = {
            cards: [],
        }
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <h3>CardDisplay</h3>
        )
    }
}

export default CardDisplay;