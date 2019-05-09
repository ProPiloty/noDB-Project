// PACKAGE IMPORTS
const express = require('express');
const axios = require('axios');

// CONTROLLERS
const listCon = require('./controllers/lists_controller');
const cardCon = require('./controllers/cards_controller');

// EXPRESS SETUP
const app = express();

// MIDDLEWARE
app.use(express.json());

// LIST ENDPOINTS
app.post('/api/addList', listCon.addList); // CREATE - NEW LIST ON BOARD
app.get('/api/lists', listCon.getLists); // READ - ALL LISTS ON BOARD
app.put('/api/updateList/:id', listCon.updateList); // UPDATE - SPECIFIC LIST BY ID
app.delete('/api/deleteList/:id', listCon.deleteList); // DELETE - SPECIFIC LIST BY ID

// CARD ENDPOINTS
app.post('/api/addCard/:listID', cardCon.addCard) // CREATE - NEW CARD IN LIST
app.get('/api/cards/:listID', cardCon.getCards) // READ - ALL CARDS IN LIST
app.put('/api/updateCard/:listID/:cardID', cardCon.updateCard) // UPDATE - SPECIFIC CARD BY LIST AND ID
app.delete('/api/deleteCard/:listID/:cardID', cardCon.deleteCard) // DELETE - SPECIFIC CARD BY LIST AND ID

// SERVER RUNNING AND LISTENING
const PORT = 3050;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})
