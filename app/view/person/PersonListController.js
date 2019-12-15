Ext.define('ModernApp.view.person.PersonListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personlistcontroller',

    onGridClick(sender, location) {
    },

    onDeleteClick() {
        if (this.currentRecord()) {
            this.currentRecord().deleteRecord();
        }
    },

    onEditClick(sender, location) {
        if (this.currentRecord()) {
            ModernApp.lib.Util.showDialog('personedit', this.currentRecord());
        }
    },

    onAddClick(sender, location) {
        ModernApp.lib.Util.showDialog('personedit');
    },

    async onLoad() {
        let records = await this.lookup('grid').getStore().load();
        console.log(records);
    },

    currentRecord() {
        return this.grid.getSelection();
    },

    init() {
        this.onLoad();
        this.grid = this.lookup('grid');
    }
});