Ext.define('ModernApp.model.Base', {
    extend: 'Ext.data.Model',

    inheritableStatics: {
        reader: 'json'
    },

    statics: {

        getUrl(resource) {
            let schema = Ext.data.schema.Schema.get(),
                urlTpl = new Ext.Template(schema.getProxy().template.url);

            return urlTpl.apply({
                resource
            });
        }
    },

    schema: {
        namespace: 'ModernApp.model',
        proxy: {
            type: 'ajax',
            url: 'api/{resource}.json',
            reader: {
                type: '{reader}'
            },
            writer: {
                type: '{reader}',
                writeAllFields: true
            }
        }
    }
});
