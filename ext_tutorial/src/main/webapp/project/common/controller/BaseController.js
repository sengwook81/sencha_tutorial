/**
 * 
 */

Ext.define("Common.controller.BaseController",{
	extend: 'Ext.app.Controller',
	models:['frame.Menu'],
	stores:['frame.TopMenus' , 'frame.SubMenus','frame.TabbedPanels'],
	//views:['frame.TopMenu' , ],
	// topFrame의 Menu Panel에 대한 Reference정의.
	refs: [
	       {
	    	   ref:'topMenu',
	    	   selector:'topMenu',
	    	   autoCreate: true
	       } , {
	    	   ref:'subMenu',
	    	   selector:'subMenu',
	    	   autoCreate: true
	       } , {
	    	   ref:'centerFrame',
	    	   selector:'centerFrame',
	    	   autoCreate: true
	       }
	],
	init:function () { 
		var me = this;
		console.log("Base Controller : " ,this);
		
		var tokenDelimiter = ':';
		
		 Ext.History.on('change', function(token){
			 
			 console.log(token);
			 var childTab = me.getCenterFrame().child('#'+token);
			 me.getCenterFrame().setActiveTab(childTab);
			 /*
			 if(token == 'mainpage')
			 {
				 Ext.History.add('mainpage');
			 }
			 */
			 
			 /*
		        if(token){
		            var parts = token.split(tokenDelimiter);
		            var tabPanel = Ext.getCmp(parts[0]);
		            var tabId = parts[1];
		            
		            tabPanel.show();
		            tabPanel.setActiveTab(tabId);
		        }else{
		            // This is the initial default state.  Necessary if you navigate starting from the
		            // page without any existing history token params and go back to the start state.
		        	me.getCenterFrame().setActiveTab(0);
		        	me.getCenterFrame().getItem(0).setActiveTab(0);
		        }
		        */
		    });
		 
		me.control({
			'topMenu': {
				render: function () { 
					console.log("Render Top Menu");
					me.getFrameTopMenusStore().load(function () {
						me.getTopMenu().setMenu(me.getFrameTopMenusStore());
					});
				}
			},'topMenu > label': {
				click: function (el) { 
					console.log("Click Top MenuItem",el);
					me.topMenuChange(el.getMenuCode());
				}
			},'centerFrame' : {
				afterrender : function () {
					//Ext.History.add('mainpage');
				}
			},
			// 메인프레임의 탭 종료시 호출되는 이벤트.
			'centerFrame > panel': {
				close:function (panel , eOpts) {
					console.log("Tab Close" , panel , eOpts);
				}
			}
			, 'subMenu' :{
				itemclick:function (view, record, item, index, e) {
					//console.log(record,record.get('leaf'));
					if(record.get('leaf') == true) {
						var childTab = me.getCenterFrame().child('#'+record.get('menuCode'));
						if(childTab == null) {
							if(record.get('content') == '') {
								childTab = me.getCenterFrame().add({
									itemId:record.get('menuCode'),
									title:record.get('menuName'),
									xtype:'panel',
									html:record.get('menuName'),
									closable:true,
								});
								me.getCenterFrame().setActiveTab(childTab);
							}
							else 
							{
								
								if(Ext.ClassManager.isCreated('Common.controller.MessageController')){

									childTab = me.getCenterFrame().add(Ext.create(record.get('content'),{
										closable:true,
										itemId:record.get('menuCode'),
										title:record.get('menuName')
									}));

								}else{
								    // we need to auto-load that controller using Ext.require()
									console.log("Ext Require",Ext.ClassManager.isCreated('Common.controller.MessageController'));

									console.log("Auto Load Controller");

									var controller = Ext.create('Common.controller.MessageController');

									controller.init();
									
									childTab = me.getCenterFrame().add(Ext.create(record.get('content'),{
										closable:true,
										itemId:record.get('menuCode'),
										title:record.get('menuName')
									}));
									
									

								}
							}
						}
						// Hash 히스토리 등록.
						Ext.History.add(record.get('menuCode'));
						me.getCenterFrame().setActiveTab(childTab);
					}
				}
			} 
		});
	},
	topMenuChange:function(menuCode) {
		var me = this;
		me.getFrameSubMenusStore().proxy.url = "data/frame/submenu" + menuCode+".json";
		me.getFrameSubMenusStore().load();
	}
});