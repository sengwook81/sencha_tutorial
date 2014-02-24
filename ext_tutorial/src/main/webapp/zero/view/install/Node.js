/**
 * 
 */
// 노드 목록 조회 뷰 정의.
Ext.define('Zero.view.install.Node',{
	extend:'Ext.panel.Panel',
	layout:{
		type:'vbox',
		align:'stretch'
	},
	mixins:['Zero.util.ex.StructureFormData'],
	alias:'widget.installNodeView',
	id:'installnode',
	controllers:['Zero.controller.install.NodeCTR'],
	requires: [
	    'Zero.store.install.Nodes'
    ],
    initComponent:function () {
    	me = this;
    	var masterGrid = me.masterGrid();
    	var detailform = me.formView();
    	
    	me.getMasterGrid = function () {
    		return masterGrid;
    	};
    	me.getDetailForm = function () {
    		return detailform;
    	};
    	Ext.apply(me, {
    		items:[
    		   masterGrid,
    		   detailform
    		],
    	});
    	me.callParent(arguments);
    	me.on('afterrender', me.registControllers, me);
    },
	masterGrid:function () {
		return Ext.create('Ext.grid.Panel',{
			id:'nodegrid',
			store:Ext.data.StoreManager.lookup('install_nodes'),
			flex:1,
    		columns:[
    		{
    			text:'ID',dataIndex:'node_id',width:30
    		}, {
    			text:'HOST',dataIndex:'node_addr',width:80
    		}, {
    			text:'NAME',dataIndex:'node_name',width:80
    		}, {
    			text:'USER',dataIndex:'node_user',width:80
    		}, {
    			text:'PASSWORD',dataIndex:'node_password',renderer:function () {
    				return "*****";
    			}
    		}, {
    			text:'HOME',dataIndex:'node_home',width:300
    		}
	        ],
		});
	},formView:function () {
		// Hadoop Node 정보를 표기하기 위한 Form 구성.
		return  Ext.create('Zero.view.install.NodeForm');
	},
	buildAppTabs:function (appsStore) {
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
						boxLabel  : 'SECONDARY NAME NODE',
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
	},
	registControllers: function(){
	        //Instanciate the controllers into the global Applications controllers array
	     Ext.each(this.controllers, function(control){
	            var controller = Zero.app.controllers.get(control);
	            if (!controller) {
	                controller = Ext.create(control, {
	                    application: Zero.app,
	                    id: control
	                });
	                Zero.app.controllers.put(control, controller);
					controller.init(); // Run init on the controller
	            }
	       		//controller.init(); //Run init on the controller         
	        });
	    }
	
});