Ext.define('ModernApp.view.main.Menu', {
    extend: 'Ext.ActionSheet',
    xtype: 'app-menu',

    controller: 'menucontroller',

    title: 'MyApp',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    margins: 0,
    padding: 0,

    defaults: {
        handler: 'onMenuItemClick',
        padding: 10
    },

    items: [{
        xtype: 'button',
        text: 'Home',
        iconCls: 'x-fa fa-home',
        targetXType: 'mainlist',
        route: 'home'
    },{
        xtype: 'button',
        text: 'Users',
        iconCls: 'x-fa fa-user',
        targetXType: 'maintoolbar',
        route: 'users'
    },{
        xtype: 'button',
        text: 'Groups',
        iconCls: 'x-fa fa-users',
        targetXType: 'personedit'
    },{
        xtype: 'button',
        text: 'Settings',
        iconCls: 'x-fa fa-cog',
        targetXType: 'personlist'
    }]
});