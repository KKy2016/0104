myApp.controller("HomeCtrl",["$scope","$http",function($scope,$http){
	$scope.str="这是首页";
	$scope.addrStr1="北京吉利大学-北校门 文德楼 4楼416室";
	$scope.addrStr="立水桥110";
	$scope.addAddResDis=true;
	$scope.addAddResDis2=true;
	$scope.changeDisplay=function(n){
		$scope.addAddResDis=n;
		console.log("$scope.addAddResDis:",$scope.addAddResDis);
	}
	$scope.addRFun=function(){
		$scope.addAddResDis2=true;
	}
}])

myApp.filter("mySub",function(){
	return function(text){
		if(text.length>15){
			return text.toString().substr(0,15)+"...";
		}else{
			return text;
		}
	}
})