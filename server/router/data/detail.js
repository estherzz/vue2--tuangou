let { collection, end, ObjectId } = require('../db');
module.exports = (req, res) => {

    collection('product')
        .then(({ col, db }) => {
            col
                .findOne({ _id: ObjectId(req.query.id) })
                .then(data => end(res, data || {}, db))
                .catch(err=>end(res, {}, db))
        })
        .catch(err => { console.log(err); res.json({}) })
} 