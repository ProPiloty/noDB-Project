import React, {Component} from 'react';
import axios from 'axios';

class CardDisplay extends Component {
    constructor(){
        super();
        this.state = {
            editCard: false,
        }
    }

    render(){
        const {card} = this.props;
        return(
            <div>
                {
                    !this.state.editCard ?
                    <div>
                        <h3>{card.cardTitle}</h3>
                        <p>{card.cardDescription}</p>
                    </div>
                    :
                    <div>
                        <h3>yes edit</h3>
                    </div>
                }
            </div>
        )
    }
}

export default CardDisplay;