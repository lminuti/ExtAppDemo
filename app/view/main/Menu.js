Ext.define('ModernApp.view.main.Menu', {
    extend: 'Ext.ActionSheet',
    xtype: 'app-menu',

    controller: 'menu',

    title: 'MyApp',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    margins: 0,
    padding: 0,

    bodyCls: 'button-group alt',

    header: {
        border: false
    },

    defaults: {
        handler: 'onMenuItemClick',
        padding: 10
    },

    listeners: {
        login: 'onAppLogin'
    }
    
});