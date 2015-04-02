import can from 'can';

export default can.Model.extend({
    findAll: 'GET /chores',
    findOne: 'GET /chores/{id}'
}, {});
