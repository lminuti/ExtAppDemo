Ext.define('ModernApp.view.main.Login', {
    extend: 'Ext.form.Panel',
    
    xtype: 'app-login', 
    
    controller: 'logincontroller',

    layout: {
        type:'center'
    },

    items: {
        xtype: 'panel',
        title: 'Login',
        shadow: true,
        padding: 40,
        layout: {
            type:'vbox'
        },
        defaults: {
            width: 300
        },
        items: [{
            xtype: 'textfield',
            label: 'Username',
            name: 'username'
        },{
            xtype: 'passwordfield',
            label: 'Password',
            name: 'password'
        },{
            xtype: 'button',
            margin: 20,
            text: 'Login',
            handler: 'onLoginClick',
            ui: 'action'
        }]
    
    }


});