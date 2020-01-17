/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 */

Ext.define('ModernApp.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',
    id: 'main-container',

    requires: [
        'Ext.MessageBox',
        'Ext.layout.Fit',
        'ModernApp.view.person.PersonEdit'
    ],

    iconCls: 'x-fa fa-user',
    title: 'ModenAppDemo',

    tools: [{
        id: 'main-menu-button',
        iconCls: 'x-fa fa-bars',
        handler: 'onMenuClick',
        hidden: true
    }],

    controller: 'main',
    viewModel: 'main',

    layout: 'card',

    padding: '10 0 0 0',

    items: [{
        xtype: 'app-login'
    }]

});
