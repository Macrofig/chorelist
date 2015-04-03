import can from 'can';
import 'can/util/fixture/fixture';

var chores = [
    {
        name: 'Dust',
        choreType: 'floor-stick',
        changeType: 'two-coins',
        description: 'Test lorem ipsum',
        meta: [
            {
                label: 'amount',
                value: '0.50'
            }, {
                label: 'difficulty',
                value: '1'
            }
        ]
    },
    {
        name: 'Dishes',
        choreType: 'wash-sink',
        changeType: 'one-bill',
        description: 'Heyooooo!!!',
        meta: [
            {
                label: 'amount',
                value: '1.00'
            }, {
                label: 'difficulty',
                value: '3'
            }
        ]
    },
    {
        name: 'Bath',
        choreType: 'tub',
        changeType: 'one-coin',
        description: 'lorem ipsum...',
        meta: [
            {
                label: 'amount',
                value: '0.25'
            }, {
                label: 'difficulty',
                value: '1'
            }
        ]
    }
];
can.fixture('GET /chores', function () {
    return chores;
});

can.fixture('GET /chores/{name}', function (req) {
    var items = new can.List(chores);
    items.filter(function (item) {
        return item.name.toLowercase() === req.data.name.toLowercase();
    });
    return items.length > 0 ? items[0].attr(): {};
});
