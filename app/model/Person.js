Ext.define('ModernApp.model.Person', {
    extend: 'ModernApp.model.Base',

    idProperty: 'nome',

    fields: [
        { name: 'nome', type: 'string' },
        { name: 'cognome', type: 'string' },
        { name: 'indirizzo', type: 'string' },

        { 
            name: 'nomeCompleto', 
            type: 'string', 
            calculate(data) {
                return data.cognome + ' ' + data.nome;
            }        
        },
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
