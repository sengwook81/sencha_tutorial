/**
 * 메뉴처리 처리를 위한 모델.
 * 메뉴명 , 메뉴코드 , 상위 메뉴코드 , Content정보를 갖는다.
 */
Ext.define('Common.model.frame.Menu',{
	extend : 'Ext.data.Model',
	fields : [ {
		name : 'menuName',		// 메뉴
		type : 'string'
	}, {
		name : 'menuCode',		// 메뉴코
		type : 'string'
	}, {
		name : 'parentMenu',	// 부모메뉴코
		type : 'string'
	}, {
		name : 'content',		// 메뉴 Content
		type : 'string'
	}, {
		name : 'leaf',		// 메뉴 Content
		type : 'boolean',
		defaultValue: false,
		persist : false
	}, {
		name : 'expanded',		// 메뉴 Content
		type : 'boolean',
		defaultValue: false,
		persist : false
	}
	]
});