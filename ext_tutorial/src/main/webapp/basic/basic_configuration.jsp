<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css"
	href="../lib/ext-4.2.1.883/resources/css/ext-all.css">
	<script type="text/javascript"
	src="../lib/ext-4.2.1.883/ext-all-dev.js">
</script>
<!-- 
<script type="text/javascript"
	src="../lib/ext-4.2.1.883/ext-all-debug-w-comments.js">
</script>
 -->
</head>
<body>

</body>
<script type="text/javascript">
Ext.define("Zero.extjs.Configuration",{
	statics:{
		counter:0
	},
	config: {
		title:"SengWook",
		options: {
			row:100,
			page:1
		}
	} ,
	// the 'self' property of an instance refers to its class
	constructor: function () { this.self.counter++;},
	applyTitle:function (data) 	{
		if(data == "Babo") {
			alert("You are Babo");
			Ext.log({level:'debug'}, 'debug message');
			throw new Error('['+ Ext.getDisplayName(arguments.callee) +'] It\'s Error');
			return ;
		}
		else {
			return data;			
		}
	},
	helloWorld:function () {
		throw new Error('['+ Ext.getDisplayName(arguments.callee) +'] Hello World');
	}
});

Ext.onReady(function (){
	
	var zConfiguration = Ext.create("Zero.extjs.Configuration");
	var zConfiguration2 = Ext.create("Zero.extjs.Configuration");
	alert(zConfiguration.getTitle());
	zConfiguration.setTitle("Babo");
	// access static property
	alert(Zero.extjs.Configuration.counter); // alert 2
});
</script>
</html>