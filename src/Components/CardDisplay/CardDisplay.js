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
            <div className="CardDisplay">
                {
                    !this.state.editCard ?
                    <div className="nonEditCard">
                        <div className="nonEditTop">
                            <h3 className="nonEditH3">{card.cardTitle}</h3>
                            <button onClick={this.toggleEdit}className="nonEditEdit">edit</button>
                        </div>
                        <hr className="cardHR"></hr>
                        <div className="nonEditBottom">
                            <p>{card.cardDescription}</p>
                        </div>
                    </div>
                    :
                    <div className="editCard">
                        <form className="editCardForm">
                            <input value={this.state.cardTitle} name="cardTitle" onChange={this.handleInputChange} className="editCardInput" />
                            <textarea value={this.state.cardDescription} name="cardDescription" onChange={this.handleInputChange}  className="editCardArea" />
                            <div className="editCardFormButtons">
                                <button onClick={this.updateCard} className="editCardSubmit">Submit</button>
                                <button onClick={this.deleteCard} className="editCardDelete">Delete</button>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default CardDisplay;