Ext.define('ModernApp.view.main.Toolbar', {
    extend: 'Ext.Panel',
    xtype: 'maintoolbar',

    title: 'test',

    controller: 'toolbarcontroller',

    tools: [{
        reference: 'helpButton',
        type: 'help',
        handler: 'onButtonClick'
    },{
        iconCls: 'x-fa fa-user'
    }],
    
    defaults: {
        xtype: 'panel',
        border: true,
        margin: 5
    },

    layout: {
        type:'vbox'
    },

    items: [{
        layout: 'vbox',
        items: [{
            text: 'click',
            xtype: 'button'
        },{
            text: 'click',
            xtype: 'button'
        }]
    },{
        html: 'uno',
        flex: 2
    },{
        html: 'due'
    },{
        html: 'tre'
    },{
        html: 'quattro',
        flex: 1
    }]
});