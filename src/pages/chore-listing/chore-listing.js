import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './chore-listing.less!';
var $ = can.$;

import template from './chore-listing.stache!';

import '../../components/chore-list/chore-list';

can.Component.extend({
    tag: 'chore-listing',
    template: template,
    scope: ViewModel,
    events: {
        inserted: function () {
            this.scope.loadChores();
        }
    }
});
