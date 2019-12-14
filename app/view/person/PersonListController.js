Ext.define('ModernApp.view.person.PersonListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personlistcontroller',

    currentRecord: null,

    onGridClick(sender, location) {
        this.currentRecord = location.record;
        //ModernApp.lib.Util.showDialog('personedit', location.record);
    },

    onDeleteClick() {
        if (this.currentRecord) {
            this.currentRecord.deleteRecord();
        }
    },

    onEditClick(sender, location) {
        if (this.currentRecord) {
            ModernApp.lib.Util.showDialog('personedit', this.currentRecord);
        }
    },

    onAddClick(sender, location) {
        ModernApp.lib.Util.showDialog('personedit');
    },

    async onLoad() {
        let records = await this.lookup('grid').getStore().load();
        console.log(records);
    },


    init() {
        this.onLoad();
    }
});