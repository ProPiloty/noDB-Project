const data = require('./data');

module.exports = {
    addList: (req, res) => {
        const newListID = data.listID;
        data.listID++;
        const newList = {
            listTitle: `New List: ${newListID}`,
            listID: newListID,
            cards: [],
        };
        data.sampleData.push(newList);
        res.status(200).send(data.sampleData[data.sampleData.length - 1]);
    },
    getLists: (req, res) => {
        res.status(200).send(data.sampleData);
    },
    updateList: (req, res) => {
        let index = data.sampleData.findIndex((list) => (list.listID === parseInt(req.params.id)));
        data.sampleData[index].listTitle = req.body.listTitle;
        res.status(200).send(data.sampleData[index]);
    },
    deleteList: (req, res) => {
        const deleteListIndex = data.sampleData.findIndex((list) => (list.listID === parseInt(req.params.id)));
        data.sampleData.splice(deleteListIndex, 1);
        res.status(200).send(data.sampleData);
    }
}