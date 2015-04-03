import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './chore-item.less!';
var $ = can.$;

import template from './chore-item.stache!';

import '../chore-meta/chore-meta';
import '../chore-icon/chore-icon';
import '../chore-description/chore-description';

can.Component.extend({
    tag: 'chore-item',
    template: template,
    scope: ViewModel
});
