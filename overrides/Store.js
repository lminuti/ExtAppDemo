Ext.define('ModernApp.overrides.Store', {
   
    override: 'Ext.data.Store',

    asyncLoad(options) {
        let me = this;
        return new Ext.Promise(function (resolve, reject) {
            me.load(Ext.apply(options || {}, {
                callback(records, operation, success) {
                    if (success) {
                        resolve(records);
                    } else {
                        reject(operation);
                    }
                }
            }));
        });        
    }

});