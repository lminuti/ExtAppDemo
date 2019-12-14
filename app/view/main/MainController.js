/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ModernApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onMenuClick() {
        Ext.Viewport.toggleMenu('left');
    },

    onItemSelected (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm (choice) {
        if (choice === 'yes') {
            //
        }
    },

    init() {
        Ext.Viewport.setMenu({
            xtype: 'app-menu'
        }, {
            side: 'left'
        });
    }
});
