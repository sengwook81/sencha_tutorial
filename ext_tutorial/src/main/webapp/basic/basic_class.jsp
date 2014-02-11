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
	src="../lib/ext-4.2.1.883/ext-all-debug-w-comments.js">
</script>
</head>
<body>

</body>
<script type="text/javascript">
Ext.define("Zero.sample.FirstClass", {
	name:"Zero's",
	constructor: function (name) 
	{
		this.name = name;
	},
	hello: function () {
		alert(this.name + " World");
	}	
},function () {
console.log("First Class Created");	
} );

Ext.onReady(function (){
	
	
	var firstClass = Ext.create("Zero.sample.FirstClass","SengWook");
	
	firstClass.hello();
});
</script>
</html>