Ext.define('ModernApp.view.main.MenuController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menucontroller',

    onMenuItemClick(button) {
        ModernApp.getApplication().showView(button.targetXType); 
    },

    init() {

    }
});