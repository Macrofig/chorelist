import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './chore-list.less!';
var $ = can.$;

import template from './chore-list.stache!';

import '../chore-item/chore-item';

can.Component.extend({
    tag: 'chore-list',
    template: template,
    scope: ViewModel,
    events: {
        inserted: function () {
            this.scope.loadChores();
        }
    }
});
