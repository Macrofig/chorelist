import can from 'can';
import 'can/util/fixture/fixture';

var chores = [
    {name: 'Test'}
];
can.fixture('GET /chores', function () {
    console.log("POOP");

    return chores;
});

can.fixture('GET /chores/{id}', function () {
    return [];
});
