import React, {Component} from 'react';

// Stylesheet
import './CreateCard.css';

class CreateCard extends Component {
    constructor(){
        super();

        this.state = {
            cardTitle: '',
            cardDescription: '',
        }
    }

    handleUpdateInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleAddCard = (e) => {
        e.preventDefault();
        if (this.state.cardTitle !== '' && this.state.cardDescription !== '') {
            this.props.addCard(this.props.listID, this.state.cardTitle, this.state.cardDescription);
            this.setState({
                cardTitle: '',
                cardDescription: '',
            })
        } else {
            alert('You must have a title and description to create a new card');
        }
    }

    render(){
        return (
            <div>
                <hr></hr>
                <form onSubmit={this.handleAddCard}>
                    <input type="text" name="cardTitle" placeholder="Card Title" onChange={this.handleUpdateInput} value={this.state.cardTitle} />
                    <textarea type="text" name="cardDescription" placeholder="Card Description" onChange={this.handleUpdateInput} value={this.state.cardDescription} />
                    <button>Add Card</button>
                </form>
            </div>
        )
    }
}

export default CreateCard;