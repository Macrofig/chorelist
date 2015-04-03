import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './chore-icon.less!';
var $ = can.$;

import template from './chore-icon.stache!';

can.Component.extend({
    tag: 'chore-icon',
    template: template,
    scope: ViewModel
});
