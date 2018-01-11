var express=require("express");
var app=express();
var fs=require("fs");
var bodyParser=require("body-parser");
app.use(express.static('./../img'));

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/",function(req,res){
	fs.readFile("./../PC2.html",function(err,data){
		if(err){
			
		}else{
			res.end(data);
		}
	})
});
app.get("/angular/angular.min.js",function(req,res){
	fs.readFile("./../angular/angular.min.js",function(err,data){
		if(err){
			
		}else{
			res.end(data);
		}
	})
});

app.get("/angular/angular-ui-router.min.js",function(req,res){
	fs.readFile("./../angular/angular-ui-router.min.js",function(err,data){
		if(err){
			
		}else{
			res.end(data);
		}
	})
});

function ReadFun(file){
	fs.readFile(file,function(err,data){
		if(err){
			
		}else{
			res.end(data);
		}
	})
}

var server = app.listen(81, function () {
	console.log("nodejs2 开启服务!");
})
