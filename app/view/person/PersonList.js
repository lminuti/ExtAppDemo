Ext.define('ModernApp.view.person.PersonList', {
    extend: 'Ext.Panel',
    xtype: 'personlist',

    title: 'Person list',
    controller: 'personlistcontroller',

    tools: [{
        type: 'refresh',
        handler: 'onLoad'
    },{
        iconCls: 'x-fa fa-plus',
        handler: 'onAddClick'
    },{
        iconCls: 'x-fa fa-pencil-alt',
        handler: 'onEditClick'
    }, {
        type: 'minus',
        handler: 'onDeleteClick'
    }],
    

    layout: {
        type:'fit'
    },

    items: [{
        xtype: 'grid',
        reference: 'grid',
        store: {
            model: 'ModernApp.model.Person'
        },
        columns: [{ 
            text: 'Nome',
            dataIndex: 'nomeCompleto',
            flex: 1
        }, { 
            text: 'Indirizzo',
            dataIndex: 'indirizzo'
        }],
        listeners: {
            childtap: 'onGridClick'
        }
    
    }]
});