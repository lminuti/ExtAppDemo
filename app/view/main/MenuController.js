Ext.define('ModernApp.view.main.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu',

    onMenuItemClick(button) {
        ModernApp.getApplication().showView(button.targetXType); 
    },

    /**
     * Intercetta l'evento login generato dall'oggetto application
     * 
     * @param {Ext.Application} app L'oggetto "application"
     * @param {*} session i dati di sessione restituiti dal server
     */
    onAppLogin(app, session) {
        this.getView().removeAll();
        for (let item of session.items) {
            this.getView().add({
                xtype: 'button',
                ui: 'alt',
                text: item.text,
                iconCls: item.iconCls,
                targetXType: item.targetXType
            });
        }
    },

    init() {

    }
});