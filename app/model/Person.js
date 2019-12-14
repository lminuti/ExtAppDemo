Ext.define('ModernApp.model.Person', {
    extend: 'ModernApp.model.Base',

    idProperty: 'nome',

    fields: [
        'nome', 'cognome', 'indirizzo'
    ],

    deleteRecord() {
        Ext.Ajax.request({
            method: 'DELETE',
            url: this.getProxy().getUrl(),
            params: {
                id: this.getId()
            }
        });
    },

    statics: {
        resource: 'personlist'
    }
     
});
