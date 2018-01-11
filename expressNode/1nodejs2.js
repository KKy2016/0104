var express = require("express");
var app = express();
var fs = require("fs");
var bodyParser = require("body-parser");

// 创建 application/x-www-form-urlencoded 编码解析
//var urlencodedParser = bodyParser.urlencoded({ extended: false });
//app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

app.use(express.static("./../img"));

//跨域问题
app.use("*", function(req, res, next) {
	//res.setHeader("Access-Control-Allow-Origin", "*"),
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
	res.setHeader("Access-Control-Allow-Methods", "POST");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	next();
});
app.get("/getData",function(req,res){
	fs.readFile("./data.json",function(err,data){
		if(err){
			
		}else{
			res.end(data.toString());
		}
	})
})
app.post("/addPost", function(req, res) {
	/*res.writeHead(200, {
		"content-type": "text/html;charset=utf-8",
	});*/
	//console.log(req.body);
	var obj = req.body;
	obj.id = (new Date()).getTime() + "";
	//console.log("obj:", obj);
	//res.end(JSON.stringify(obj));
	fs.readFile("./data.json", function(err, data) {
		if(err) {
		} else {
			//console.log("data.toString():",data.toString());
			var arr=JSON.parse(data.toString());
			arr.push(obj);
			fs.writeFile("./data.json",JSON.stringify(arr),function(err){
				if(err){
					
				}else{
					console.log("写入成功");
					res.end(JSON.stringify(arr));
				}
			})
		}
	})

});


var server = app.listen(81, function() {
	console.log("开启服务!");
})