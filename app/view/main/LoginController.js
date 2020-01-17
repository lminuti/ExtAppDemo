Ext.define('ModernApp.view.main.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logincontroller',

    async onLoginClick() {
        let userInfo = this.getView().getValues();
        let response = await ModernApp.model.Session.login(userInfo);
        let session = Ext.decode(response.responseText);

        ModernApp.getApplication().setSession(session); 
        
    },

    init() {

    }
});