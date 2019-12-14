Ext.define('ModernApp.view.main.ToolbarController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.toolbarcontroller',

    onButtonClick() {
        Ext.Msg.alert('title', this.info);
    },

    init() {
        this.info = 'ciao';
    }
});