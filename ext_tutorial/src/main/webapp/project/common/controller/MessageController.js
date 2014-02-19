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
						var messageWindow = Ext.getCmp('MessageWindow');
						console.log(el,messageWindow);
						if(!el.editwindow) {
							el.editwindow = Ext.create('Common.view.msg.MessageEdit',{
								Id:'MessageWindow'
							});
						}
						 form = el.editwindow.down('form');
						 el.editwindow.show();
						 form.loadRecord(record);
						 el.editwindow.down('button[action=save]').on('click', function(btn) {
					        var rec = form.getRecord(),
					            values = form.getValues();
					        rec.set(values);
					        el.editwindow.close();
					    });
					} 
				},
		});
	}
	
});
