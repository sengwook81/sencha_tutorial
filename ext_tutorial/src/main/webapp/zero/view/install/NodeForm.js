/**
 * 
 */
Ext.define('Zero.view.install.NodeForm',{
			extend:'Ext.form.FormPanel',
			mixins:['Zero.util.ex.StructureFormData'],
			flex:1,
			layout:{
				type:'vbox',
				align:'stretch'
			},
			items:[{
	                xtype: 'fieldcontainer',// 필드 컨테이너를 이용하여 OneRow에 여러개의 TextField배치.
	                fieldLabel: 'Node Information',
	                labelStyle: 'font-weight:bold;padding:0;',
	                layout: {type:'hbox'},
	                defaultType: 'textfield',
	                labelAlign:'top',
	                fieldDefaults: {
	                    labelAlign: 'top'
	                },
	                items: [{
	                    flex: 1,
	                    name: 'node_name',
	                    itemId: 'node_name',
	                    fieldLabel: 'NodeName',
	                    allowBlank: false
	                }, {
	                    flex: 1,
	                    name: 'node_addr',
	                    itemId: 'node_addr',
	                    fieldLabel: 'NodeAddress',
	                    margins: '0 0 0 5'
	                }, {
	                    flex: 1,
	                    name: 'node_user',
	                    itemId: 'node_user',
	                    fieldLabel: 'USERID',
	                    allowBlank: false,
	                    margins: '0 0 0 5'
	                }, {
	                    flex: 1,
	                    name: 'node_password',
	                    itemId: 'node_password',
	                    fieldLabel: 'PASSWORD',
	                    allowBlank: false,
	                    margins: '0 0 0 5'
	                }, {
	                    width: 300,
	                    name: 'node_home',
	                    itemId: 'node_home',
	                    fieldLabel: 'HOMEPATH',
	                    allowBlank: false,
	                    margins: '0 0 0 5'
	                }]
	            },
	            ,{
	            	// Application 선택 체크박스 리스트.
                	xtype:'checkboxgroup',
                	fieldLabel: 'Applications',
                	height:50,
                	labelAlign: 'top',
                	items: [
                            { boxLabel: 'HADOOP', name: 'bhadoop', inputValue: 'true' },
                            { boxLabel: 'HIVE', name: 'bhive', inputValue: 'true' },
                            { boxLabel: 'HBASE', name: 'bhbase', inputValue: 'true' },
                            { boxLabel: 'ZOOKEEPER', name: 'bzk', inputValue: 'true' },
                    ]
                },me.buildAppTabs()
			 ]
		});