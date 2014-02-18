/**
 * 
 */
Ext.define("Common.controller.MessageController",{
	extend: 'Ext.app.Controller',
	models:['msg.Message'],
	stores:['msg.Messages'],
	views:['msg.Message','msg.MessageEdit'],

	init:function () { 
		var me = this;
		console.log("##### Message Controller Init  ##########",me);
		me.control ( {
				'messageview': {
					render:function (el) { 
						me.getMsgMessagesStore().load();
					} 
				},
				'messageview > grid': {
					itemdblclick:function (el, record, item, index, e, eOpts) { 
						var editForm = Ext.create('Common.view.msg.MessageEdit',{});
						 form = editForm.down('form');
						 editForm.show();
						 form.loadRecord(record);
						 editForm.down('button[action=save]').on('click', function(btn) {
						        var rec = form.getRecord(),
						            values = form.getValues();

						        rec.set(values);
						        editForm.close();
						    });
					} 
				},
		});
	}
	
});
