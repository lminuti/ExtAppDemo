Ext.define('ModernApp.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',

    defaultXType: 'mainlist',

    async onLoginClick() {
        let userInfo = this.getView().getValues();
        let response = await ModernApp.model.Session.login(userInfo);
        let session = Ext.decode(response.responseText);
        
        let headers = Ext.Ajax.getDefaultHeaders() || {};
        Ext.Ajax.setDefaultHeaders(Ext.apply(headers, {
            Authorization: 'Bearer ' + session.token
        }));
        ModernApp.getApplication().showView(this.defaultXType); 
        Ext.getCmp('main-menu-button').show();
    },

    init() {

    }
});