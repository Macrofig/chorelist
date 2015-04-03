import can from 'can';
import ViewModel from './viewmodel';
import 'can/view/stache/stache';
import './chore-meta.less!';
var $ = can.$;

import template from './chore-meta.stache!';

can.Component.extend({
    tag: 'chore-meta',
    template: template,
    scope: ViewModel
});
