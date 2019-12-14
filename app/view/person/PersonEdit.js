Ext.define('ModernApp.view.person.PersonEdit', {
    extend: 'Ext.form.Panel',
    xtype: 'personedit',

    title: 'Person',
    controller: 'personeditcontroller',

    tools: [{
        type: 'refresh',
        handler: 'onLoad'
    },{
        type: 'save',
        handler: 'onSave'
    }],
    
    layout: {
        type:'vbox'
    },

    items: [{
        xtype: 'textfield',
        label: 'Nome',
        name: 'nome'
    },{
        xtype: 'textfield',
        label: 'Cognome',
        name: 'cognome'
    },{
        xtype: 'textfield',
        label: 'Indirizzo',
        name: 'indirizzo'
    }]
});