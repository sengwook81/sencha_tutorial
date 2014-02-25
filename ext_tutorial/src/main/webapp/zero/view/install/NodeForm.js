/**
 * 
 */
Ext.define('Zero.view.install.NodeForm',{
			extend:'Ext.form.FormPanel',
			mixins:['Zero.util.ex.StructureFormData'],
			alias:'widget.nodeform',
			flex:1,
			layout:{
				type:'vbox',
				align:'stretch'
			},
			initComponent:function () {
				var me = this;
				Ext.apply(me,{
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
				me.callParent(arguments);
			},
			buildAppTabs:function () {
				var me = this;
				tabPanel = Ext.create('Ext.tab.Panel',{
					 tabPosition: 'bottom',
					 flex:1,
					 bodyPadding: 10,
					 items:[
					        me.buildHadoopTab(),
					        me.buildHiveTab(),
					        me.buildHBaseTab()
					 ],
				});
				return tabPanel;
			},
			buildHadoopTab:function () {
				hadoopTab = Ext.create('Zero.view.install.AppsForm',{
					title:'HADOOP',
					flex:1,
					app_name:'hadoop',
					items:[
					{
						title	   : 'HADOOP',
						xtype      : 'fieldcontainer',
			            fieldLabel : 'NodeType',
			            defaultType: 'radiofield',
			            layout:'hbox',
			            defaults: {
			                flex: 1
			            },
			            items:[
				            {
								boxLabel  : 'NAME NODE',
								name      : 'app_type',
								inputValue: 'nn'
				            },
				            {
								boxLabel  : 'SECONDARY NODE',
								name      : 'app_type',
								inputValue: 'sn'
				            },
				            {
								boxLabel  : 'DATA NODE',
								name      : 'app_type',
								inputValue: 'dn'
				            }
			            ]
					}
					]
				});
				return hadoopTab;
			},
			buildHiveTab:function () {
				hiveTab = Ext.create('Zero.view.install.AppsForm',{
					title:'HIVE',
					flex:1,
					app_name:'hive',
					items:[
					{
						xtype:'combo',
						name:'app_type',
						queryMode:'local',
						displayField:'name',
						valueField:'code',
						fieldLabel:'DB_TYPE',
						editable: false,
						store:Ext.create('Ext.data.Store', {
						    fields: ['code', 'name'],
						    data : [
						        {"code":"hsql", "name":"HSQLDB"},
						        {"code":"prostage", "name":"PROSTAGE"},
						        {"code":"mysql", "name":"MYSQL"}
						    ]
						})
					},
					{
						xtype:'textfield',
						name:'app_host',
						fieldLabel:'HOST',
					},
					{
						xtype:'textfield',
						name:'app_user',
						fieldLabel:'USERID',
					},
					{
						xtype:'textfield',
						name:'app_passwsord',
						fieldLabel:'PASSWORD',
					},
					{
						xtype:'numberfield',
						name:'app_port',
						fieldLabel:'DB_PORT',
					}
					]
				});
				return hiveTab;
			},
			buildHBaseTab:function () {
				hbaseTab = Ext.create('Zero.view.install.AppsForm',{
					title:'HBASE',
					flex:1,
					app_name:'hbase',
					items:[
					{
						xtype:'combobox',
						name:'app_type',
						queryMode:'local',
						displayField:'name',
						valueField:'code',
						fieldLabel:'SERVER_TYPE',
						editable: false,
						store:Ext.create('Ext.data.Store', {
						    fields: ['code', 'name'],
						    data : [
						        {"code":"hm", "name":"MASTER SERVER"},
						        {"code":"rs", "name":"REGION SERVER"},
						    ]
						})
					}
					]
				});
				return hbaseTab;
			}
		});