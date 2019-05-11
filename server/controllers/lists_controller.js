const data = require('./data');

module.exports = {
    addList: (req, res) => {
        const newListID = data.listID;
        data.listID++;
        const newList = {
            listTitle: req.body.listTitle,
            listID: newListID,
            cards: [],
        };
        data.sampleData.push(newList);
        res.status(200).send(data.sampleData);
    },
    getLists: (req, res) => {
        res.status(200).send(data.sampleData);
    },
    updateList: (req, res) => {
        let index = data.sampleData.findIndex((list) => (list.listID === parseInt(req.params.id)));
        data.sampleData[index].listTitle = req.body.listTitle;
        res.status(200).send(data.sampleData);
    },
    deleteList: (req, res) => {
        const {id} = req.params;
        const deleteListIndex = data.sampleData.findIndex((list) => (list.listID === parseInt(id)));
        data.sampleData.splice(deleteListIndex, 1);
        res.status(200).send(data.sampleData);
    }
}