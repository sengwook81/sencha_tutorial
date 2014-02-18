/**
 * 
 */

Ext.define('Common.view.msg.MessageEdit', {
	extend : 'Ext.window.Window',
	alias:'widget.messageeditview',
	layout:'fit',
	autoShow:true,
	initComponent : function() {
		var me = this;
		console.log('Init MessageEdit View',this);
		 me.items =[ {  // Let's put an empty grid in just to illustrate fit layout
		        xtype: 'form',
		        items: [{
                    xtype: 'textfield',
                    name : 'msgCode',
                    fieldLabel: '메세지코드'
                },{
                    xtype: 'textfield',
                    name : 'msgName',
                    fieldLabel: '메세지명'
                },{
                    xtype: 'textfield',
                    name : 'msg',
                    fieldLabel: '메세지내용'
                }]
		    }];
	     me.buttons = [{
             text: 'Save',
             action: 'save'
         },{
             text: 'Cancel',
             scope: this,
             handler: this.close
         }];
		this.callParent(arguments);
	}
});