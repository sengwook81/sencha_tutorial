
 // 폼 패널을 이용하여 처리.
Ext.define('Zero.login.LoginPanel', {
	extend:'Ext.form.FormPanel',
	layout: {
        type: 'vbox', 		// 폼 패널 레이아웃으로 VBox 레이아웃 사용.
        align: 'stretch' 	// 아이템들을 폭에 맞도록 늘림. 
    },
    initComponent:function () { this.callParent(); console.log("LoginPanel Init");},
    border: false,
    bodyPadding: 10,
	width:300,
    fieldDefaults: {
        labelStyle: 'font-weight:bold'
    },
    items: [ {
        xtype: 'textfield',
        fieldLabel: 'USER ID',
        allowBlank: false
    }, {
        xtype: 'textfield',
        inputType: 'password' ,
        fieldLabel: 'PASSWORD',
        allowBlank: false
    }],

    buttons: [{
        text: 'Login',
        handler: function() {
            if (this.up('form').getForm().isValid()) {
            	 viewport = Ext.ComponentQuery.query('viewport')[0];
            	 container = this.up('form').ownerCt;
            	 viewport.remove(container);
            	 viewport.add(Ext.create("Zero.main.MainFrame"));
                //Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
            }
        }
    },{
        text: 'SignIn',
        handler: function(data) {
            if (this.up('form').getForm().isValid()) {
            	 container = this.up('form').ownerCt;
            	 container.remove(this.up('form'));
            	 container.add(Ext.create("Zero.login.SignInPanel"))
            }
        }
    }],
});