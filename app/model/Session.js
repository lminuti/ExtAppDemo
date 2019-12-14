Ext.define('ModernApp.model.Session', {
    extend: 'ModernApp.model.Base',

    statics: {

        login(params) {
            return Ext.Ajax.request({
                url: ModernApp.model.Base.getUrl(this.resource),
                params
            });
        },
    
        resource: 'session'
    }
     
});
