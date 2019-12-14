Ext.define('ModernApp.overrides.Model', {
   
    override: 'Ext.data.Model',

    inheritableStatics: {
        asyncLoad(id, options, session) {
            let me = this;
            return new Ext.Promise(function (resolve, reject) {
                me.load(id, Ext.apply(options || {}, {
                    callback(record, operation, success) {
                        if (success) {
                            //operation.records = records;
                            resolve(record);
                        } else {
                            reject(operation);
                        }
                    }
                }), session);
            });        
        }
    
    },

    asyncLoad(options) {
        let me = this;
        return new Ext.Promise(function (resolve, reject) {
            me.load(Ext.apply(options || {}, {
                callback(record, operation, success) {
                    if (success) {
                        resolve(record);
                    } else {
                        reject(operation);
                    }
                }
            }));
        });        
    },

    asyncSave(options) {
        let me = this;
        return new Ext.Promise(function (resolve, reject) {
            me.save(Ext.apply(options || {}, {
                callback(record, operation, success) {
                    if (success) {
                        resolve(record);
                    } else {
                        reject(operation);
                    }
                }
            }));
        });        
    }

});