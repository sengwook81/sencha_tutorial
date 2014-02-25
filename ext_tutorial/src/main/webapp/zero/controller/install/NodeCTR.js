/**
 * 
 */
Ext.define('Zero.controller.install.NodeCTR',{
	extend: 'Ext.app.Controller',
	stores: [
	         'install.Nodes'
	],
	refs:[ 
       { ref: 'installNode', selector: '#installnode' }
	],
	init:function () {
		var me = this;
		console.log("CONTROLLER",me);
		me.control({
			'#installnode > gridpanel' :{
				selectionchange:me.onGridRowSelectChange
			},
			'#installnode > nodeform' :{
				afterrender:function () {
					//console.log("Node Form After Render");
				}
			},
			'#installnode > nodeform field' :{
				change:function (el , newVal , oldVal, opt) {
					//console.log("Node Form After Render",this.getInstallNode().getDetailForm());
					
				}
			},
			'#installnode' : {
				afterrender:function () {
					//console.log("AFTER RENDER FORM " ,me);
					console.log("Load Store" , me.getInstallNodesStore());
					me.getInstallNodesStore().load();
					me.getInstallNode().getMasterGrid().reconfigure( me.getInstallNodesStore());
				}
			}
		}
		);
		me.callParent();
		console.log("IN CONTROLLER GRID STORE ",me.getInstallNodesStore());
	},
	onChangeFormData:function () {
		
	},
	onGridRowSelectChange:function(model , record) {
		var me = this;
		console.log("Selection Change",arguments);
		record = record[0];
		var installNode = me.getInstallNode();
		var nodeForm = installNode.getDetailForm();
		var hadoopForm = Ext.ComponentQuery.query('#installnode > form  form[app_name=hadoop]')[0];
		var hiveForm = Ext.ComponentQuery.query('#installnode > form  form[app_name=hive]')[0];
		var hbaseForm = Ext.ComponentQuery.query('#installnode > form  form[app_name=hbase]')[0];
		
		// 이전행에 대한 변경처리 반영.
		if(nodeForm.getFormRecord()) {
			console.log("Node Prev Data",nodeForm.getFormRecord());
			nodeForm.getForm().updateRecord();
			if(hadoopForm && hadoopForm.getFormRecord()) {
				hadoopForm.getForm().updateRecord();	
			}
			
			if(hadoopForm && hadoopForm.getFormRecord()) {
				hadoopForm.getForm().updateRecord();	
			}
			
			if(hiveForm && hiveForm.getFormRecord()) {
				hiveForm.getForm().updateRecord();	
			}
			
			if(hbaseForm && hbaseForm.getFormRecord()) {
				hbaseForm.getForm().updateRecord();	
			}
			
			
		}
		
		nodeForm.setFormRecord(record);
		nodeForm.loadRecord(nodeForm.getFormRecord());
		if(record['hadoop']) {
//			console.log("Hadoop DataSet",record.getHadoop() );
			hadoopForm.setFormRecord(record.getHadoop());
//			console.log("PASS",hadoopForm.getFormRecord());
			hadoopForm.getForm().loadRecord(hadoopForm.getFormRecord());
		}
		else
		{
			hadoopForm.getForm().reset(true);
		}
		
		// Hive 처리
		if(record['hive']) {
//			console.log("Hive DataSet",record.getHive() );
			hiveForm.setFormRecord(record.getHive());
//			console.log("PASS",hiveForm.getFormRecord());
			hiveForm.getForm().loadRecord(hiveForm.getFormRecord());
		}
		else
		{
			hiveForm.getForm().reset(true);
		}
		
		// Hive 처리
		if(record['hbase']) {
//			console.log("HBase DataSet",record.getHbase() );
			hbaseForm.setFormRecord(record.getHbase());
//			console.log("PASS",hbaseForm.getFormRecord());
			hbaseForm.getForm().loadRecord(hbaseForm.getFormRecord());
		}
		else
		{
			hbaseForm.getForm().reset(true);
		}
		
		
	}
		
});