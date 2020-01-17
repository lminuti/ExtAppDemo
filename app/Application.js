/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ModernApp.Application', {
    extend: 'Ext.app.Application',

    name: 'ModernApp',

    defaultXType: 'mainlist',

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    launch() {
    },

    getSession() {
        return this.session;
    },

    setSession(session) {
        let headers = Ext.Ajax.getDefaultHeaders() || {};
        this.session = session;
        Ext.Ajax.setDefaultHeaders(Ext.apply(headers, {
            Authorization: 'Bearer ' + session.token
        }));
        ModernApp.getApplication().showView(this.defaultXType); 
        Ext.getCmp('main-menu-button').show();
        Ext.ComponentQuery.query('app-menu')[0].fireEvent('login', this, session);
    },

    showView(xtype, params, append) {
        let container = Ext.getCmp('main-container');
        if (!append) {
            container.removeAll();
        }
        container.add({
            xtype,
            params
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
