Ext.define('ModernApp.view.main.Login', {
    extend: 'Ext.form.Panel',
    
    xtype: 'app-login', 
    
    controller: 'logincontroller',

    layout: {
        type:'vbox'
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
        text: 'Login',
        handler: 'onLoginClick'
    }]

});