Ext.define('ModernApp.lib.Util', {

    statics: {
        showDialog(xtype, data) {
            let dialog = Ext.create({
                xtype: 'dialog',
           
                layout: 'fit',

                padding: 0,
                margin: 0,

                items: [{
                    xtype,
                    data   
                }],
           
                buttons: {
                    ok () { // standard button (see below)
                        dialog.destroy();
                    }
                }
            });
           
            dialog.show();
        }     
    }
});