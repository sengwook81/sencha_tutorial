Ext.define('Dooby.view.field.HadoopField', {
	extend: 'Zero.ex.form.field.PopupEditorDataViewField',
	xtype:'hadoopappfield',
    initComponent: function() {
    	console.log("HadoopField:",this,this.values);
        this.tpl = new Ext.XTemplate(
                '<tpl for=".">',
                    '<div class="dataviewfields-row">',
                        '<div class="data">',
                            '<span class="app_name">{app_name}</span>, ',
                            '<span class="app_type">{app_type}</span>',
                        '</div>',
                        '<div class="icons">',
                            '<div class="delete-icon"></div>',
                            '<div class="edit-icon"></div>',
                        '</div>',
                    '</div>',
                '</tpl>'
        );

        this.callParent();
    }
});