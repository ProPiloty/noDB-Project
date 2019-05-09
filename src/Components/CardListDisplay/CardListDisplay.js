import React, {Component} from 'react';
import axios from 'axios';

// Components
import CardDisplay from '../CardDisplay/CardDisplay';

class CardListDisplay extends Component {
    constructor(){
        super();

        this.state = {
            cards: [],
        }
    }

    componentDidMount(){
        axios.get(`/api/cards/${this.props.listID}`)
        .then((res) => {this.setState({ cards: res.data })})
        .catch((err) => {alert(err)});
    }

    render(){
        const cardList = this.state.cards.map((card) => (
            <div key={card.cardID}>
                <CardDisplay card={card} />
            </div>
        ))
        return (
            <div>
                {cardList}
            </div>
        )
    }
}

export default CardListDisplay;