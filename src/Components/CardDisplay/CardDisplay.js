import React, {Component} from 'react';

// Stylesheet
import './CardDisplay.css';

class CardDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            editCard: false,
            listID: props.card.listID,
            cardID: props.card.cardID,
            cardTitle: props.card.cardTitle,
            cardDescription: props.card.cardDescription,
        }
    }

    toggleEdit = () => {
        this.setState({
            editCard: !this.state.editCard,
        })
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    addCard = (e) => {
        e.preventDefault();
        const {listID, cardTitle, cardDescription} = this.state;
        this.props.addCard(listID, cardTitle, cardDescription);
        this.toggleEdit();
    }

    updateCard = (e) => {
        e.preventDefault();
        const {listID, cardID, cardTitle, cardDescription} = this.state;
        this.props.updateCard(listID, cardID, cardTitle, cardDescription);
        this.toggleEdit();
    }

    deleteCard = (e) => {
        e.preventDefault();
        const {listID, cardID, cardTitle, cardDescription} = this.state;
        this.props.deleteCard(listID, cardID, cardTitle, cardDescription);
    }

    render(){
        const {card} = this.props;
        return(
            <div>
                {
                    !this.state.editCard ?
                    <div>
                        <div>
                            <h3>{card.cardTitle}</h3>
                            <button onClick={this.toggleEdit}>Edit Card</button>
                        </div>
                        <div>
                            <p>{card.cardDescription}</p>
                        </div>
                    </div>
                    :
                    <div>
                        <form>
                            <input value={this.state.cardTitle} name="cardTitle" onChange={this.handleInputChange} />
                            <textarea value={this.state.cardDescription} name="cardDescription" onChange={this.handleInputChange} />
                            <div>
                                <button onClick={this.updateCard}>Submit</button>
                                <button onClick={this.deleteCard}>Delete Card</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default CardDisplay;