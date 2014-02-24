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
		me = this;
		console.log("CONTROLLER",this);
		me.control({
			'#installnode > gridpanel' :{
				selectionchange:function(model , record) {
					record = record[0];
					var installNode = me.getInstallNode();
//					console.log("Target View",installNode.detailform);
//					console.log("Row Data " , record , record.getHadoop());
					// 설정해놓은 record 정보가 있다면. 이전값 저장처리 
					var nodeForm = installNode.getDetailForm();
					var hadoopForm = Ext.ComponentQuery.query('#installnode > form  form[app_name=hadoop]')[0];
					var hiveForm = Ext.ComponentQuery.query('#installnode > form  form[app_name=hive]')[0];
					var hbaseForm = Ext.ComponentQuery.query('#installnode > form  form[app_name=hbase]')[0];
					//console.log("HADOOP FORM ",hadoopForm);
					//console.log("HIVE FORM ",hiveForm);
					
					console.log("Node Data",record);
					nodeForm.setFormRecord(record);
					nodeForm.loadRecord(nodeForm.getFormRecord());
					if(record['hadoop']) {
						console.log("Hadoop DataSet",record.getHadoop() );
						hadoopForm.setFormRecord(record.getHadoop());
						console.log("PASS",hadoopForm.getFormRecord());
						hadoopForm.getForm().loadRecord(hadoopForm.getFormRecord());
					}
					else
					{
						hadoopForm.getForm().reset(true);
					}
					
					// Hive 처리
					if(record['hive']) {
						console.log("Hive DataSet",record.getHive() );
						hiveForm.setFormRecord(record.getHive());
						console.log("PASS",hiveForm.getFormRecord());
						hiveForm.getForm().loadRecord(hiveForm.getFormRecord());
					}
					else
					{
						hiveForm.getForm().reset(true);
					}
					
					// Hive 처리
					if(record['hbase']) {
						console.log("HBase DataSet",record.getHbase() );
						hbaseForm.setFormRecord(record.getHbase());
						console.log("PASS",hbaseForm.getFormRecord());
						hbaseForm.getForm().loadRecord(hbaseForm.getFormRecord());
					}
					else
					{
						hbaseForm.getForm().reset(true);
					}
					
					
				},
				itemclick:function (el , record , item , index) {
					
				}
			},
			'#installnode' : {
				afterrender:function () {
				}
			}
		}
		);
		me.callParent();
	}
});