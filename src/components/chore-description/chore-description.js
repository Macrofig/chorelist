import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './chore-description.less!';
var $ = can.$;

import template from './chore-description.stache!';

can.Component.extend({
    tag: 'chore-description',
    template: template,
    scope: ViewModel
});
