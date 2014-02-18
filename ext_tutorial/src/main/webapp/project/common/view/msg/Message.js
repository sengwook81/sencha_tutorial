/**
 * 
 */

Ext.define('Common.view.msg.Message', {
	extend : 'Ext.panel.Panel',
	alias:'widget.messageview',
	initComponent : function() {
		var me = this;
		console.log('Init Message View',this);
		me.items = [ {
			xtype : 'textfield',
			fieldLabel: '메시지코드',
			name:'msgCode'
		} ,
		{
			xtype : 'textfield',
			fieldLabel: '메시지',
			name:'msgName'
		} 
		, me.getMessageGrid()
		];
		this.callParent(arguments);
	},
	getMessageGrid: function () {
		Ext.data.StoreManager.each(function (item , index , len) {
			console.log("ManagedStore : " ,item);
		});
		
		var prefix = {},
		values = [];
		
		Ext.Object.each(Ext.ClassManager.maps.aliasToName,function(key,value){
			var px = key.split(".")[0];
	
			if(!prefix[px]){
				prefix[px] = px;
				values.push(px);
				console.log(prefix[px]);
			}
		});
		console.log(values);
		
		console.log(Ext.ClassManager.getAliasesByName('Common.view.msg.Message'));
		
		
		return Ext.create('Ext.grid.Panel', {
		    title: '메세지리스트',
		    store: 'msg.Messages',
		    columns: [
		        { text: '메세지코',  dataIndex: 'msgCode' , width:100  },
		        { text: '메세지명', dataIndex: 'msgName', width:100 },
		        { text: '내용', dataIndex: 'msg' , flex: 1 }
		    ],
		});
	}
});