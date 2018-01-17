var myApp=angular.module("myApp",["ui.router"]);

myApp.controller("myCtrl",["$scope",function($scope){
	$scope.imgNum=0;
	$scope.arrIn=[
		{title:"首页",href:"home",imgUrl0:"home0.png",imgUrl1:"home1.png"},
		{title:"闪送超市",href:"sup",imgUrl0:"sup0.png",imgUrl1:"sup1.png"},
		{title:"购物车",href:"car",imgUrl0:"car0.png",imgUrl1:"car1.png"},
		{title:"我的",href:"user",imgUrl0:"user0.png",imgUrl1:"user1.png"}
	];
	
	$scope.changImg=function($index){
		$scope.imgNum=$index;
	}
}]);

myApp.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when("!",{templateUrl:"home"}).otherwise("/404","home");
	$stateProvider
	.state("home",{
		url:"/home",
		templateUrl:"page/home/home.html",
		controller:"HomeCtrl"
	})
	.state("sup",{
		url:"/sup",
		templateUrl:"page/sup/sup.html",
		controller:"SupCtrl"
	})
	.state("car",{
		url:"/car",
		templateUrl:"page/car/car.html",
		controller:"CarCtrl"
	})
	.state("user",{
		url:"/user",
		templateUrl:"page/user/user.html",
		controller:"UserCtrl"
	})
	.state("other",{
		url:"/404"
	})
}])
