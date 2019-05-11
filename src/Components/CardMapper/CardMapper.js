import React, {Component} from 'react';
import axios from 'axios';

// Stylesheet
import './CardMapper.css';

// Components
import CardDisplay from '../CardDisplay/CardDisplay';
import CreateCard from '../CreateCard/CreateCard';

class CardMapper extends Component {
    constructor(props){
        super(props);

        this.state = {
            cards: props.cards,
            listID: props.listID,
        }
    }

    // componentDidMount = () => {
    //     axios.get(`/api/cards/${this.props.listID}`)
    //     .then((res) => {this.setState({ cards: res.data })})
    //     .catch((err) => {alert(err)});
    // }

    // ON INVOKE -- CREATES A NEW CARD, UPDATES DISPLAY THROUGH STATE
    addCard = (listID, cardTitle, cardDescription) => {
        axios.post(`/api/addCard/${listID}`, {cardTitle: cardTitle, cardDescription: cardDescription})
        .then((res) => {
            this.setState({
                cards: res.data,
            });
            })
        .catch((err) => {alert(err)});
    }

    // ON INVOKE -- UPDATES A SPECIFIC CARDS'S TITLE AND DESCRIPTION, UPDATES DISPLAY THROUGH STATE
    updateCard = (listID, cardID, cardTitle, cardDescription) => {
        axios.put(`/api/updateCard/${listID}/${cardID}`, {cardTitle: cardTitle, cardDescription: cardDescription})
        .then((res) => {
            this.setState({
                cards: res.data,
            });
            })
        .catch((err) => {alert(err)});
    }

    // ON INVOKE -- DELETES A SPECIFIC CARD, UPDATES DISPLAY THROUGH STATE
    deleteCard = (listID, cardID) => {
        axios.delete(`/api/deleteCard/${listID}/${cardID}`)
        .then((res) => {
            this.setState({
                cards: res.data,
            });
            })
        .catch((err) => {alert(err)});
    }

    render(){
        const {cards, listID} = this.state;

        const cardList = cards.map((card) => (
            <div key={card.cardID}>
                <CardDisplay card={card} updateCard={this.updateCard} deleteCard={this.deleteCard} />
            </div>
        ))
        return (
            <div>
                {cardList}
                <CreateCard listID={listID} addCard={this.addCard} />
            </div>
        )
    }
}

export default CardMapper;