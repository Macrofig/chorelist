import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './chore-item.less!';
var $ = can.$;

import template from './chore-item.stache!';

can.Component.extend({
    tag: 'chore-item',
    template: template,
    scope: ViewModel
});
