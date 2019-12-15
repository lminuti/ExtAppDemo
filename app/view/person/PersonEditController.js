Ext.define('ModernApp.view.person.PersonEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.personeditcontroller',

    onLoad() {
        console.log('onload');

        this.getView().load({
            url: '/modernapp/api/person.json'
        });
        /*
        let response = await Ext.Ajax.request({
            url: '/modernapp/api/person.json',
            scope: this
        });

        let data = Ext.decode(response.responseText);
        this.getView().setValues(data);
        */
    },

    async onSave(sender) {
        console.log('onsave');
        this.getView().fillRecord();
        await this.record.asyncSave();
        Ext.toast('Record salvato');
    },

    init() {
        if (this.getView().getData()) {
            this.record = this.getView().getData();
        } else {
            this.record = Ext.create('ModernApp.model.Person', {
                nome: 'fake'
            });
        }
        this.getView().setRecord(this.record);
    }
});