const data = require('./data');

module.exports = {
    addCard: (req, res) => {
        const listIndex = data.sampleData.findIndex((list) => (list.listID === parseInt(req.params.listID)));
        const newCardID = data.cardID;
        data.cardID++;
        const newCard = {
            cardID: newCardID,
            listID: +req.params.listID,
            cardTitle: req.body.cardTitle,
            cardDescription: req.body.cardDescription,
        }
        data.sampleData[listIndex].cards.push(newCard);
        res.status(200).send(data.sampleData[listIndex].cards);
    },
    getCards: (req, res) => {
        const listIndex = data.sampleData.findIndex((list) => (list.listID === +req.params.listID));
        const cardsList = data.sampleData[listIndex].cards;
        res.status(200).send(cardsList);
    },
    updateCard: (req, res) => {
        const listIndex = data.sampleData.findIndex((list) => (list.listID === +req.params.listID));
        const cardIndex = data.sampleData[listIndex].cards.findIndex((card) => (card.cardID === +req.params.cardID));
        data.sampleData[listIndex].cards[cardIndex].cardTitle = req.body.cardTitle;
        data.sampleData[listIndex].cards[cardIndex].cardDescription = req.body.cardDescription;
        res.status(200).send(data.sampleData[listIndex].cards);
    },
    deleteCard: (req, res) => {
        const listIndex = data.sampleData.findIndex((list) => (list.listID === +req.params.listID));
        const cardIndex = data.sampleData[listIndex].cards.findIndex((card) => (card.cardID === +req.params.cardID));
        data.sampleData[listIndex].cards.splice(cardIndex, 1);
        res.status(200).send(data.sampleData[listIndex].cards);
    }
}