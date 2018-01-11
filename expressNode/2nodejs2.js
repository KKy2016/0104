var express=require("express");
var app=express();
var fs=require("fs");
var bodyParser=require("body-parser");
app.use(express.static('./../img'));

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/",function(req,res){
	var file="./../2PC2.html";
	ReadFun(file,res);
});
app.get("/angular/angular.min.js",function(req,res){
	var file="./../angular/angular.min.js";
	ReadFun(file,res);
});

app.get("/angular/angular-ui-router.min.js",function(req,res){
	var file="./../angular/angular-ui-router.min.js";
	ReadFun(file,res);
});

function ReadFun(file,res){
	fs.readFile(file,function(err,data){
		if(err){
		}else{
			res.end(data)
		}
	})
}

app.post("/addPost",urlencodedParser,function(req,res){
	console.log(req.body);
	var obj=req.body;
	obj.id=(new Date()).getTime()+"";
	console.log("obj:",JSON.stringify(obj));
	res.end(JSON.stringify(obj));
});




var server = app.listen(81, function () {
	console.log("nodejs2 开启服务!");
})
