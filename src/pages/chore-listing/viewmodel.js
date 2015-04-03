import can from 'can';
import 'can/map/define/define';

import Chores from '../../models/chores/chores';

export default can.Map.extend({
    define: {
        chores: {
            value: Chores.List
        } 
    },
    Chores: Chores,
    loadChores: function () {
        var self = this,
            Chores = self.attr('Chores'),
            def = Chores.findAll({}),
            chores = self.attr('chores');
            
        def.then(function (resp) {
            chores.replace(resp);
        });
        
        def.always(function () {
            console.log('done loading chores.');
        });
    }
});
