/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ModernApp.Application', {
    extend: 'Ext.app.Application',

    name: 'ModernApp',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch() {
    },

    myTest() {
        console.log('mytest');
    },

    showView(xtype) {
        let container = Ext.getCmp('main-container');
        container.removeAll();
        container.add({
            xtype
        });   
        Ext.Viewport.hideAllMenus(); 
    },

    onAppUpdate () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
