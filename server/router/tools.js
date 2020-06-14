let conf = require('../conf');
let db = require('./db');

function filter(data, arr) {
    let result = Array.isArray(data) && data.map(item => {
        let obj = {};
        arr.forEach(key => obj[key] = item[key])
        return obj;
    })
    return result || []

}
module.exports = { ...conf, ...db, filter }